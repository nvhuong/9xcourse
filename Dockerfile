# ============================
# Base image with Node.js
# ============================
FROM node:18-alpine AS base

# Cài các tiện ích cơ bản & enable corepack
RUN apk add --no-cache libc6-compat curl bash \
  && corepack enable \
  && corepack prepare pnpm@latest --activate

WORKDIR /app

# ============================
# Install dependencies
# ============================
FROM base AS deps

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Cài dependencies dùng pnpm
RUN pnpm install --frozen-lockfile

# ============================
# Build Next.js app
# ============================
FROM base AS builder

WORKDIR /app

# Copy node_modules từ deps
COPY --from=deps /app/node_modules ./node_modules

# Copy toàn bộ mã nguồn
COPY . .

# Tắt telemetry của Next.js
ENV NEXT_TELEMETRY_DISABLED 1

# Build app ở chế độ standalone
RUN pnpm build

# ============================
# Runner (production image)
# ============================
FROM base AS runner

WORKDIR /app

# Set biến môi trường production
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Tạo user không chạy bằng root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Copy build output (standalone + static)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Đảm bảo thư mục cache có quyền đúng
RUN mkdir -p .next && chown -R nextjs:nodejs .next

# Chạy với user không phải root
USER nextjs

EXPOSE 3000

# Chạy server Next.js ở chế độ standalone
CMD ["node", "server.js"]
