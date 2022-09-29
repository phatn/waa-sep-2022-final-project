package edu.miu.waa.propertymanagementservice.repository;

import edu.miu.waa.propertymanagementservice.entity.HomeType;
import edu.miu.waa.propertymanagementservice.entity.Property;
import edu.miu.waa.propertymanagementservice.entity.PropertyType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface PropertyRepository extends CrudRepository<Property, Integer> {
    List<Property> findByPropertyTypeInAndHomeTypeInAndPriceBetweenAndNumOfRoomGreaterThanEqualAndLocationStreetLikeIgnoreCaseAndLocationCityLikeIgnoreCaseAndLocationZipCodeLikeIgnoreCaseAndListed(
            Collection<PropertyType> propertyTypes, Collection<HomeType> homeTypes, double minPrice, double maxPrice, int minRoomNumber, String street, String city, String zipCode, Boolean listed);

    List<Property> findByPropertyTypeInAndHomeTypeInAndLocationStreetLikeIgnoreCaseAndLocationCityLikeIgnoreCaseAndLocationZipCodeLikeIgnoreCase(
            Collection<PropertyType> propertyTypes, Collection<HomeType> homeTypes, String street, String city, String zipCode);

	List<Property> findFirst10ByOrderByCreatedDateDesc();

	@Query("SELECT SUM(price) FROM Property WHERE propertyType = 'SELL'")
	long getSumSellTypeProperties();

	@Query("SELECT SUM(price) FROM Property WHERE propertyType = 'RENT'")
	long getSumRentTypeProperties();
}
