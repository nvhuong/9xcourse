import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '9xCourse',
  description: '9xCourse - Khóa học công nghệ thực hành, cam kết thực tập tại công ty công nghệ hàng đầu Việt Nam',
  generator: '9xCourse',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
