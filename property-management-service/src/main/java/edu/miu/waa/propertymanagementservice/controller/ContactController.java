package edu.miu.waa.propertymanagementservice.controller;

import edu.miu.waa.propertymanagementservice.domain.ContactDetail;
import edu.miu.waa.propertymanagementservice.domain.RequestVisitDetail;
import edu.miu.waa.propertymanagementservice.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/contacts")
public class ContactController {

    private final ContactService contactService;

    @PostMapping("/visit")
    public String requestVisit(@RequestBody @Valid RequestVisitDetail requestVisitDetail) {
        return contactService.requestVisit(requestVisitDetail);
    }

    @PostMapping("/contact")
    public String contact(@RequestBody @Valid ContactDetail contactDetail) {
        return contactService.contact(contactDetail);
    }
}
