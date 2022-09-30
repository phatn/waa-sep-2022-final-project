package edu.miu.waa.propertymanagementservice.service;

import edu.miu.waa.propertymanagementservice.domain.RequestVisitDetail;

public interface EmailService {

    void send(String recipient, String title, String content);
}
