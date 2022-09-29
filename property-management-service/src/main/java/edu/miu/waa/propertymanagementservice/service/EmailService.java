package edu.miu.waa.propertymanagementservice.service;

import edu.miu.waa.propertymanagementservice.domain.ContactDetail;

public interface EmailService {

    String send(ContactDetail contactDetail);
}
