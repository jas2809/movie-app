
package com.example.movieservice.repository;

import com.example.movieservice.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Long> {
    List<Movie> findByCity(String city);
    List<Movie> findByPartnerUsername(String partnerUsername);
}
