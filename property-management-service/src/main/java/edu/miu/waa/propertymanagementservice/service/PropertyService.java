package edu.miu.waa.propertymanagementservice.service;

import edu.miu.waa.propertymanagementservice.dto.PropertyDto;

import java.util.Set;

public interface PropertyService {
    PropertyDto save(PropertyDto property);
    Set<PropertyDto> findAll();
    PropertyDto findById(int id);
}
