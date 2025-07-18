
package com.example.bookingservice.service;

import com.example.bookingservice.model.Booking;
import com.example.bookingservice.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository repo;

    public void book(Booking booking) {
        booking.setBookingTime(LocalDateTime.now());
        booking.setStatus("BOOKED");
        repo.save(booking);
    }

    public void cancel(Long id) {
        Booking b = repo.findById(id).orElseThrow();
        b.setStatus("CANCELLED");
        repo.save(b);
    }

    public List<Booking> getBookings(String username) {
        return repo.findByUsername(username);
    }
}
