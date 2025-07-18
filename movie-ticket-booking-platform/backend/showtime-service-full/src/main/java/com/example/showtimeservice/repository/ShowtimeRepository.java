
package com.example.showtimeservice.repository;

import com.example.showtimeservice.model.Showtime;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ShowtimeRepository extends JpaRepository<Showtime, Long> {
    List<Showtime> findByMovieId(Long movieId);
    List<Showtime> findByPartnerUser(String partnerUser);
}
