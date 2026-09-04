package com.neurofleetx.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neurofleetx.backend.dto.ProfileUpdateRequest;
import com.neurofleetx.backend.model.User;
import com.neurofleetx.backend.service.UserService;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    private final UserService service;

    public ProfileController(UserService service) {
        this.service = service;
    }

    // GET PROFILE
    @GetMapping("/{id}")
    public User getProfile(@PathVariable Long id) {
        return service.getProfile(id);
    }

    // UPDATE PROFILE (USING DTO)
    @PutMapping("/{id}")
    public User updateProfile(@PathVariable Long id,
                              @RequestBody ProfileUpdateRequest request) {
        return service.updateProfile(id, request);
    }
}
