package edu.miu.waa.propertymanagementservice.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Getter
@Setter
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private double price;

    private int numOfRoom;

    private PropertyType propertyType;

    private HomeType homeType;

    @Embedded
    private Address location;

    @ElementCollection
    private Set<String> photos;

    private String overview;

    private LocalDate availableDate;

    @ManyToMany
    private Set<User> favoriteUsers;

    private boolean listed = true;

    private boolean deleted = false;

    @ManyToOne
    //@JoinColumn(name = "owner_id")
    private User user;

    private String deletedBy;

}
