package edu.miu.waa.propertymanagementservice;

import edu.miu.waa.propertymanagementservice.entity.Property;
import edu.miu.waa.propertymanagementservice.entity.PropertyType;
import edu.miu.waa.propertymanagementservice.repository.PropertyRepository;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
@ConfigurationPropertiesScan("edu.miu.waa.propertymanagementservice.constant")
public class PropertyManagementServiceApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(PropertyManagementServiceApplication.class, args);
        PropertyRepository propertyRepository = context.getBean(PropertyRepository.class);

        /*Property property = new Property();
        property.setPropertyType(PropertyType.SELL);
        Set<String> pictures = new HashSet<>();
        pictures.add("/pic1");
        pictures.add("/pic2");
        pictures.add("/pic3");
        property.setPictures(pictures);
        propertyRepository.save(property);*/

        Property property = propertyRepository.findById(1).get();
        System.out.println(property.getPictures());

    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
