package edu.miu.waa.propertymanagementservice.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
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

    @Enumerated(EnumType.STRING)
    private PropertyType propertyType;

    @Enumerated(EnumType.STRING)
    private HomeType homeType;

    @Embedded
    private Address location;


    @OneToMany(mappedBy = "property")
    private Set<Picture> pictures;

    private String overview;

    private LocalDate availableDate;

    @ManyToMany
    private Set<User> users;

    private boolean listed = true;

    private boolean deleted = false;

    @ManyToOne
    private User owner;

    private String deletedBy;

}
