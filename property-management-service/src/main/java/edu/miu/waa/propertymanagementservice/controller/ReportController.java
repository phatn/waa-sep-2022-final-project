package edu.miu.waa.propertymanagementservice.controller;

import edu.miu.waa.propertymanagementservice.dto.PropertyDto;
import edu.miu.waa.propertymanagementservice.service.PropertyService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/report")
public class ReportController {

	private final PropertyService propertyService;

	@GetMapping()
	@Cacheable(value = "report", key = "{#city,#propertyType}")
	public List<PropertyDto> search(@RequestParam(defaultValue = "SELL") String propertyType,
									@RequestParam(defaultValue = "%") String city) {
		System.out.println(city);
		return propertyService.report(propertyType, city);
	}
}
