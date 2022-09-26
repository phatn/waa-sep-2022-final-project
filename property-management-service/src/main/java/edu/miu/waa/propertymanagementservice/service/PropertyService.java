package edu.miu.waa.propertymanagementservice.service;

import edu.miu.waa.propertymanagementservice.dto.PropertyDto;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Set;

public interface PropertyService {
    PropertyDto save(PropertyDto property);
    Set<PropertyDto> findAll();
    PropertyDto findById(int id);

    List<PropertyDto> search(String propertyType, List<String> homeType,
                             int minPrice, int maxPrice,
                             int minRoomNumber, String street,
                             String city, String zipCode,
                             Boolean listed);

    List<PropertyDto> report(String propertyType, String city);
}
