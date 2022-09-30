package edu.miu.waa.propertymanagementservice.service.impl;

import edu.miu.waa.propertymanagementservice.domain.ContactDetail;
import edu.miu.waa.propertymanagementservice.domain.RequestVisitDetail;
import edu.miu.waa.propertymanagementservice.service.ContactService;
import edu.miu.waa.propertymanagementservice.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    private final EmailService emailService;

    @Override
    @PreAuthorize("hasRole('ROLE_CUSTOMER')")
    public String requestVisit(RequestVisitDetail requestVisitDetail) {
        String recipient = requestVisitDetail.getOwnerEmail();
        String title = "MIU Property Visit Request";
        String content = """
                    <h1>Detail of request of visit as follows</h1>
                    <style type="text/css">
                            .tg  {border-collapse:collapse;border-spacing:0;}
                            .tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
                              overflow:hidden;padding:10px 5px;word-break:normal;}
                            .tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
                              font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
                            .tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}
                            .tg .tg-fymr{border-color:inherit;font-weight:bold;text-align:left;vertical-align:top}
                            .tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
                            .tg .tg-0lax{text-align:left;vertical-align:top}
                            </style>
                            <table class="tg">
                            <thead>
                              <tr>
                                <th class="tg-fymr">Name</th>
                                <th class="tg-0pky">$name</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="tg-fymr">Phone</td>
                                <td class="tg-0pky">$phone</td>
                              </tr>
                              <tr>
                                <td class="tg-fymr">Email</td>
                                <td class="tg-0pky">$email</td>
                              </tr>
                              <tr>
                                <td class="tg-1wig">Message</td>
                                <td class="tg-0lax">$message</td>
                              </tr>
                              <tr>
                                <td class="tg-1wig">Date Time</td>
                                <td class="tg-0lax">$dateTime</td>
                              </tr>
                              <tr>
                                <td class="tg-fymr">Visit Type</td>
                                <td class="tg-0pky">$visitType</td>
                              </tr>
                            </tbody>
                            </table>
                    
                    """.replace("$name", requestVisitDetail.getName())
                .replace("$phone", requestVisitDetail.getPhone())
                .replace("$email", requestVisitDetail.getEmail())
                .replace("$message", requestVisitDetail.getMessage())
                .replace("$dateTime", requestVisitDetail.getDateTime())
                .replace("$visitType", requestVisitDetail.getVisitType().value());

        emailService.send(recipient, title, content);

        return "Request visit has been sent";
    }

    @Override
    @PreAuthorize("hasRole('ROLE_CUSTOMER')")
    public String contact(ContactDetail contactDetail) {
        String recipient = contactDetail.getOwnerEmail();
        String title = "MIU Property Contact Request";
        String content = """
                    <h1>Detail of contact request as follows</h1>
                    <style type="text/css">
                            .tg  {border-collapse:collapse;border-spacing:0;}
                            .tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
                              overflow:hidden;padding:10px 5px;word-break:normal;}
                            .tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
                              font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
                            .tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}
                            .tg .tg-fymr{border-color:inherit;font-weight:bold;text-align:left;vertical-align:top}
                            .tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
                            .tg .tg-0lax{text-align:left;vertical-align:top}
                            </style>
                            <table class="tg">
                            <thead>
                              <tr>
                                <th class="tg-fymr">Name</th>
                                <th class="tg-0pky">$name</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="tg-fymr">Phone</td>
                                <td class="tg-0pky">$phone</td>
                              </tr>
                              <tr>
                                <td class="tg-fymr">Email</td>
                                <td class="tg-0pky">$email</td>
                              </tr>
                              <tr>
                                <td class="tg-1wig">Message</td>
                                <td class="tg-0lax">$message</td>
                              </tr>
                            </tbody>
                            </table>
                    
                    """.replace("$name", contactDetail.getName())
                .replace("$phone", contactDetail.getPhone())
                .replace("$email", contactDetail.getEmail())
                .replace("$message", contactDetail.getMessage());

        emailService.send(recipient, title, content);
        return "Request contact has been sent";
    }
}
