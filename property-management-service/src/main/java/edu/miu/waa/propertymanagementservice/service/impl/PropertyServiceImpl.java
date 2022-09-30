package edu.miu.waa.propertymanagementservice.service.impl;

import edu.miu.waa.propertymanagementservice.constant.AWSConfigProperties;
import edu.miu.waa.propertymanagementservice.dto.PropertyDto;
import edu.miu.waa.propertymanagementservice.entity.HomeType;
import edu.miu.waa.propertymanagementservice.entity.Property;
import edu.miu.waa.propertymanagementservice.entity.PropertyType;
import edu.miu.waa.propertymanagementservice.exception.NotFoundException;
import edu.miu.waa.propertymanagementservice.mapper.PropertyMapper;
import edu.miu.waa.propertymanagementservice.repository.PropertyRepository;
import edu.miu.waa.propertymanagementservice.service.PropertyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class PropertyServiceImpl implements PropertyService {
    private final PropertyRepository propertyRepo;
    private final PropertyMapper propertyMapper;
    private final S3FileServiceImpl s3FileService;
    private final AWSConfigProperties configAWS;

    @Override
    @PreAuthorize("hasRole('ROLE_OWNER')")
    public PropertyDto save(PropertyDto property) {
        Set<String> pictureNames = property.getPictures();
        Set<String> pictureUrls = s3FileService.getPresignedUrls(pictureNames);
        String awsBaseUrl = configAWS.getBaseUrl();

        Set<String> basePictureUrls = pictureNames.stream()
                .map(name -> awsBaseUrl + "/" + name).collect(Collectors.toSet());

        property.setPictures(basePictureUrls);

        Property result = propertyRepo.save(propertyMapper.toEntity(property));
        PropertyDto propertyDto = propertyMapper.toDto(result);
        propertyDto.setPresignPictures(pictureUrls);
        return propertyDto;
    }

    @Override
    public Set<PropertyDto> findAll() {
        Set<Property> properties = new HashSet<>();
        propertyRepo.findAll().forEach(properties::add);
        return propertyMapper.toDtos(properties);
    }

    @Override
    public PropertyDto findById(int id) {
        //log.info("Fetching property: {}", id);
        return propertyRepo.findById(id)
                .map(propertyMapper::toDto)
                .orElseThrow(() -> new NotFoundException("Cannot find property: " + id));
    }

    @Override
    public List<PropertyDto> search(String propertyType, List<String> homeTypes,
                                    int minPrice, int maxPrice, int minRoomNumber,
                                    String street, String city, String zipCode,
                                    Boolean listed) {
        // Property type
        List<PropertyType> enumPropertyTypes = new ArrayList<>();
        for (PropertyType pt : PropertyType.values()) {
            if (pt.toString().equalsIgnoreCase(propertyType)) {
                enumPropertyTypes.add(pt);
            }
        }
        if (enumPropertyTypes.isEmpty()) {
            enumPropertyTypes.addAll(Arrays.stream(PropertyType.values()).toList());
        }

        // Home Type
        List<HomeType> enumHomeTypes = new ArrayList<>();
        for (String homeType : homeTypes) {
            for (HomeType ht : HomeType.values()) {
                if (ht.toString().equalsIgnoreCase(homeType)) {
                    enumHomeTypes.add(ht);
                }
            }
        }
        if (enumHomeTypes.isEmpty()) {
            enumHomeTypes.addAll(Arrays.stream(HomeType.values()).toList());
        }

        // Location
        String streetPattern = street;
        if (!street.equals("%")) {
            streetPattern = "%" + street + "%";
        }

        String cityPattern = city;
        if (!city.equals("%")) {
            cityPattern = "%" + city + "%";
        }

        String zipCodePattern = zipCode;
        if (!zipCode.equals("%")) {
            zipCodePattern = "%" + zipCode + "%";
        }

        List<Property> properties = propertyRepo.findByPropertyTypeInAndHomeTypeInAndPriceBetweenAndNumOfRoomGreaterThanEqualAndLocationStreetLikeIgnoreCaseAndLocationCityLikeIgnoreCaseAndLocationZipCodeLikeIgnoreCaseAndListed(
                enumPropertyTypes, enumHomeTypes, minPrice, maxPrice, minRoomNumber, streetPattern, cityPattern, zipCodePattern, listed);
        return propertyMapper.toListDtos(properties);
    }

    @Override
    public List<PropertyDto> report(String propertyType, List<String> homeTypes, String street, String city, String zipCode) {
        List<PropertyType> enumPropertyTypes = PreparePropertyType(propertyType);
        List<HomeType> enumHomeTypes = PrepareHomeType(homeTypes);
        List<String> location = PrepareLocation(street, city, zipCode);

        String streetPattern = location.get(0);
        String cityPattern = location.get(1);
        String zipCodePattern = location.get(2);

        List<Property> properties = propertyRepo.findByPropertyTypeInAndHomeTypeInAndLocationStreetLikeIgnoreCaseAndLocationCityLikeIgnoreCaseAndLocationZipCodeLikeIgnoreCase(
                enumPropertyTypes, enumHomeTypes, streetPattern, cityPattern, zipCodePattern);

        return propertyMapper.toListDtos(properties);
    }

	@Override
	public List<PropertyDto> findFirst10() {
        List<Property> properties = propertyRepo.findFirst10ByOrderByCreatedDateDesc();

        return propertyMapper.toListDtos(properties);
	}

    @Override
    public long getSumSellTypeProperties() {
        return propertyRepo.getSumSellTypeProperties();
    }

    @Override
    public long getSumRentTypeProperties() {
        return propertyRepo.getSumRentTypeProperties();
    }

	private List<PropertyType> PreparePropertyType(String propertyType) {
        List<PropertyType> enumPropertyTypes = new ArrayList<>();

        for (PropertyType pt : PropertyType.values()) {
            if (pt.toString().equalsIgnoreCase(propertyType)) {
                enumPropertyTypes.add(pt);
            }
        }
        if (enumPropertyTypes.isEmpty()) {
            enumPropertyTypes.addAll(Arrays.stream(PropertyType.values()).toList());
        }

        return enumPropertyTypes;
    }

    private List<HomeType> PrepareHomeType(List<String> homeTypes) {
        List<HomeType> enumHomeTypes = new ArrayList<>();

        for (String homeType : homeTypes) {
            for (HomeType ht : HomeType.values()) {
                if (ht.toString().equalsIgnoreCase(homeType)) {
                    enumHomeTypes.add(ht);
                }
            }
        }
        if (enumHomeTypes.isEmpty()) {
            enumHomeTypes.addAll(Arrays.stream(HomeType.values()).toList());
        }

        return enumHomeTypes;
    }

    private List<String> PrepareLocation(String street, String city, String zipCode) {
        String streetPattern = street;

        if (!street.equals("%")) {
            streetPattern = "%" + street + "%";
        }

        String cityPattern = city;
        if (!city.equals("%")) {
            cityPattern = "%" + city + "%";
        }

        String zipCodePattern = zipCode;
        if (!zipCode.equals("%")) {
            zipCodePattern = "%" + zipCode + "%";
        }

        List<String> result = new ArrayList<>();
        result.add(streetPattern);
        result.add(cityPattern);
        result.add(zipCodePattern);

        return result;
    }
}
