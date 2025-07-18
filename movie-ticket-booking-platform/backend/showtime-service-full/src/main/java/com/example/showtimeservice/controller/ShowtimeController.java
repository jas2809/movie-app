
package com.example.showtimeservice.controller;

import com.example.showtimeservice.model.Showtime;
import com.example.showtimeservice.service.ShowtimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/showtimes")
public class ShowtimeController {

    @Autowired
    private ShowtimeService showtimeService;

    @PostMapping("/add")
    public ResponseEntity<String> addShowtime(@RequestBody Showtime showtime) {
        showtimeService.addShowtime(showtime);
        return ResponseEntity.ok("Showtime added");
    }

    @GetMapping("/movie/{movieId}")
    public List<Showtime> getByMovie(@PathVariable Long movieId) {
        return showtimeService.getByMovie(movieId);
    }

    @GetMapping("/partner/{username}")
    public List<Showtime> getByPartner(@PathVariable String username) {
        return showtimeService.getByPartner(username);
    }

    @PutMapping("/reduce-availability/{id}")
    public ResponseEntity<String> reduceSeats(@PathVariable Long id) {
        showtimeService.reduceSeatAvailability(id);
        return ResponseEntity.ok("Seat count updated");
    }
}
