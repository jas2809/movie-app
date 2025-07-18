
package com.example.useraccess.service;

import com.example.useraccess.model.User;
import com.example.useraccess.repository.UserRepository;
import com.example.useraccess.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    @Autowired
    private JwtUtil jwtUtil;

    public void registerUser(User user) {
        repo.save(user);
        kafkaTemplate.send("user-registered-topic", user.getUsername());
    }

    public String login(User user) {
        User u = repo.findByUsername(user.getUsername()).orElseThrow();
        if (!u.getPassword().equals(user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }
        return jwtUtil.generateToken(u);
    }
}
