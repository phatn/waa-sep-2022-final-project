package edu.miu.waa.propertymanagementservice.repository;

import edu.miu.waa.propertymanagementservice.entity.Application;
import edu.miu.waa.propertymanagementservice.entity.HomeType;
import edu.miu.waa.propertymanagementservice.entity.Property;
import edu.miu.waa.propertymanagementservice.entity.PropertyType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface ApplicationRepository extends CrudRepository<Application, Integer> {
    long count();
}
