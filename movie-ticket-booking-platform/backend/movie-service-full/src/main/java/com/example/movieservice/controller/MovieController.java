
package com.example.movieservice.controller;

import com.example.movieservice.model.Movie;
import com.example.movieservice.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @PostMapping("/add")
    public ResponseEntity<String> addMovie(@RequestBody Movie movie) {
        movieService.addMovie(movie);
        return ResponseEntity.ok("Movie added");
    }

    @GetMapping("/all")
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    @GetMapping("/by-city")
    public List<Movie> getByCity(@RequestParam String city) {
        return movieService.getByCity(city);
    }

    @GetMapping("/by-partner")
    public List<Movie> getByPartner(@RequestParam String username) {
        return movieService.getByPartner(username);
    }
}
