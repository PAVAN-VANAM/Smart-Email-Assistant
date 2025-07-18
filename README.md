# 🤖 AI-Powered Email Assistant

A comprehensive email management ecosystem featuring AI-powered email generation, intelligent browser extension, and modern web interface. Built with Spring Boot, React, and Google Gemini AI.

## 🚀 Project Overview

This project consists of three integrated components:
- **Backend API**: Spring Boot application with Gemini AI integration
- **Frontend Web App**: React-based user interface with Material-UI
- **Browser Extension**: Chrome extension for Gmail integration

## ✨ Features

### 🎯 Core Capabilities
- **AI Email Generation**: Create professional emails using Google Gemini AI
- **Smart Compose**: Generate contextual email responses
- **Gmail Integration**: Seamless browser extension for Gmail
- **Modern UI**: Responsive React interface with Material-UI components
- **RESTful API**: Clean API design for email operations

### 🔧 Technical Features
- **Reactive Programming**: WebFlux for non-blocking operations
- **Health Monitoring**: Spring Boot Actuator integration
- **Cross-Origin Support**: CORS configuration for frontend integration
- **Environment Configuration**: Secure API key management

## 🏗️ Architecture

```
├── email-ai/          # Spring Boot Backend (Port: 8080)
├── Frontend/          # React Web Application (Port: 5173)
├── Email-ext/         # Chrome Browser Extension
└── README.md          # Project Documentation
```

## 🛠️ Tech Stack

### Backend
- **Framework**: Spring Boot 3.5.3
- **Java Version**: 24
- **Build Tool**: Maven
- **AI Integration**: Google Gemini AI
- **Reactive Stack**: Spring WebFlux
- **Monitoring**: Spring Boot Actuator
- **Code Enhancement**: Lombok

### Frontend
- **Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **UI Library**: Material-UI 7.2.0
- **HTTP Client**: Axios 1.10.0
- **Styling**: Emotion (CSS-in-JS)

### Browser Extension
- **Platform**: Chrome Extension Manifest V3
- **Target**: Gmail Integration
- **Permissions**: ActiveTab, Storage
- **Host Access**: Gmail, Localhost API

## 🚀 Quick Start

### Prerequisites
- **Java**: 24+ (configured in pom.xml)
- **Node.js**: 18+ (for React frontend)
- **Maven**: 3.6+
- **Google Gemini API Key**

### 1. Backend Setup

```bash
cd email-ai

# Configure environment variables
export GEMINI_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent
export GEMINI_KEY=your-gemini-api-key

# Build and run
./mvnw clean install
./mvnw spring-boot:run
```

Backend will be available at: `http://localhost:8080`

### 2. Frontend Setup

```bash
cd Frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will be available at: `http://localhost:5173`

### 3. Browser Extension Setup

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select the `Email-ext` folder
4. The extension will be available in Gmail

## 📡 API Endpoints

### Email Generation
```http
POST /api/email/generate
Content-Type: application/json

{
  "prompt": "Write a professional follow-up email for a job interview",
  "context": "Interview was yesterday for Software Engineer position"
}
```

### Health Check
```http
GET /actuator/health
```

## ⚙️ Configuration

### Backend Configuration (`application.properties`)
```properties
spring.application.name=email-ai

# Gemini AI Configuration
gemini.api.url=${GEMINI_URL}
gemini.api.key=${GEMINI_KEY}

# Server Configuration (optional)
server.port=8080

# Actuator Configuration
management.endpoints.web.exposure.include=health,info
```

### Frontend Configuration
- **Development**: `npm run dev` (Vite dev server)
- **Production**: `npm run build` (Static build)
- **Linting**: `npm run lint` (ESLint)

### Browser Extension Configuration
- **Permissions**: ActiveTab, Storage
- **Host Permissions**: Gmail, Localhost API
- **Content Scripts**: Injected into Gmail pages

## 🔧 Development

### Backend Development
```bash
cd email-ai

# Run with hot reload
./mvnw spring-boot:run

# Run tests
./mvnw test

# Build for production
./mvnw clean package
```

### Frontend Development
```bash
cd Frontend

# Development with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Extension Development
1. Make changes to files in `Email-ext/`
2. Reload extension in `chrome://extensions/`
3. Test in Gmail

## 📁 Project Structure

```
email-ai/
├── src/main/java/com/email/ai/
│   ├── EmailAiApplication.java      # Main Spring Boot application
│   ├── EmailgeneratorController.java # REST API controller
│   ├── EmailgeneratorService.java   # Business logic service
│   └── EmailRequest.java            # Request DTO
├── src/main/resources/
│   └── application.properties       # Configuration
└── pom.xml                         # Maven dependencies

Frontend/
├── src/
│   ├── App.jsx                     # Main React component
│   ├── main.jsx                    # React entry point
│   └── assets/                     # Static assets
├── package.json                    # NPM dependencies
└── vite.config.js                  # Vite configuration

Email-ext/
├── manifest.json                   # Extension configuration
├── content.js                      # Gmail integration script
└── content.css                     # Extension styling
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow Java coding standards for backend
- Use ESLint configuration for frontend
- Test all components before submitting PR
- Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Backend API**: http://localhost:8080
- **Frontend App**: http://localhost:5173
- **Health Check**: http://localhost:8080/actuator/health
- **Google Gemini AI**: https://ai.google.dev/

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check existing documentation
- Review API endpoints and configuration

---

**Built with ❤️ using Spring Boot, React, and Google Gemini AI**
