
package com.example.showtimeservice.service;

import com.example.showtimeservice.model.Showtime;
import com.example.showtimeservice.repository.ShowtimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShowtimeService {

    @Autowired
    private ShowtimeRepository repo;

    public void addShowtime(Showtime showtime) {
        showtime.setAvailableSeats(showtime.getTotalSeats());
        repo.save(showtime);
    }

    public List<Showtime> getByMovie(Long movieId) {
        return repo.findByMovieId(movieId);
    }

    public List<Showtime> getByPartner(String username) {
        return repo.findByPartnerUser(username);
    }

    public void reduceSeatAvailability(Long id) {
        Showtime s = repo.findById(id).orElseThrow();
        if (s.getAvailableSeats() > 0) {
            s.setAvailableSeats(s.getAvailableSeats() - 1);
            repo.save(s);
        }
    }
}
