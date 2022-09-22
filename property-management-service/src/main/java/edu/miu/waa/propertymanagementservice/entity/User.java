package edu.miu.waa.propertymanagementservice.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(unique = true)
    private String email;

    @ManyToMany(mappedBy = "favoriteUsers")
    private Set<Property> favoriteProperties;

    @OneToMany(mappedBy = "user")
    private Set<Property> properties;

    @OneToMany(mappedBy = "owner")
    private Set<Application> ownerApplications;

    @OneToMany(mappedBy = "customer")
    private Set<Application> customerApplications;
}
