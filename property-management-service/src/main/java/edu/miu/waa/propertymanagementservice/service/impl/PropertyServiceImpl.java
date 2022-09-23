package edu.miu.waa.propertymanagementservice.service.impl;

import edu.miu.waa.propertymanagementservice.dto.PropertyDto;
import edu.miu.waa.propertymanagementservice.entity.Property;
import edu.miu.waa.propertymanagementservice.mapper.PropertyMapper;
import edu.miu.waa.propertymanagementservice.repository.PropertyRepository;
import edu.miu.waa.propertymanagementservice.service.PropertyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class PropertyServiceImpl implements PropertyService {
    private final PropertyRepository propertyRepo;
    private final PropertyMapper propertyMapper;

    @Override
    public PropertyDto save(PropertyDto property) {
        Property result = propertyRepo.save(propertyMapper.toEntity(property));
        return propertyMapper.toDto(result);
    }

    @Override
    public Set<PropertyDto> findAll() {
        Set<Property> properties = new HashSet<>();
        propertyRepo.findAll().forEach(properties::add);
        return propertyMapper.toDtos(properties);
    }

    @Override
    public PropertyDto findById(int id) {
        return propertyRepo.findById(id)
                .map(propertyMapper::toDto)
                .orElse(new PropertyDto());
    }
}
