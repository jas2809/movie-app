
package com.example.bookingservice.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private Long movieId;
    private String seatNumber;
    private String status;
    private LocalDateTime bookingTime;
    // getters and setters
}
