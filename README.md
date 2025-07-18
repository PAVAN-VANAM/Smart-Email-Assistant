# Smart Email Assistant

An intelligent email management system built with Spring Boot and Spring AI that helps users compose, categorize, and manage emails efficiently using AI-powered features.

## Features

- **AI-Powered Email Composition**: Generate professional emails based on brief prompts
- **Smart Email Categorization**: Automatically categorize incoming emails (work, personal, spam, etc.)
- **Email Summarization**: Get concise summaries of long email threads
- **Sentiment Analysis**: Analyze email tone and sentiment
- **Smart Reply Suggestions**: Generate contextual reply suggestions
- **Priority Detection**: Identify urgent or important emails automatically

## Tech Stack

- **Backend**: Spring Boot 3.x
- **AI Integration**: Spring AI
- **Database**: (Add your database here - H2, PostgreSQL, MySQL, etc.)
- **Build Tool**: Maven/Gradle
- **Java Version**: 17+

## Getting Started

### Prerequisites

- Java 17 or higher
- Maven 3.6+ or Gradle 7+
- Your preferred IDE (IntelliJ IDEA, Eclipse, VS Code)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Smart-Email-Assistant.git
   cd Smart-Email-Assistant
   ```

2. Configure your AI service credentials in `application.properties`:
   ```properties
   # Add your AI service configuration here
   spring.ai.openai.api-key=your-api-key
   ```

3. Build and run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

4. Access the application at `http://localhost:8080`

## API Endpoints

- `POST /api/emails/compose` - Generate email content
- `POST /api/emails/categorize` - Categorize email content
- `POST /api/emails/summarize` - Summarize email threads
- `GET /api/emails/suggestions` - Get reply suggestions

## Configuration

Update `application.properties` with your specific settings:

```properties
server.port=8080
spring.application.name=smart-email-assistant

# Database configuration
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driver-class-name=org.h2.Driver
spring.jpa.hibernate.ddl-auto=update

# AI service configuration
spring.ai.openai.api-key=${OPENAI_API_KEY}
spring.ai.openai.chat.options.model=gpt-3.5-turbo
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/Smart-Email-Assistant](https://github.com/yourusername/Smart-Email-Assistant)
