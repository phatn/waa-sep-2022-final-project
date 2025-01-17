package edu.miu.waa.propertymanagementservice.repository;

import edu.miu.waa.propertymanagementservice.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

    User findByEmail(String email);
}
