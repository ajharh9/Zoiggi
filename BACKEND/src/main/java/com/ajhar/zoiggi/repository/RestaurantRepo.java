package com.ajhar.zoiggi.repository;

import com.ajhar.zoiggi.model.Restaurant;
import lombok.Getter;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Getter
@Repository
public class RestaurantRepo {
    private final List<Restaurant> restaurantList = new ArrayList<>(List.of(
            new Restaurant(
                    "516263",
                    "Patna Biryani Club",
                    "oamsqzmmt2xt2eaqqt2p",
                    "Aiims Park",
                    new ArrayList<>(Arrays.asList("Biryani", "briyani")),
                    "4.4",
                    "35-40 mins"
            ),
            new Restaurant(
                    "654087",
                    "Burger King",
                    "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/60497022-434e-4d21-bc0e-813fea770ae5_654087.JPG",
                    "SP Verma Road",
                    new ArrayList<>(Arrays.asList("Burgers", "American")),
                    "4.2",
                    "50-55 mins"
            ),new Restaurant(
                    "591085",
                    "0612 Road Chef",
                    "qo1ypqreeaulytd7cmgr",
                    "Sanjay Nagar Road",
                    new ArrayList<>(Arrays.asList("Chinese", "Biryani")),
                    "4.4",
                    "30-35 mins"
            ),
            new Restaurant(
                    "516263",
                    "Patna Biryani Club",
                    "oamsqzmmt2xt2eaqqt2p",
                    "Aiims Park",
                    new ArrayList<>(Arrays.asList("Biryani", "briyani")),
                    "4.4",
                    "35-40 mins"
            ),
            new Restaurant(
                    "654087",
                    "Burger King",
                    "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/60497022-434e-4d21-bc0e-813fea770ae5_654087.JPG",
                    "SP Verma Road",
                    new ArrayList<>(Arrays.asList("Burgers", "American")),
                    "4.2",
                    "50-55 mins"
            ),new Restaurant(
                    "591085",
                    "0612 Road Chef",
                    "qo1ypqreeaulytd7cmgr",
                    "Sanjay Nagar Road",
                    new ArrayList<>(Arrays.asList("Chinese", "Biryani")),
                    "4.4",
                    "30-35 mins"
            )
    ));
}
