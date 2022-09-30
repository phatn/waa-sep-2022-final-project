package edu.miu.waa.propertymanagementservice.constant;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@Getter
@Setter
@ConfigurationProperties(prefix = "aws")
@ConfigurationPropertiesScan
public class AWSConfigProperties {
    private String s3Bucket;
    private String region;
    private String baseUrl;
//    private String accessKeyId;
//    private String accessKeySecret;
    private String accessKeyId = System.getenv("ACCESS_KEY_ID");
    private String accessKeySecret = System.getenv("ACCESS_KEY_SECRET");
}
