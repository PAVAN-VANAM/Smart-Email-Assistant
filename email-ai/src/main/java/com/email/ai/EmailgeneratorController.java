package com.email.ai;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = "*")
public class EmailgeneratorController {

    private final EmailgeneratorService emailgeneratorService;

    public EmailgeneratorController(EmailgeneratorService emailgeneratorService) {
        this.emailgeneratorService = emailgeneratorService;
    }

    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest){
        String response = emailgeneratorService.generateEmailReply(emailRequest);
        return ResponseEntity.ok(response);
    }
}
