package edu.miu.waa.propertymanagementservice.entity;

import edu.miu.waa.propertymanagementservice.converter.SetStringConverter;
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

    @Enumerated(EnumType.STRING)
    private PropertyType propertyType;

    @Enumerated(EnumType.STRING)
    private HomeType homeType;

    @Embedded
    private Address location;

    @Convert(converter = SetStringConverter.class)
    private Set<String> pictures;

    @Column(length = 5000)
    private String overview;

    private LocalDate availableDate;

    @ManyToMany(mappedBy = "favoriteProperties")
    private Set<User> users;

    private boolean listed = true;

    private boolean deleted = false;

    @ManyToOne
    private User owner;

    private String deletedBy;

}
