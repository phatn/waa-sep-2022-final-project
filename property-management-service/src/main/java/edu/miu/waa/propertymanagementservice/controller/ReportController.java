package edu.miu.waa.propertymanagementservice.controller;

import edu.miu.waa.propertymanagementservice.dto.PropertyDto;
import edu.miu.waa.propertymanagementservice.service.PropertyService;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/report")
public class ReportController {

	private final PropertyService propertyService;

	@GetMapping()
	@Cacheable(value = "report", key = "{#propertyType,#homeType,#street,#city,#zipCode,#year}")
	public List<PropertyDto> search(@RequestParam(defaultValue = "SELL") String propertyType,
									@RequestParam(defaultValue = "") List<String> homeType,
									@RequestParam(defaultValue = "%") String street,
									@RequestParam(defaultValue = "%") String city,
									@RequestParam(defaultValue = "%") String zipCode,
									@RequestParam(defaultValue = "0") int year) {
		return propertyService.report(propertyType, homeType, street, city, zipCode);
	}
}
