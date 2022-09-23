package edu.miu.waa.propertymanagementservice.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(unique = true)
    private String email;

    @ManyToMany
    @JoinTable(name = "favorite_properties_users",
            joinColumns = {@JoinColumn(name = "user_id")},
    inverseJoinColumns = {@JoinColumn(name="property_id")})

    private Set<Property> favoriteProperties;

    @OneToMany(mappedBy = "owner")
    private Set<Property> properties;

    @OneToMany(mappedBy = "owner")
    private Set<Application> ownerApplications;

    @OneToMany(mappedBy = "customer")
    private Set<Application> customerApplications;
}
