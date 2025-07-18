
package com.example.movieservice.service;

import com.example.movieservice.model.Movie;
import com.example.movieservice.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    public void addMovie(Movie movie) {
        movieRepository.save(movie);
    }

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    public List<Movie> getByCity(String city) {
        return movieRepository.findByCity(city);
    }

    public List<Movie> getByPartner(String username) {
        return movieRepository.findByPartnerUsername(username);
    }
}
