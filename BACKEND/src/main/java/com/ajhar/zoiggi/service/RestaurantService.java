package com.ajhar.zoiggi.service;

import com.ajhar.zoiggi.model.Restaurant;
import com.ajhar.zoiggi.repository.RestaurantRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Service
public class RestaurantService {
    @Autowired
    private RestaurantRepo restaurantRepo;
    public List<Restaurant> getAllRestaurant() {
        return restaurantRepo.getRestaurantList();
    }
}
