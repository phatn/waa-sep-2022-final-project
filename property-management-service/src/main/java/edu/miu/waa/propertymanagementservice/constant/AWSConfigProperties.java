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
    private String arn;
    private String accessKeyId;
    private String secretAccessKey;
}
