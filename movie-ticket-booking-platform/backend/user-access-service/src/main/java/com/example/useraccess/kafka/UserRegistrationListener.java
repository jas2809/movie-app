package com.example.useraccess.kafka;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class UserRegistrationListener {

    @KafkaListener(topics = "user-registered-topic", groupId = "user-group")
    public void listenUserRegistration(String message) {
        System.out.println("Received Kafka message: " + message);
// You can log it, store it, or trigger another process
    }
}
