
package com.example.showtimeservice.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
public class Showtime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long movieId;
    private String theatreName;
    private LocalDate showDate;
    private LocalTime showTime;
    private int totalSeats;
    private int availableSeats;
    private String partnerUser;
    // getters and setters
}
