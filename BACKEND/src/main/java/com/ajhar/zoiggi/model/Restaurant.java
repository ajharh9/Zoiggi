package com.ajhar.zoiggi.model;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class Restaurant {
    private String id;
    private String name;
    private String cloudinaryImageId;
    private String locality;
    private List<String> cuisines;
    private String avgRatingString;
    private String deliveryTime;
}
