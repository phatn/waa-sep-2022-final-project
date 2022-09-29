package edu.miu.waa.propertymanagementservice.service.impl;

import edu.miu.waa.propertymanagementservice.domain.ContactDetail;
import edu.miu.waa.propertymanagementservice.service.EmailService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender javaMailSender;

    @Override
    public String send(ContactDetail contactDetail)  {

        try {
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
                    
                    """.replace("$name", contactDetail.getName())
                    .replace("$phone", contactDetail.getPhone())
                    .replace("$email", contactDetail.getEmail())
                    .replace("$message", contactDetail.getMessage())
                    .replace("$dateTime", contactDetail.getDateTime())
                    .replace("$visitType", contactDetail.getVisitType().value());

            MimeMessage msg = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(msg, true);
            helper.setTo(contactDetail.getEmail());
            helper.setSubject("MIU Property Visit Request");
            helper.setText(content, true);
            javaMailSender.send(msg);
        } catch (Exception ex) {
            log.error("Error to send email", ex);
        }

        return "Request has sent!";
    }
}
