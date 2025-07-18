
package com.example.movieservice.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String genre;
    private String language;
    private String city;
    private String partnerUsername;
    // getters and setters
}
