package com.ajhar.zoiggi.controller;

import com.ajhar.zoiggi.model.Restaurant;
import com.ajhar.zoiggi.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.Method;
import java.util.List;


@RestController
public class RestaurantController {
    @Autowired
    private RestaurantService restaurantService;

    @GetMapping("res")
    public List<Restaurant> getRestaurant(){
        return restaurantService.getAllRestaurant();
    }
}
