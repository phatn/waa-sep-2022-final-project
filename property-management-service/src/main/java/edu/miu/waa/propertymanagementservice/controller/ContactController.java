package edu.miu.waa.propertymanagementservice.controller;

import edu.miu.waa.propertymanagementservice.domain.ContactDetail;
import edu.miu.waa.propertymanagementservice.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/contacts")
public class ContactController {

    private final EmailService emailService;

    @PostMapping
    public String contact(@RequestBody @Valid ContactDetail contactDetail) {
        return emailService.send(contactDetail);
    }
}
