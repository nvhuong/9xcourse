"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  Code,
  Database,
  Globe,
  Monitor,
  Settings,
  Users,
  Zap,
  Phone,
  MessageCircle,
  Facebook,
  X,
  Calendar,
  Clock,
  Play,
} from "lucide-react"

export default function HomePage() {
  const [showCurriculum, setShowCurriculum] = useState(false)
  const [selectedCourseForCurriculum, setSelectedCourseForCurriculum] = useState(null)
  const [showVideoDemo, setShowVideoDemo] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState("mini")

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const courses = [
    {
      id: "backend-java",
      title: "Backend Java Developer",
      description: "Spring Boot, Microservices, MySQL",
      icon: Database,
      color: "from-red-500 to-orange-500",
      featured: true,
      packages: {
        mini: {
          price: "2.990.000",
          originalPrice: "3.500.000",
          duration: "6 buổi",
          sessions: "6 buổi x 3h",
          benefits: [
            "6 buổi học thực chiến qua Zoom",
            "Xây dựng 1 REST API hoàn chỉnh",
            "Tài liệu Java/Spring Boot thực tế",
            "Mentor 1:1 hỗ trợ bài tập lớn",
          ],
          curriculum: [
            {
              day: 1,
              title: "Java Core & Spring Boot Setup",
              topics: ["Java OOP basics", "Spring Boot project setup", "Dependency Injection", "First REST API"],
            },
            {
              day: 2,
              title: "Database & JPA Integration",
              topics: ["MySQL setup", "JPA/Hibernate", "Entity mapping", "Repository pattern"],
            },
            {
              day: 3,
              title: "REST API Development",
              topics: ["CRUD operations", "Request/Response handling", "Validation", "Error handling"],
            },
            {
              day: 4,
              title: "Authentication & Security",
              topics: ["Spring Security", "JWT implementation", "Login/Register API", "Authorization"],
            },
            {
              day: 5,
              title: "E-commerce API Project",
              topics: ["Product management", "User management", "Order processing", "Payment integration"],
            },
            {
              day: 6,
              title: "Testing & Deployment",
              topics: ["Unit testing", "Integration testing", "Docker deployment", "Production setup"],
            },
          ],
        },
        advance: {
          price: "5.990.000",
          originalPrice: "7.000.000",
          duration: "15 buổi",
          sessions: "15 buổi x 3h",
          benefits: [
            "15 buổi học chuyên sâu qua Zoom",
            "Microservices & Spring Cloud",
            "Mentor 1:1 hỗ trợ đồ án tốt nghiệp",
            "Cơ hội thực tập tại công ty công nghệ",
          ],
          curriculum: [
            {
              day: 1,
              title: "Java Core & Spring Boot Mastery",
              topics: [
                "Advanced Java concepts",
                "Spring Boot deep dive",
                "Configuration management",
                "Profiles & Properties",
              ],
            },
            {
              day: 2,
              title: "Database Design & Advanced JPA",
              topics: [
                "Database design principles",
                "Advanced JPA features",
                "Query optimization",
                "Transaction management",
              ],
            },
            {
              day: 3,
              title: "REST API Best Practices",
              topics: ["RESTful design principles", "API versioning", "Documentation with Swagger", "Rate limiting"],
            },
            {
              day: 4,
              title: "Security & Authentication",
              topics: ["Spring Security advanced", "OAuth2 & JWT", "Role-based access", "Security best practices"],
            },
            {
              day: 5,
              title: "Microservices Architecture",
              topics: ["Microservices patterns", "Service discovery", "API Gateway", "Inter-service communication"],
            },
            {
              day: 6,
              title: "Spring Cloud Ecosystem",
              topics: ["Spring Cloud Config", "Circuit breaker", "Load balancing", "Distributed tracing"],
            },
            {
              day: 7,
              title: "Message Queues & Events",
              topics: ["RabbitMQ/Kafka", "Event-driven architecture", "Async processing", "Message patterns"],
            },
            {
              day: 8,
              title: "Caching & Performance",
              topics: ["Redis integration", "Caching strategies", "Performance optimization", "Monitoring"],
            },
            {
              day: 9,
              title: "Testing Strategies",
              topics: ["Unit testing advanced", "Integration testing", "Contract testing", "Test automation"],
            },
            {
              day: 10,
              title: "DevOps & CI/CD",
              topics: ["Docker containerization", "Kubernetes basics", "CI/CD pipelines", "Deployment strategies"],
            },
            {
              day: 11,
              title: "Monitoring & Logging",
              topics: ["Application monitoring", "Centralized logging", "Health checks", "Alerting"],
            },
            {
              day: 12,
              title: "E-commerce Platform - Part 1",
              topics: ["System design", "User service", "Product catalog", "Inventory management"],
            },
            {
              day: 13,
              title: "E-commerce Platform - Part 2",
              topics: ["Order processing", "Payment integration", "Notification service", "Search functionality"],
            },
            {
              day: 14,
              title: "Performance & Scalability",
              topics: ["Load testing", "Database optimization", "Horizontal scaling", "CDN integration"],
            },
            {
              day: 15,
              title: "Production Deployment",
              topics: ["Production checklist", "Environment setup", "Monitoring setup", "Go-live strategy"],
            },
          ],
        },
        combo: {
          price: "7.990.000",
          originalPrice: "10.500.000",
          duration: "25 buổi",
          sessions: "25 buổi x 3h",
          benefits: [
            "Toàn bộ quyền lợi Mini + Advance",
            "System Design & Architecture",
            "Code review chuyên nghiệp",
            "Xác thực thực tập có dấu đỏ",
            "Tiết kiệm 2.510.000đ",
          ],
          curriculum: [
            // Weeks 1-2: Foundation (Mini content)
            {
              day: 1,
              title: "Java Fundamentals & Spring Boot",
              topics: ["Java OOP mastery", "Spring Boot setup", "Dependency Injection", "Configuration management"],
            },
            {
              day: 2,
              title: "Database Design & JPA",
              topics: ["Database design", "JPA/Hibernate advanced", "Entity relationships", "Query optimization"],
            },
            {
              day: 3,
              title: "REST API Development",
              topics: ["RESTful principles", "CRUD operations", "Validation", "Error handling"],
            },
            {
              day: 4,
              title: "Security Implementation",
              topics: ["Spring Security", "JWT authentication", "Authorization", "Security best practices"],
            },
            {
              day: 5,
              title: "Testing & Quality Assurance",
              topics: ["Unit testing", "Integration testing", "Test-driven development", "Code quality"],
            },
            // Weeks 3-4: Advanced Backend
            {
              day: 6,
              title: "Microservices Architecture",
              topics: ["Microservices patterns", "Service decomposition", "API Gateway", "Service mesh"],
            },
            {
              day: 7,
              title: "Spring Cloud Ecosystem",
              topics: ["Service discovery", "Configuration management", "Circuit breaker", "Load balancing"],
            },
            {
              day: 8,
              title: "Message Queues & Events",
              topics: ["Apache Kafka", "RabbitMQ", "Event sourcing", "CQRS pattern"],
            },
            {
              day: 9,
              title: "Caching & Performance",
              topics: ["Redis implementation", "Caching strategies", "Performance tuning", "Memory optimization"],
            },
            {
              day: 10,
              title: "Database Optimization",
              topics: ["Query optimization", "Indexing strategies", "Database sharding", "Read replicas"],
            },
            // Weeks 5-6: System Design & Architecture
            {
              day: 11,
              title: "System Design Principles",
              topics: ["Scalability patterns", "High availability", "Fault tolerance", "CAP theorem"],
            },
            {
              day: 12,
              title: "Distributed Systems",
              topics: ["Distributed computing", "Consensus algorithms", "Data consistency", "Eventual consistency"],
            },
            {
              day: 13,
              title: "Cloud Architecture",
              topics: ["AWS/Azure services", "Serverless architecture", "Container orchestration", "Cloud patterns"],
            },
            {
              day: 14,
              title: "DevOps & Infrastructure",
              topics: ["Infrastructure as Code", "Kubernetes advanced", "Monitoring", "Observability"],
            },
            {
              day: 15,
              title: "Security Architecture",
              topics: ["Security by design", "Threat modeling", "Secure coding", "Compliance"],
            },
            // Weeks 7-8: Real-world Projects
            {
              day: 16,
              title: "E-commerce System Design",
              topics: ["System architecture", "Database design", "API design", "Scalability planning"],
            },
            {
              day: 17,
              title: "User Management Service",
              topics: ["Authentication service", "User profiles", "Permission management", "Social login"],
            },
            {
              day: 18,
              title: "Product Catalog Service",
              topics: ["Product management", "Search functionality", "Recommendation engine", "Inventory tracking"],
            },
            {
              day: 19,
              title: "Order Processing System",
              topics: ["Order workflow", "Payment processing", "Inventory management", "Order tracking"],
            },
            {
              day: 20,
              title: "Notification & Communication",
              topics: ["Email service", "SMS integration", "Push notifications", "Real-time messaging"],
            },
            // Week 9: Advanced Topics
            {
              day: 21,
              title: "Machine Learning Integration",
              topics: ["ML model integration", "Recommendation systems", "Data pipelines", "A/B testing"],
            },
            {
              day: 22,
              title: "Analytics & Reporting",
              topics: ["Data collection", "Analytics dashboard", "Business intelligence", "Real-time metrics"],
            },
            {
              day: 23,
              title: "Mobile API Development",
              topics: ["Mobile-first API", "Offline support", "Push notifications", "App versioning"],
            },
            {
              day: 24,
              title: "Performance & Monitoring",
              topics: ["APM tools", "Performance profiling", "Capacity planning", "SLA management"],
            },
            {
              day: 25,
              title: "Production & Career Guidance",
              topics: ["Production deployment", "Career roadmap", "Interview preparation", "Industry trends"],
            },
          ],
        },
      },
    },
    {
      id: "fullstack",
      title: "Full Stack Developer",
      description: "React + Node.js/Java, Database",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      featured: true,
      packages: {
        mini: {
          price: "3.490.000",
          originalPrice: "4.000.000",
          duration: "8 buổi",
          sessions: "8 buổi x 3h",
          benefits: [
            "8 buổi học thực chiến qua Zoom",
            "Xây dựng 1 web app hoàn chỉnh",
            "Frontend React + Backend Node.js",
            "Mentor 1:1 hỗ trợ bài tập lớn",          ],
          curriculum: [
            {
              day: 1,
              title: "Frontend Foundation",
              topics: ["HTML5/CSS3 essentials", "JavaScript ES6+", "DOM manipulation", "Responsive design"],
            },
            {
              day: 2,
              title: "React Fundamentals",
              topics: ["Components & JSX", "State & Props", "Event handling", "React Hooks"],
            },
            {
              day: 3,
              title: "Backend with Node.js",
              topics: ["Express.js setup", "API routing", "Middleware", "Database connection"],
            },
            {
              day: 4,
              title: "Database & Authentication",
              topics: ["MongoDB/MySQL", "User authentication", "JWT tokens", "Password hashing"],
            },
            {
              day: 5,
              title: "Frontend-Backend Integration",
              topics: ["API calls", "State management", "Error handling", "Loading states"],
            },
            {
              day: 6,
              title: "Full Stack Project",
              topics: ["Todo/Blog application", "CRUD operations", "User management", "Deployment"],
            },
            {
              day: 7,
              title: "Advanced Features",
              topics: ["File upload", "Real-time features", "Performance optimization", "Testing"],
            },
            {
              day: 8,
              title: "Production Deployment",
              topics: ["Heroku/Vercel deployment", "Environment variables", "Database hosting", "Domain setup"],
            },
          ],
        },
        advance: {
          price: "6.490.000",
          originalPrice: "7.500.000",
          duration: "18 buổi",
          sessions: "18 buổi x 3h",
          benefits: [
            "18 buổi học chuyên sâu qua Zoom",
            "Advanced React + Microservices",            
            "Mentor 1:1 hỗ trợ đồ án tốt nghiệp",
            "Cơ hội thực tập tại công ty công nghệ",
          ],
          curriculum: [
            {
              day: 1,
              title: "Frontend Foundation",
              topics: ["HTML5/CSS3 essentials", "JavaScript ES6+", "DOM manipulation", "Responsive design"],
            },
            {
              day: 2,
              title: "React Fundamentals",
              topics: ["Components & JSX", "State & Props", "Event handling", "React Hooks"],
            },
            {
              day: 3,
              title: "Backend with Node.js",
              topics: ["Express.js setup", "API routing", "Middleware", "Database connection"],
            },
            {
              day: 4,
              title: "Database & Authentication",
              topics: ["MongoDB/MySQL", "User authentication", "JWT tokens", "Password hashing"],
            },
            {
              day: 5,
              title: "Frontend-Backend Integration",
              topics: ["API calls", "State management", "Error handling", "Loading states"],
            },
            {
              day: 6,
              title: "Full Stack Project",
              topics: ["Todo/Blog application", "CRUD operations", "User management", "Deployment"],
            },
            {
              day: 7,
              title: "Advanced Features",
              topics: ["File upload", "Real-time features", "Performance optimization", "Testing"],
            },
            {
              day: 8,
              title: "Production Deployment",
              topics: ["Heroku/Vercel deployment", "Environment variables", "Database hosting", "Domain setup"],
            },
            {
              day: 9,
              title: "Advanced React",
              topics: ["Next.js", "SSR", "SEO", "Performance"],
            },
            {
              day: 10,
              title: "Microservices",
              topics: ["Architecture", "Communication", "Deployment"],
            },
            {
              day: 11,
              title: "Testing",
              topics: ["Unit", "Integration", "E2E"],
            },
            {
              day: 12,
              title: "DevOps",
              topics: ["CI/CD", "Docker", "Kubernetes"],
            },
            {
              day: 13,
              title: "Security",
              topics: ["OWASP", "Authentication", "Authorization"],
            },
            {
              day: 14,
              title: "Performance Optimization",
              topics: ["Profiling", "Caching", "Load Balancing"],
            },
            {
              day: 15,
              title: "Real-time Applications",
              topics: ["WebSockets", "Server-Sent Events"],
            },
            {
              day: 16,
              title: "GraphQL",
              topics: ["Schema", "Queries", "Mutations"],
            },
            {
              day: 17,
              title: "Serverless",
              topics: ["Functions", "Databases"],
            },
            {
              day: 18,
              title: "Progressive Web Apps",
              topics: ["Service Workers", "Manifest"],
            },
          ],
        },
        combo: {
          price: "8.490.000",
          originalPrice: "11.500.000",
          duration: "28 buổi",
          sessions: "28 buổi x 3h",
          benefits: [
            "Toàn bộ quyền lợi Mini + Advance",
            "DevOps & Deployment",
            "Portfolio 3 dự án thực tế",
            "Xác thực thực tập có dấu đỏ",
            "Tiết kiệm 3.010.000đ",
          ],
          curriculum: [
            {
              day: 1,
              title: "Frontend Foundation",
              topics: ["HTML5/CSS3 essentials", "JavaScript ES6+", "DOM manipulation", "Responsive design"],
            },
            {
              day: 2,
              title: "React Fundamentals",
              topics: ["Components & JSX", "State & Props", "Event handling", "React Hooks"],
            },
            {
              day: 3,
              title: "Backend with Node.js",
              topics: ["Express.js setup", "API routing", "Middleware", "Database connection"],
            },
            {
              day: 4,
              title: "Database & Authentication",
              topics: ["MongoDB/MySQL", "User authentication", "JWT tokens", "Password hashing"],
            },
            {
              day: 5,
              title: "Frontend-Backend Integration",
              topics: ["API calls", "State management", "Error handling", "Loading states"],
            },
            {
              day: 6,
              title: "Full Stack Project",
              topics: ["Todo/Blog application", "CRUD operations", "User management", "Deployment"],
            },
            {
              day: 7,
              title: "Advanced Features",
              topics: ["File upload", "Real-time features", "Performance optimization", "Testing"],
            },
            {
              day: 8,
              title: "Production Deployment",
              topics: ["Heroku/Vercel deployment", "Environment variables", "Database hosting", "Domain setup"],
            },
            {
              day: 9,
              title: "Advanced React",
              topics: ["Next.js", "SSR", "SEO", "Performance"],
            },
            {
              day: 10,
              title: "Microservices",
              topics: ["Architecture", "Communication", "Deployment"],
            },
            {
              day: 11,
              title: "Testing",
              topics: ["Unit", "Integration", "E2E"],
            },
            {
              day: 12,
              title: "DevOps",
              topics: ["CI/CD", "Docker", "Kubernetes"],
            },
            {
              day: 13,
              title: "Security",
              topics: ["OWASP", "Authentication", "Authorization"],
            },
            {
              day: 14,
              title: "Performance Optimization",
              topics: ["Profiling", "Caching", "Load Balancing"],
            },
            {
              day: 15,
              title: "Real-time Applications",
              topics: ["WebSockets", "Server-Sent Events"],
            },
            {
              day: 16,
              title: "GraphQL",
              topics: ["Schema", "Queries", "Mutations"],
            },
            {
              day: 17,
              title: "Serverless",
              topics: ["Functions", "Databases"],
            },
            {
              day: 18,
              title: "Progressive Web Apps",
              topics: ["Service Workers", "Manifest"],
            },
            {
              day: 19,
              title: "Project 1: E-commerce",
              topics: ["Design", "Development", "Deployment"],
            },
            {
              day: 20,
              title: "Project 2: Social Media",
              topics: ["Design", "Development", "Deployment"],
            },
            {
              day: 21,
              title: "Project 3: Blog",
              topics: ["Design", "Development", "Deployment"],
            },
            {
              day: 22,
              title: "Portfolio Building",
              topics: ["Showcasing Projects", "Resume Building"],
            },
            {
              day: 23,
              title: "Interview Preparation",
              topics: ["Technical Questions", "Behavioral Questions"],
            },
            {
              day: 24,
              title: "Job Search Strategies",
              topics: ["Networking", "Online Platforms"],
            },
            {
              day: 25,
              title: "Advanced DevOps",
              topics: ["Terraform", "Ansible"],
            },
            {
              day: 26,
              title: "Advanced Security",
              topics: ["Penetration Testing", "Vulnerability Scanning"],
            },
            {
              day: 27,
              title: "Advanced Performance",
              topics: ["Load Testing", "Stress Testing"],
            },
            {
              day: 28,
              title: "Final Project Review",
              topics: ["Feedback", "Improvements"],
            },
          ],
        },
      },
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description: "Python, TensorFlow, Deep Learning",
      icon: Zap,
      color: "from-green-500 to-teal-500",
      hot: true,
      packages: {
        mini: {
          price: "3.990.000",
          originalPrice: "4.500.000",
          duration: "8 buổi",
          sessions: "8 buổi x 3h",
          benefits: [
            "8 buổi học thực chiến qua Zoom",
            "Xây dựng 1 ML model hoàn chỉnh",
            "Python, Pandas, Scikit-learn",
            "Mentor 1:1 hỗ trợ bài tập lớn",
          ],
          curriculum: [
            {
              day: 1,
              title: "Python & Data Science Setup",
              topics: ["Python essentials", "NumPy/Pandas", "Data manipulation", "Jupyter notebook"],
            },
            {
              day: 2,
              title: "Machine Learning Basics",
              topics: ["ML concepts", "Scikit-learn", "Linear regression", "Model evaluation"],
            },
            {
              day: 3,
              title: "Classification & Clustering",
              topics: ["Logistic regression", "Decision trees", "K-means clustering", "Model comparison"],
            },
            {
              day: 4,
              title: "Deep Learning Introduction",
              topics: ["Neural networks", "TensorFlow/Keras", "Model training", "Overfitting prevention"],
            },
            {
              day: 5,
              title: "Computer Vision Project",
              topics: ["Image classification", "CNN basics", "Transfer learning", "Real-world dataset"],
            },
            {
              day: 6,
              title: "NLP & Text Analysis",
              topics: ["Text preprocessing", "Sentiment analysis", "Word embeddings", "Text classification"],
            },
            {
              day: 7,
              title: "Model Deployment",
              topics: ["Flask API", "Model serving", "Cloud deployment", "API testing"],
            },
            {
              day: 8,
              title: "Final ML Project",
              topics: ["End-to-end project", "Data pipeline", "Model optimization", "Production deployment"],
            },
          ],
        },
        advance: {
          price: "7.490.000",
          originalPrice: "8.500.000",
          duration: "20 buổi",
          sessions: "20 buổi x 3h",
          benefits: [
            "20 buổi học chuyên sâu qua Zoom",
            "Deep Learning, Computer Vision, NLP",
            "Mentor 1:1 hỗ trợ đồ án tốt nghiệp",
            "Cam kết thực tập tại công ty công nghệ",
          ],
          curriculum: [
            {
              day: 1,
              title: "Python & Data Science Setup",
              topics: ["Python essentials", "NumPy/Pandas", "Data manipulation", "Jupyter notebook"],
            },
            {
              day: 2,
              title: "Machine Learning Basics",
              topics: ["ML concepts", "Scikit-learn", "Linear regression", "Model evaluation"],
            },
            {
              day: 3,
              title: "Classification & Clustering",
              topics: ["Logistic regression", "Decision trees", "K-means clustering", "Model comparison"],
            },
            {
              day: 4,
              title: "Deep Learning Introduction",
              topics: ["Neural networks", "TensorFlow/Keras", "Model training", "Overfitting prevention"],
            },
            {
              day: 5,
              title: "Computer Vision Project",
              topics: ["Image classification", "CNN basics", "Transfer learning", "Real-world dataset"],
            },
            {
              day: 6,
              title: "NLP & Text Analysis",
              topics: ["Text preprocessing", "Sentiment analysis", "Word embeddings", "Text classification"],
            },
            {
              day: 7,
              title: "Model Deployment",
              topics: ["Flask API", "Model serving", "Cloud deployment", "API testing"],
            },
            {
              day: 8,
              title: "Final ML Project",
              topics: ["End-to-end project", "Data pipeline", "Model optimization", "Production deployment"],
            },
            {
              day: 9,
              title: "Advanced Deep Learning",
              topics: ["CNNs", "RNNs", "LSTMs", "Transformers"],
            },
            {
              day: 10,
              title: "Generative Models",
              topics: ["GANs", "VAEs"],
            },
            {
              day: 11,
              title: "Reinforcement Learning",
              topics: ["Q-Learning", "SARSA", "Policy Gradients"],
            },
            {
              day: 12,
              title: "Advanced NLP",
              topics: ["BERT", "GPT", "Transformer Models"],
            },
            {
              day: 13,
              title: "Time Series Analysis",
              topics: ["ARIMA", "LSTM"],
            },
            {
              day: 14,
              title: "Anomaly Detection",
              topics: ["Clustering", "Autoencoders"],
            },
            {
              day: 15,
              title: "Recommender Systems",
              topics: ["Collaborative Filtering", "Content-Based Filtering"],
            },
            {
              day: 16,
              title: "Explainable AI",
              topics: ["SHAP", "LIME"],
            },
            {
              day: 17,
              title: "Federated Learning",
              topics: ["Privacy", "Security"],
            },
            {
              day: 18,
              title: "MLOps",
              topics: ["CI/CD", "Model Monitoring"],
            },
            {
              day: 19,
              title: "Edge Computing",
              topics: ["Deployment", "Optimization"],
            },
            {
              day: 20,
              title: "Final Project",
              topics: ["End-to-End Project"],
            },
          ],
        },
        combo: {
          price: "9.990.000",
          originalPrice: "13.000.000",
          duration: "30 buổi",
          sessions: "30 buổi x 3h",
          benefits: [
            "Toàn bộ quyền lợi Mini + Advance",
            "MLOps & Model Deployment",
            "Research paper guidance",
            "Xác thực thực tập có dấu đỏ",
            "Tiết kiệm 3.010.000đ",
          ],
          curriculum: [
            {
              day: 1,
              title: "Python & Data Science Setup",
              topics: ["Python essentials", "NumPy/Pandas", "Data manipulation", "Jupyter notebook"],
            },
            {
              day: 2,
              title: "Machine Learning Basics",
              topics: ["ML concepts", "Scikit-learn", "Linear regression", "Model evaluation"],
            },
            {
              day: 3,
              title: "Classification & Clustering",
              topics: ["Logistic regression", "Decision trees", "K-means clustering", "Model comparison"],
            },
            {
              day: 4,
              title: "Deep Learning Introduction",
              topics: ["Neural networks", "TensorFlow/Keras", "Model training", "Overfitting prevention"],
            },
            {
              day: 5,
              title: "Computer Vision Project",
              topics: ["Image classification", "CNN basics", "Transfer learning", "Real-world dataset"],
            },
            {
              day: 6,
              title: "NLP & Text Analysis",
              topics: ["Text preprocessing", "Sentiment analysis", "Word embeddings", "Text classification"],
            },
            {
              day: 7,
              title: "Model Deployment",
              topics: ["Flask API", "Model serving", "Cloud deployment", "API testing"],
            },
            {
              day: 8,
              title: "Final ML Project",
              topics: ["End-to-end project", "Data pipeline", "Model optimization", "Production deployment"],
            },
            {
              day: 9,
              title: "Advanced Deep Learning",
              topics: ["CNNs", "RNNs", "LSTMs", "Transformers"],
            },
            {
              day: 10,
              title: "Generative Models",
              topics: ["GANs", "VAEs"],
            },
            {
              day: 11,
              title: "Reinforcement Learning",
              topics: ["Q-Learning", "SARSA", "Policy Gradients"],
            },
            {
              day: 12,
              title: "Advanced NLP",
              topics: ["BERT", "GPT", "Transformer Models"],
            },
            {
              day: 13,
              title: "Time Series Analysis",
              topics: ["ARIMA", "LSTM"],
            },
            {
              day: 14,
              title: "Anomaly Detection",
              topics: ["Clustering", "Autoencoders"],
            },
            {
              day: 15,
              title: "Recommender Systems",
              topics: ["Collaborative Filtering", "Content-Based Filtering"],
            },
            {
              day: 16,
              title: "Explainable AI",
              topics: ["SHAP", "LIME"],
            },
            {
              day: 17,
              title: "Federated Learning",
              topics: ["Privacy", "Security"],
            },
            {
              day: 18,
              title: "MLOps",
              topics: ["CI/CD", "Model Monitoring"],
            },
            {
              day: 19,
              title: "Edge Computing",
              topics: ["Deployment", "Optimization"],
            },
            {
              day: 20,
              title: "Research Paper Guidance",
              topics: ["Topic Selection", "Methodology"],
            },
            {
              day: 21,
              title: "Advanced MLOps",
              topics: ["Kubeflow", "MLflow"],
            },
            {
              day: 22,
              title: "Cloud Deployment",
              topics: ["AWS", "Azure", "GCP"],
            },
            {
              day: 23,
              title: "Model Optimization",
              topics: ["Quantization", "Pruning"],
            },
            {
              day: 24,
              title: "Data Engineering",
              topics: ["Spark", "Hadoop"],
            },
            {
              day: 25,
              title: "Big Data",
              topics: ["Data Lakes", "Data Warehouses"],
            },
            {
              day: 26,
              title: "Ethics in AI",
              topics: ["Bias", "Fairness"],
            },
            {
              day: 27,
              title: "AI for Social Good",
              topics: ["Healthcare", "Education"],
            },
            {
              day: 28,
              title: "AI for Business",
              topics: ["Marketing", "Sales"],
            },
            {
              day: 29,
              title: "AI for Finance",
              topics: ["Trading", "Risk Management"],
            },
            {
              day: 30,
              title: "Final Project",
              topics: ["End-to-End Project"],
            },
          ],
        },
      },
    },
    {
      id: "blockchain",
      title: "Blockchain Developer",
      description: "Solidity, Web3, Smart Contracts",
      icon: Globe,
      color: "from-yellow-500 to-orange-500",
      hot: true,
      packages: {
        mini: {
          price: "4.490.000",
          originalPrice: "5.000.000",
          duration: "6 buổi",
          sessions: "6 buổi x 3h",
          benefits: [
            "6 buổi học thực chiến qua Zoom",
            "Xây dựng 1 DApp hoàn chỉnh",
            "Solidity, Ethereum, Web3.js",
            "Mentor 1:1 hỗ trợ bài tập lớn",
          ],
          curriculum: [
            {
              day: 1,
              title: "Blockchain & Ethereum Basics",
              topics: ["Blockchain fundamentals", "Ethereum network", "MetaMask setup", "Gas & transactions"],
            },
            {
              day: 2,
              title: "Solidity Programming",
              topics: ["Solidity syntax", "Smart contract structure", "Data types", "Functions & modifiers"],
            },
            {
              day: 3,
              title: "Smart Contract Development",
              topics: ["Contract deployment", "Remix IDE", "Testing contracts", "Security basics"],
            },
            {
              day: 4,
              title: "Token Development",
              topics: ["ERC-20 tokens", "Token creation", "Token functions", "Deployment to testnet"],
            },
            {
              day: 5,
              title: "Web3 Frontend Integration",
              topics: ["Web3.js basics", "Frontend connection", "Transaction handling", "User interface"],
            },
            {
              day: 6,
              title: "DApp Project",
              topics: [
                "Complete DApp build",
                "Smart contract + Frontend",
                "Testing & debugging",
                "Production deployment",
              ],
            },
          ],
        },
        advance: {
          price: "7.990.000",
          originalPrice: "9.000.000",
          duration: "15 buổi",
          sessions: "15 buổi x 3h",
          benefits: [
            "15 buổi học chuyên sâu qua Zoom",
            "Advanced Smart Contracts, DeFi",
            "Mentor 1:1 hỗ trợ đồ án tốt nghiệp",
            "Cam kết thực tập tại công ty công nghệ",
          ],
          curriculum: [
            {
              day: 1,
              title: "Blockchain & Ethereum Basics",
              topics: ["Blockchain fundamentals", "Ethereum network", "MetaMask setup", "Gas & transactions"],
            },
            {
              day: 2,
              title: "Solidity Programming",
              topics: ["Solidity syntax", "Smart contract structure", "Data types", "Functions & modifiers"],
            },
            {
              day: 3,
              title: "Smart Contract Development",
              topics: ["Contract deployment", "Remix IDE", "Testing contracts", "Security basics"],
            },
            {
              day: 4,
              title: "Token Development",
              topics: ["ERC-20 tokens", "Token creation", "Token functions", "Deployment to testnet"],
            },
            {
              day: 5,
              title: "Web3 Frontend Integration",
              topics: ["Web3.js basics", "Frontend connection", "Transaction handling", "User interface"],
            },
            {
              day: 6,
              title: "DApp Project",
              topics: [
                "Complete DApp build",
                "Smart contract + Frontend",
                "Testing & debugging",
                "Production deployment",
              ],
            },
            {
              day: 7,
              title: "Advanced Solidity",
              topics: ["Design Patterns", "Gas Optimization"],
            },
            {
              day: 8,
              title: "DeFi Protocols",
              topics: ["Lending", "Borrowing"],
            },
            {
              day: 9,
              title: "Security Audits",
              topics: ["Vulnerabilities", "Best Practices"],
            },
            {
              day: 10,
              title: "Layer 2 Scaling",
              topics: ["Rollups", "Sidechains"],
            },
            {
              day: 11,
              title: "Cross-Chain Interoperability",
              topics: ["Bridges", "Atomic Swaps"],
            },
            {
              day: 12,
              title: "DAO Governance",
              topics: ["Voting", "Proposals"],
            },
            {
              day: 13,
              title: "NFTs",
              topics: ["ERC-721", "ERC-1155"],
            },
            {
              day: 14,
              title: "IPFS",
              topics: ["Decentralized Storage"],
            },
            {
              day: 15,
              title: "Final Project",
              topics: ["Advanced DApp"],
            },
          ],
        },
        combo: {
          price: "10.490.000",
          originalPrice: "14.000.000",
          duration: "25 buổi",
          sessions: "25 buổi x 3h",
          benefits: [
            "Toàn bộ quyền lợi Mini + Advance",
            "NFT Marketplace development",
            "Tokenomics & ICO guidance",
            "Xác thực thực tập có dấu đỏ",
            "Tiết kiệm 3.510.000đ",
          ],
          curriculum: [
            {
              day: 1,
              title: "Blockchain & Ethereum Basics",
              topics: ["Blockchain fundamentals", "Ethereum network", "MetaMask setup", "Gas & transactions"],
            },
            {
              day: 2,
              title: "Solidity Programming",
              topics: ["Solidity syntax", "Smart contract structure", "Data types", "Functions & modifiers"],
            },
            {
              day: 3,
              title: "Smart Contract Development",
              topics: ["Contract deployment", "Remix IDE", "Testing contracts", "Security basics"],
            },
            {
              day: 4,
              title: "Token Development",
              topics: ["ERC-20 tokens", "Token creation", "Token functions", "Deployment to testnet"],
            },
            {
              day: 5,
              title: "Web3 Frontend Integration",
              topics: ["Web3.js basics", "Frontend connection", "Transaction handling", "User interface"],
            },
            {
              day: 6,
              title: "DApp Project",
              topics: [
                "Complete DApp build",
                "Smart contract + Frontend",
                "Testing & debugging",
                "Production deployment",
              ],
            },
            {
              day: 7,
              title: "Advanced Solidity",
              topics: ["Design Patterns", "Gas Optimization"],
            },
            {
              day: 8,
              title: "DeFi Protocols",
              topics: ["Lending", "Borrowing"],
            },
            {
              day: 9,
              title: "Security Audits",
              topics: ["Vulnerabilities", "Best Practices"],
            },
            {
              day: 10,
              title: "Layer 2 Scaling",
              topics: ["Rollups", "Sidechains"],
            },
            {
              day: 11,
              title: "Cross-Chain Interoperability",
              topics: ["Bridges", "Atomic Swaps"],
            },
            {
              day: 12,
              title: "DAO Governance",
              topics: ["Voting", "Proposals"],
            },
            {
              day: 13,
              title: "NFTs",
              topics: ["ERC-721", "ERC-1155"],
            },
            {
              day: 14,
              title: "IPFS",
              topics: ["Decentralized Storage"],
            },
            {
              day: 15,
              title: "Final Project",
              topics: ["Advanced DApp"],
            },
            {
              day: 16,
              title: "NFT Marketplace",
              topics: ["Smart Contracts", "Frontend"],
            },
            {
              day: 17,
              title: "Tokenomics",
              topics: ["Supply", "Distribution"],
            },
            {
              day: 18,
              title: "ICO",
              topics: ["Launch", "Marketing"],
            },
            {
              day: 19,
              title: "Security",
              topics: ["Audits", "Best Practices"],
            },
            {
              day: 20,
              title: "Legal",
              topics: ["Compliance", "Regulations"],
            },
            {
              day: 21,
              title: "Community",
              topics: ["Building", "Engagement"],
            },
            {
              day: 22,
              title: "Marketing",
              topics: ["Social Media", "Content"],
            },
            {
              day: 23,
              title: "Growth",
              topics: ["Strategies", "Metrics"],
            },
            {
              day: 24,
              title: "Scaling",
              topics: ["Solutions", "Optimization"],
            },
            {
              day: 25,
              title: "Final Project",
              topics: ["NFT Marketplace"],
            },
          ],
        },
      },
    },
    {
      id: "frontend",
      title: "Frontend Developer",
      description: "React, Vue, Angular, HTML/CSS",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
      packages: {
        mini: {
          price: "2.490.000",
          originalPrice: "2.900.000",
          duration: "8 buổi",
          sessions: "8 buổi x 3h",
          benefits: [
            "8 buổi học thực chiến qua Zoom",
            "Xây dựng 1 portfolio website",
            "React, HTML/CSS, JavaScript",
            "Mentor 1:1 hỗ trợ bài tập lớn",
          ],
          curriculum: [
            {
              day: 1,
              title: "HTML/CSS Mastery",
              topics: ["Semantic HTML", "CSS Grid/Flexbox", "Responsive design", "CSS animations"],
            },
            {
              day: 2,
              title: "JavaScript Essentials",
              topics: ["ES6+ features", "DOM manipulation", "Event handling", "Async programming"],
            },
            {
              day: 3,
              title: "React Fundamentals",
              topics: ["Components & JSX", "State & Props", "Hooks", "Event handling"],
            },
            {
              day: 4,
              title: "React Advanced",
              topics: ["State management", "Context API", "Custom hooks", "Performance optimization"],
            },
            {
              day: 5,
              title: "API Integration",
              topics: ["Fetch API", "Axios", "Error handling", "Loading states"],
            },
            {
              day: 6,
              title: "Routing & Navigation",
              topics: ["React Router", "Dynamic routing", "Protected routes", "Navigation patterns"],
            },
            {
              day: 7,
              title: "UI/UX Implementation",
              topics: ["CSS frameworks", "Component libraries", "Responsive design", "Accessibility"],
            },
            {
              day: 8,
              title: "Portfolio Project",
              topics: ["Personal portfolio", "Project showcase", "Deployment", "Performance optimization"],
            },
          ],
        },
        advance: {
          price: "4.990.000",
          originalPrice: "5.800.000",
          duration: "16 buổi",
          sessions: "16 buổi x 3h",
          benefits: [
            "16 buổi học chuyên sâu qua Zoom",
            "Advanced React/Next.js",
            "Mentor 1:1 hỗ trợ đồ án tốt nghiệp",
            "Cam kết thực tập tại công ty công nghệ",
          ],
          curriculum: [
            {
              day: 1,
              title: "HTML/CSS Mastery",
              topics: ["Semantic HTML", "CSS Grid/Flexbox", "Responsive design", "CSS animations"],
            },
            {
              day: 2,
              title: "JavaScript Essentials",
              topics: ["ES6+ features", "DOM manipulation", "Event handling", "Async programming"],
            },
            {
              day: 3,
              title: "React Fundamentals",
              topics: ["Components & JSX", "State & Props", "Hooks", "Event handling"],
            },
            {
              day: 4,
              title: "React Advanced",
              topics: ["State management", "Context API", "Custom hooks", "Performance optimization"],
            },
            {
              day: 5,
              title: "API Integration",
              topics: ["Fetch API", "Axios", "Error handling", "Loading states"],
            },
            {
              day: 6,
              title: "Routing & Navigation",
              topics: ["React Router", "Dynamic routing", "Protected routes", "Navigation patterns"],
            },
            {
              day: 7,
              title: "UI/UX Implementation",
              topics: ["CSS frameworks", "Component libraries", "Responsive design", "Accessibility"],
            },
            {
              day: 8,
              title: "Portfolio Project",
              topics: ["Personal portfolio", "Project showcase", "Deployment", "Performance optimization"],
            },
            {
              day: 9,
              title: "Next.js",
              topics: ["SSR", "SEO"],
            },
            {
              day: 10,
              title: "GraphQL",
              topics: ["Queries", "Mutations"],
            },
            {
              day: 11,
              title: "Testing",
              topics: ["Unit", "Integration"],
            },
            {
              day: 12,
              title: "Deployment",
              topics: ["Vercel", "Netlify"],
            },
            {
              day: 13,
              title: "Performance",
              topics: ["Optimization", "Profiling"],
            },
            {
              day: 14,
              title: "Security",
              topics: ["Best Practices"],
            },
            {
              day: 15,
              title: "Accessibility",
              topics: ["ARIA", "WCAG"],
            },
            {
              day: 16,
              title: "Final Project",
              topics: ["Advanced Portfolio"],
            },
          ],
        },
        combo: {
          price: "6.490.000",
          originalPrice: "8.700.000",
          duration: "26 buổi",
          sessions: "26 buổi x 3h",
          benefits: [
            "Toàn bộ quyền lợi Mini + Advance",
            "Hỗ trợ tìm việc sau khóa học",
            "Portfolio cá nhân chuyên nghiệp",
            "Xác thực thực tập có dấu đỏ",
            "Tiết kiệm 2.210.000đ",
          ],
          curriculum: [
            {
              day: 1,
              title: "HTML/CSS Mastery",
              topics: ["Semantic HTML", "CSS Grid/Flexbox", "Responsive design", "CSS animations"],
            },
            {
              day: 2,
              title: "JavaScript Essentials",
              topics: ["ES6+ features", "DOM manipulation", "Event handling", "Async programming"],
            },
            {
              day: 3,
              title: "React Fundamentals",
              topics: ["Components & JSX", "State & Props", "Hooks", "Event handling"],
            },
            {
              day: 4,
              title: "React Advanced",
              topics: ["State management", "Context API", "Custom hooks", "Performance optimization"],
            },
            {
              day: 5,
              title: "API Integration",
              topics: ["Fetch API", "Axios", "Error handling", "Loading states"],
            },
            {
              day: 6,
              title: "Routing & Navigation",
              topics: ["React Router", "Dynamic routing", "Protected routes", "Navigation patterns"],
            },
            {
              day: 7,
              title: "UI/UX Implementation",
              topics: ["CSS frameworks", "Component libraries", "Responsive design", "Accessibility"],
            },
            {
              day: 8,
              title: "Portfolio Project",
              topics: ["Personal portfolio", "Project showcase", "Deployment", "Performance optimization"],
            },
            {
              day: 9,
              title: "Next.js",
              topics: ["SSR", "SEO"],
            },
            {
              day: 10,
              title: "GraphQL",
              topics: ["Queries", "Mutations"],
            },
            {
              day: 11,
              title: "Testing",
              topics: ["Unit", "Integration"],
            },
            {
              day: 12,
              title: "Deployment",
              topics: ["Vercel", "Netlify"],
            },
            {
              day: 13,
              title: "Performance",
              topics: ["Optimization", "Profiling"],
            },
            {
              day: 14,
              title: "Security",
              topics: ["Best Practices"],
            },
            {
              day: 15,
              title: "Accessibility",
              topics: ["ARIA", "WCAG"],
            },
            {
              day: 16,
              title: "Final Project",
              topics: ["Advanced Portfolio"],
            },
            {
              day: 17,
              title: "Job Search",
              topics: ["Strategies", "Networking"],
            },
            {
              day: 18,
              title: "Resume Building",
              topics: ["Tips", "Templates"],
            },
            {
              day: 19,
              title: "Interview Skills",
              topics: ["Technical", "Behavioral"],
            },
            {
              day: 20,
              title: "Freelancing",
              topics: ["Platforms", "Tips"],
            },
            {
              day: 21,
              title: "Open Source",
              topics: ["Contribution", "Projects"],
            },
            {
              day: 22,
              title: "Community",
              topics: ["Engagement", "Networking"],
            },
            {
              day: 23,
              title: "Personal Branding",
              topics: ["Online Presence"],
            },
            {
              day: 24,
              title: "Advanced CSS",
              topics: ["Animations", "Transitions"],
            },
            {
              day: 25,
              title: "Advanced JavaScript",
              topics: ["Design Patterns"],
            },
            {
              day: 26,
              title: "Final Portfolio Review",
              topics: ["Feedback", "Improvements"],
            },
          ],
        },
      },
    },
    {
      id: "devops",
      title: "DevOps Engineer",
      description: "Docker, K8s, AWS, CI/CD",
      icon: Settings,
      color: "from-orange-500 to-red-500",
      curriculum: [
        {
          day: 1,
          title: "Linux & Command Line",
          topics: ["Linux basics", "Shell scripting", "File management", "Process control"],
        },
        {
          day: 2,
          title: "Git & Version Control",
          topics: ["Git workflows", "Branching strategies", "Collaboration", "Best practices"],
        },
        {
          day: 3,
          title: "Docker Fundamentals",
          topics: ["Containerization", "Dockerfile", "Docker Compose", "Container management"],
        },
        {
          day: 4,
          title: "CI/CD Pipeline",
          topics: ["GitHub Actions", "Pipeline setup", "Automated testing", "Deployment automation"],
        },
        {
          day: 5,
          title: "Cloud Platforms",
          topics: ["AWS/Azure basics", "EC2/VMs", "Storage services", "Networking"],
        },
        {
          day: 6,
          title: "Kubernetes Basics",
          topics: ["K8s architecture", "Pods & Services", "Deployments", "Basic orchestration"],
        },
        {
          day: 7,
          title: "Monitoring & Logging",
          topics: ["Application monitoring", "Log management", "Alerting", "Performance tracking"],
        },
        {
          day: 8,
          title: "DevOps Project",
          topics: ["Complete CI/CD pipeline", "Containerized deployment", "Monitoring setup", "Production deployment"],
        },
      ],
      packages: {
        mini: {
          price: "3.290.000",
          originalPrice: "3.800.000",
          duration: "8 buổi",
          sessions: "8 buổi x 3h",
          benefits: [
            "8 buổi học thực chiến qua Zoom",
            "Setup 1 pipeline CI/CD hoàn chỉnh",
            "Docker, K8s, AWS basics",
            "Mentor 1:1 hỗ trợ bài tập lớn",
          ],
        },
        advance: {
          price: "5.990.000",
          originalPrice: "7.000.000",
          duration: "18 buổi",
          sessions: "18 buổi x 3h",
          benefits: [
            "18 buổi học chuyên sâu qua Zoom",
            "AWS/Azure certification prep",
            "Mentor 1:1 hỗ trợ đồ án tốt nghiệp",
            "Cam kết thực tập tại startup công nghệ",
          ],
        },
        combo: {
          price: "7.490.000",
          originalPrice: "10.800.000",
          duration: "28 buổi",
          sessions: "28 buổi x 3h",
          benefits: [
            "Toàn bộ quyền lợi Mini + Advance",
            "Cloud architecture workshop",
            "Security & Monitoring best practices",
            "Xác thực thực tập có dấu đỏ",
            "Tiết kiệm 3.310.000đ",
          ],
        },
      },
    },
    {
      id: "testing",
      title: "Software Tester",
      description: "Manual, Automation, Performance",
      icon: CheckCircle,
      color: "from-purple-500 to-violet-500",
      curriculum: [
        {
          day: 1,
          title: "Testing Fundamentals",
          topics: ["Testing principles", "Test types", "Bug lifecycle", "Testing process"],
        },
        {
          day: 2,
          title: "Manual Testing",
          topics: ["Test case design", "Functional testing", "UI testing", "Bug reporting"],
        },
        {
          day: 3,
          title: "API Testing",
          topics: ["REST API testing", "Postman", "API test cases", "Response validation"],
        },
        {
          day: 4,
          title: "Automation Introduction",
          topics: ["Selenium WebDriver", "Element locators", "Basic automation", "Test scripts"],
        },
        {
          day: 5,
          title: "Test Framework",
          topics: ["Page Object Model", "Data-driven testing", "Test execution", "Reporting"],
        },
        {
          day: 6,
          title: "Testing Project",
          topics: ["Complete test plan", "Automated test suite", "Manual + Automation", "Test report"],
        },
      ],
      packages: {
        mini: {
          price: "2.190.000",
          originalPrice: "2.600.000",
          duration: "6 buổi",
          sessions: "6 buổi x 3h",
          benefits: [
            "6 buổi học thực chiến qua Zoom",
            "Xây dựng 1 test plan hoàn chỉnh",
            "Manual + Automation testing",
            "Mentor 1:1 hỗ trợ bài tập lớn",
          ],
        },
        advance: {
          price: "4.490.000",
          originalPrice: "5.200.000",
          duration: "15 buổi",
          sessions: "15 buổi x 3h",
          benefits: [
            "15 buổi học chuyên sâu qua Zoom",
            "Selenium/Cypress automation",
            "Mentor 1:1 từ Test Lead",
            "Cơ hội thực tập tại công ty công nghệ",
          ],
        },
        combo: {
          price: "5.990.000",
          originalPrice: "7.800.000",
          duration: "25 buổi",
          sessions: "25 buổi x 3h",
          benefits: [
            "Toàn bộ quyền lợi Mini + Advance",
            "Performance testing với JMeter",
            "API testing chuyên sâu",
            "Xác thực thực tập có dấu đỏ",
            "Tiết kiệm 1.810.000đ",
          ],
        },
      },
    },
    {
      id: "business-analyst",
      title: "Business Analyst",
      description: "Requirements, Process Analysis, Agile",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      curriculum: [
        {
          day: 1,
          title: "BA Role & Fundamentals",
          topics: ["BA responsibilities", "Business analysis process", "Stakeholder management", "Communication"],
        },
        {
          day: 2,
          title: "Requirements Gathering",
          topics: ["Elicitation techniques", "Interviews", "Workshops", "Requirements documentation"],
        },
        {
          day: 3,
          title: "Requirements Analysis",
          topics: ["Functional requirements", "Non-functional requirements", "Prioritization", "Gap analysis"],
        },
        {
          day: 4,
          title: "Documentation & Modeling",
          topics: ["BRD/FRD writing", "Use cases", "User stories", "Process flows"],
        },
        {
          day: 5,
          title: "Agile & Scrum for BA",
          topics: ["Agile principles", "Scrum framework", "User story writing", "Sprint planning"],
        },
        {
          day: 6,
          title: "BA Tools & Techniques",
          topics: ["JIRA", "Confluence", "Wireframing", "Process mapping"],
        },
        {
          day: 7,
          title: "BA Project",
          topics: ["Complete requirements document", "Process analysis", "Stakeholder presentation", "BA portfolio"],
        },
      ],
      packages: {
        mini: {
          price: "2.690.000",
          originalPrice: "3.100.000",
          duration: "7 buổi",
          sessions: "7 buổi x 3h",
          benefits: [
            "7 buổi học thực chiến qua Zoom",
            "Xây dựng 1 BRD project hoàn chỉnh",
            "BA fundamentals + Tools",
            "Mentor 1:1 hỗ trợ bài tập lớn",
          ],
        },
        advance: {
          price: "4.990.000",
          originalPrice: "5.800.000",
          duration: "16 buổi",
          sessions: "16 buổi x 3h",
          benefits: [
            "16 buổi học chuyên sâu qua Zoom",
            "Advanced BA techniques & tools",
            "Mentor 1:1 hỗ trợ đồ án tốt nghiệp",
            "Cơ hội thực tập tại công ty công nghệ",
          ],
        },
        combo: {
          price: "6.490.000",
          originalPrice: "8.900.000",
          duration: "27 buổi",
          sessions: "27 buổi x 3h",
          benefits: [
            "Toàn bộ quyền lợi Mini + Advance",
            "Agile certification prep",
            "BA portfolio development",
            "Xác thực thực tập có dấu đỏ",
            "Tiết kiệm 2.410.000đ",
          ],
        },
      },
    },
    {
      id: "project-manager",
      title: "Project Manager",
      description: "Agile, Scrum, Leadership, Team Management",
      icon: Globe,
      color: "from-indigo-500 to-purple-500",
      curriculum: [
        {
          day: 1,
          title: "PM Fundamentals",
          topics: ["Project management basics", "PM methodologies", "Project lifecycle", "PM responsibilities"],
        },
        {
          day: 2,
          title: "Project Planning",
          topics: ["Scope definition", "WBS creation", "Timeline planning", "Resource allocation"],
        },
        {
          day: 3,
          title: "Agile & Scrum",
          topics: ["Agile principles", "Scrum framework", "Sprint planning", "Daily standups"],
        },
        {
          day: 4,
          title: "Risk & Quality Management",
          topics: ["Risk identification", "Risk mitigation", "Quality planning", "Quality control"],
        },
        {
          day: 5,
          title: "Team Leadership",
          topics: ["Leadership styles", "Team building", "Motivation", "Conflict resolution"],
        },
        {
          day: 6,
          title: "Communication & Stakeholders",
          topics: ["Stakeholder management", "Status reporting", "Meeting management", "Presentation skills"],
        },
        {
          day: 7,
          title: "PM Tools & Software",
          topics: ["MS Project", "JIRA", "Trello", "Gantt charts"],
        },
        {
          day: 8,
          title: "PM Project",
          topics: ["Complete project plan", "Risk assessment", "Team presentation", "PM portfolio"],
        },
      ],
      packages: {
        mini: {
          price: "2.990.000",
          originalPrice: "3.500.000",
          duration: "8 buổi",
          sessions: "8 buổi x 3h",
          benefits: [
            "8 buổi học thực chiến qua Zoom",
            "Xây dựng 1 project plan hoàn chỉnh",
            "PM fundamentals + Tools",
            "Mentor 1:1 hỗ trợ bài tập lớn",
          ],
        },
        advance: {
          price: "5.490.000",
          originalPrice: "6.400.000",
          duration: "18 buổi",
          sessions: "18 buổi x 3h",
          benefits: [
            "18 buổi học chuyên sâu qua Zoom",
            "Advanced PM techniques & leadership",
            "Mentor 1:1 hỗ trợ đồ án tốt nghiệp",
            "Cơ hội thực tập tại công ty công nghệ",
          ],
        },
        combo: {
          price: "7.190.000",
          originalPrice: "9.900.000",
          duration: "28 buổi",
          sessions: "28 buổi x 3h",
          benefits: [
            "Toàn bộ quyền lợi Mini + Advance",
            "PMP certification prep",
            "Leadership workshop",
            "Xác thực thực tập có dấu đỏ",
            "Tiết kiệm 2.710.000đ",
          ],
        },
      },
    },
  ]

  const [selectedCourse, setSelectedCourse] = useState(courses[0])

  const openCurriculum = (course, packageType = "mini") => {
    setSelectedCourseForCurriculum(course)
    setSelectedPackage(packageType)
    setShowCurriculum(true)
  }

  const closeCurriculum = () => {
    setShowCurriculum(false)
    setSelectedCourseForCurriculum(null)
  }

  const openVideoDemo = () => {
    setShowVideoDemo(true)
  }

  const closeVideoDemo = () => {
    setShowVideoDemo(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
              <Code className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              9xCourse
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("courses")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Khóa học
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Bảng giá
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Ưu điểm
            </button>
            <button
              onClick={() => window.open("https://m.me/9xlab", "_blank")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Liên hệ
            </button>
          </nav>
          <Button
            onClick={() => window.open("https://m.me/9xlab", "_blank")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Đăng ký ngay
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">🚀 Khóa học IT chuyên nghiệp</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            9xCourse
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nền tảng đào tạo IT chuyên nghiệp với{" "}
            <span className="font-semibold text-blue-600">hỗ trợ bài tập lớn trên trường</span>,
            <span className="font-semibold text-purple-600"> thực tập có dấu</span>,
            <span className="font-semibold text-green-600"> tài liệu song ngữ Việt-Anh</span> và
            <span className="font-semibold text-red-600"> cam kết việc làm 100%</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("courses")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Khám phá khóa học
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.open("https://m.me/9xlab", "_blank")}>
              Tư vấn miễn phí
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Khóa học chuyên nghiệp</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Đào tạo toàn diện các vị trí trong ngành công nghệ thông tin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md relative">
                {course.featured && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <Badge className="bg-red-600 text-white">⭐ Nổi bật</Badge>
                  </div>
                )}
                {course.hot && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <Badge className="bg-orange-600 text-white">🔥 Hot</Badge>
                  </div>
                )}
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${course.color} flex items-center justify-center mb-4`}
                  >
                    <course.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => {
                      setSelectedCourse(course)
                      scrollToSection("pricing")
                    }}
                  >
                    Xem chi tiết
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Course Pricing */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Khóa học: {selectedCourse.title}</h2>
            <p className="text-xl text-gray-600">3 gói học linh hoạt phù hợp với mọi nhu cầu</p>

            {/* Course selector */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {courses.map((course) => (
                <Button
                  key={course.id}
                  variant={selectedCourse.id === course.id ? "default" : "outline"}
                  onClick={() => setSelectedCourse(course)}
                  className="mb-2"
                >
                  {course.title}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mini Package */}
            <Card className="relative hover:shadow-xl transition-shadow">
              <CardHeader>
                <Badge className="w-fit bg-green-100 text-green-800">Thực chiến</Badge>
                <CardTitle className="text-2xl">Mini</CardTitle>
                <CardDescription>{selectedCourse.packages.mini.sessions}</CardDescription>
                <div className="text-3xl font-bold text-blue-600">
                  {selectedCourse.packages.mini.price}đ
                  <span className="text-lg text-gray-500 line-through ml-2">
                    {selectedCourse.packages.mini.originalPrice}đ
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedCourse.packages.mini.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className={index === 3 ? "font-semibold text-blue-600" : ""}>{benefit}</span>
                  </div>
                ))}
                <div className="flex gap-2 mt-6">
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => openCurriculum(selectedCourse, "mini")}
                  >
                    Xem chi tiết
                  </Button>
                  <Button
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => window.open("https://m.me/9xlab", "_blank")}
                  >
                    Đăng ký ngay
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Advance Package */}
            <Card className="relative hover:shadow-xl transition-shadow border-2 border-blue-500">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white">Được đề xuất</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Advance</CardTitle>
                <CardDescription>{selectedCourse.packages.advance.sessions}</CardDescription>
                <div className="text-3xl font-bold text-blue-600">
                  {selectedCourse.packages.advance.price}đ
                  <span className="text-lg text-gray-500 line-through ml-2">
                    {selectedCourse.packages.advance.originalPrice}đ
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedCourse.packages.advance.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className={index === 2 || index === 3 ? "font-semibold text-blue-600" : ""}>{benefit}</span>
                  </div>
                ))}
                <div className="flex gap-2 mt-6">
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => openCurriculum(selectedCourse, "advance")}
                  >
                    Xem chi tiết
                  </Button>
                  <Button
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open("https://m.me/9xlab", "_blank")}
                  >
                    Đăng ký ngay
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Combo Package */}
            <Card className="relative hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <Badge className="w-fit bg-purple-100 text-purple-800">Tiết kiệm nhất</Badge>
                <CardTitle className="text-2xl">Combo</CardTitle>
                <CardDescription>{selectedCourse.packages.combo.sessions}</CardDescription>
                <div className="text-3xl font-bold text-purple-600">
                  {selectedCourse.packages.combo.price}đ
                  <span className="text-lg text-gray-500 line-through ml-2">
                    {selectedCourse.packages.combo.originalPrice}đ
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedCourse.packages.combo.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className={index === 4 ? "font-semibold text-purple-600" : ""}>{benefit}</span>
                  </div>
                ))}
                <div className="flex gap-2 mt-6">
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => openCurriculum(selectedCourse, "combo")}
                  >
                    Xem chi tiết
                  </Button>
                  <Button
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                    onClick={() => window.open("https://m.me/9xlab", "_blank")}
                  >
                    Đăng ký ngay
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Điểm khác biệt của 9xCourse</h2>
            <p className="text-xl text-gray-600">Tại sao chọn chúng tôi?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Tài liệu song ngữ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tài liệu song ngữ Việt-Anh giúp không chỉ phát triển chuyên môn mà còn nâng cao khả năng tiếng Anh
                  chuyên ngành
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Mentor 1:1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mentor 1:1 trong các buổi hỗ trợ riêng, đảm bảo mỗi học viên được quan tâm và hướng dẫn tận tình
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Giới thiệu việc làm có thưởng</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Giới thiệu học viên được nhận việc làm và nhận tiền thưởng, tạo động lực và hỗ trợ tối đa cho sự
                  nghiệp
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Referral Program Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">💰 Kiếm tiền cùng 9xCourse</Badge>
            <h2 className="text-4xl font-bold mb-4">Chương trình giới thiệu học viên</h2>
            <p className="text-xl text-gray-600">Giới thiệu bạn bè học tập và nhận thưởng hấp dẫn</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Học viên đầu tiên
                </div>
              </div>
              <CardHeader className="text-center pt-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">300.000đ</div>
                <CardTitle className="text-xl">Người được giới thiệu đầu tiên</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Nhận ngay 300.000đ khi người bạn giới thiệu đăng ký và hoàn thành thanh toán khóa học bất kỳ
                </p>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Học viên thứ 2
                </div>
              </div>
              <CardHeader className="text-center pt-8">
                <div className="text-4xl font-bold text-purple-600 mb-2">500.000đ</div>
                <CardTitle className="text-xl">Người được giới thiệu thứ 2</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Tăng lên 500.000đ cho mỗi người được giới thiệu thứ 2 trở đi. Thưởng cao hơn cho sự nỗ lực!
                </p>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Từ học viên thứ 3
                </div>
              </div>
              <CardHeader className="text-center pt-8">
                <div className="text-4xl font-bold text-green-600 mb-2">1.000.000đ</div>
                <CardTitle className="text-xl">Từ người thứ 3 trở đi</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Nhận 1.000.000đ cho mỗi người từ thứ 3 trở đi. Không giới hạn số lượng, thu nhập không giới hạn!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">🎯 Cách thức hoạt động</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <span>Chia sẻ link giới thiệu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <span>Bạn bè đăng ký & thanh toán</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <span>Nhận thưởng trong 7 ngày</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Discount Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white text-orange-600">🔥 Ưu đãi đặc biệt</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Học nhóm - Tiết kiệm lớn!</h2>
            <p className="text-xl opacity-90">Đăng ký cùng bạn bè và nhận ưu đãi khủng</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white text-gray-800 hover:shadow-2xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-orange-100 text-orange-800">Nhóm 3-5 người</Badge>
                  <div className="text-2xl font-bold text-orange-600">-10%</div>
                </div>
                <CardTitle className="text-2xl">Ưu đãi nhóm nhỏ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Giảm 10% học phí cho mỗi thành viên</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Lịch học linh hoạt theo nhóm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Mentor riêng cho nhóm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Group project thực tế</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-400 to-orange-400 text-gray-800 hover:shadow-2xl transition-shadow border-4 border-yellow-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-red-600 text-white px-4 py-1">🏆 BEST DEAL</Badge>
              </div>
              <CardHeader className="pt-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-red-100 text-red-800">Nhóm 6+ người</Badge>
                  <div className="text-3xl font-bold text-red-600">-20%</div>
                </div>
                <CardTitle className="text-2xl">Ưu đãi nhóm lớn</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">Giảm 20% học phí cho mỗi thành viên</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Tất cả quyền lợi nhóm 3-5 người</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">Bonus: Workshop riêng cho nhóm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">Tặng kèm khóa Soft Skills</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-lg max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">📋 Điều kiện áp dụng</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>• Tối thiểu 3 người cùng đăng ký 1 khóa học</div>
                <div>• Thanh toán cùng lúc trong vòng 48h</div>
                <div>• Áp dụng cho tất cả các khóa học</div>
                <div>• Có thể kết hợp với ưu đãi sớm</div>
              </div>
            </div>
            <Button
              size="lg"
              className="mt-8 bg-white text-orange-600 hover:bg-gray-100 font-semibold"
              onClick={() => window.open("https://m.me/9xlab", "_blank")}
            >
              Đăng ký nhóm ngay
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Sẵn sàng bắt đầu hành trình IT?</h2>
          <p className="text-xl mb-8 opacity-90">Tham gia cùng hàng nghìn học viên đã thành công với 9xCourse</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => window.open("https://m.me/9xlab", "_blank")}
            >
              Đăng ký tư vấn miễn phí
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent flex items-center gap-2"
              onClick={openVideoDemo}
            >
              <Play className="h-5 w-5" />
              Xem demo khóa học
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Liên hệ với chúng tôi</h2>
            <p className="text-xl text-gray-600">Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Hotline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Gọi ngay để được tư vấn</p>
                <a href="tel:0964210295" className="text-blue-600 font-semibold hover:underline">
                  0964 210 295
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Zalo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Chat trực tiếp qua Zalo</p>
                <a href="https://zalo.me/0964210295" className="text-green-600 font-semibold hover:underline">
                  Chat ngay
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Facebook className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Facebook</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Theo dõi fanpage</p>
                <a href="https://facebook.com/9xlab" className="text-blue-800 font-semibold hover:underline">
                  Nhắn tin
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
                  <Code className="h-6 w-6" />
                </div>
                <span className="text-2xl font-bold">9xCourse</span>
              </div>
              <p className="text-gray-400">
                Nền tảng đào tạo IT chuyên nghiệp hàng đầu Việt Nam với phương pháp học thực chiến
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Khóa học nổi bật</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Backend Java Developer</li>
                <li>Full Stack Developer</li>
                <li>AI & Machine Learning</li>
                <li>Blockchain Developer</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Liên hệ</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📧 info@9xcourse.com</li>
                <li>📱 0964 210 295</li>
                <li>💬 Facebook Messenger</li>
                <li>📍 174 Phương Canh, Hà Nội</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 9xCourse. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="tel:0964210295"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
          title="Gọi điện"
        >
          <Phone className="h-6 w-6 text-white" />
        </a>

        <a
          href="https://zalo.me/0964210295"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
          title="Chat Zalo"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </a>

        <a
          href="https://facebook.com/9xlab"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-blue-800 hover:bg-blue-900 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
          title="Facebook"
        >
          <Facebook className="h-6 w-6 text-white" />
        </a>
      </div>

      {/* Video Demo Modal */}
      {showVideoDemo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-semibold">Demo khóa học 9xCourse</h3>
              <Button variant="ghost" size="sm" onClick={closeVideoDemo}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="relative aspect-video bg-gray-100 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Demo Video Coming Soon</h4>
                <p className="text-gray-600 mb-4">
                  Video demo sẽ được cập nhật sớm. Liên hệ với chúng tôi để được tư vấn trực tiếp!
                </p>
                <div className="text-sm text-gray-500">📹 Nội dung demo: Phương pháp học thực chiến tại 9xCourse</div>
              </div>
            </div>
            <div className="p-4 bg-gray-50">
              <p className="text-gray-600 text-sm mb-4">
                🎥 Video demo giới thiệu phương pháp học và môi trường học tập tại 9xCourse
              </p>
              <div className="flex gap-3">
                <Button
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => {
                    closeVideoDemo()
                    window.open("https://m.me/9xlab", "_blank")
                  }}
                >
                  Đăng ký ngay
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={() => {
                    closeVideoDemo()
                    scrollToSection("courses")
                  }}
                >
                  Xem khóa học
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Curriculum Modal */}
      {showCurriculum && selectedCourseForCurriculum && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{selectedCourseForCurriculum.title}</h2>
                <p className="text-gray-600">{selectedCourseForCurriculum.description}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={closeCurriculum}>
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Chương trình học chi tiết - Tập trung thực chiến
                </h3>
                <p className="text-gray-600 mb-4">
                  Khóa học được thiết kế tập trung vào thực chiến việc làm, mỗi buổi học 3 tiếng với project thực tế.
                </p>
              </div>

              <div className="grid gap-4">
                {selectedCourseForCurriculum.packages[selectedPackage].curriculum?.map((day, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {day.day}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{day.title}</CardTitle>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <Clock className="h-4 w-4 mr-1" />
                              Buổi {day.day} • 3 tiếng thực hành
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="grid md:grid-cols-2 gap-2">
                        {day.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <h4 className="font-semibold mb-3">🎯 Sau khóa học bạn sẽ có:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Kiến thức thực chiến sẵn sàng làm việc</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Dự án thực tế để bổ sung portfolio</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Chứng chỉ hoàn thành khóa học</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Hỗ trợ tìm việc và phỏng vấn</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => {
                    closeCurriculum()
                    window.open("https://m.me/9xlab", "_blank")
                  }}
                >
                  Đăng ký ngay
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={() => {
                    closeCurriculum()
                    window.open("https://m.me/9xlab", "_blank")
                  }}
                >
                  Tư vấn miễn phí
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
