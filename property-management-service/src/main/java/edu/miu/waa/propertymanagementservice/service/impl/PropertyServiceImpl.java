package edu.miu.waa.propertymanagementservice.service.impl;

import edu.miu.waa.propertymanagementservice.dto.PropertyDto;
import edu.miu.waa.propertymanagementservice.entity.HomeType;
import edu.miu.waa.propertymanagementservice.entity.Property;
import edu.miu.waa.propertymanagementservice.entity.PropertyType;
import edu.miu.waa.propertymanagementservice.mapper.PropertyMapper;
import edu.miu.waa.propertymanagementservice.repository.PropertyRepository;
import edu.miu.waa.propertymanagementservice.service.PropertyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.PreparedStatement;
import java.util.*;

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

	@Override
	public List<PropertyDto> search(String propertyType, List<String> homeTypes,
									int minPrice, int maxPrice, int minRoomNumber,
									String street, String city, String zipCode,
									Boolean listed) {
		List<PropertyType> enumPropertyTypes = PreparePropertyType(propertyType);
		List<HomeType> enumHomeTypes = PrepareHomeType(homeTypes);
		List<String> location = PrepareLocation(street, city, zipCode);

		String streetPattern = location.get(0);
		String cityPattern = location.get(1);
		String zipCodePattern = location.get(2);

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
