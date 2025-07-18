
package com.example.bookingservice.controller;

import com.example.bookingservice.model.Booking;
import com.example.bookingservice.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/book")
    public ResponseEntity<String> book(@RequestBody Booking booking) {
        bookingService.book(booking);
        return ResponseEntity.ok("Seat booked");
    }

    @PutMapping("/cancel/{id}")
    public ResponseEntity<String> cancel(@PathVariable Long id) {
        bookingService.cancel(id);
        return ResponseEntity.ok("Booking cancelled");
    }

    @GetMapping("/user/{username}")
    public List<Booking> getBookings(@PathVariable String username) {
        return bookingService.getBookings(username);
    }
}
