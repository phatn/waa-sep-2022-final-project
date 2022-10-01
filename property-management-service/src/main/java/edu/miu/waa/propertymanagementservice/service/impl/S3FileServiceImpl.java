package edu.miu.waa.propertymanagementservice.service.impl;

import com.amazonaws.HttpMethod;
import com.amazonaws.services.s3.AmazonS3;
import edu.miu.waa.propertymanagementservice.constant.AWSConfigProperties;
import edu.miu.waa.propertymanagementservice.service.S3FileService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.logging.log4j.util.Strings;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class S3FileServiceImpl implements S3FileService {
    private final AWSConfigProperties configAWS;
    private final AmazonS3 amazonS3;

    @Override
    public Set<String> getPresignedUrls(Set<String> fileNames) {
        Set<String> result = fileNames.stream()
                .map(fileName -> generateUrl(fileName, HttpMethod.PUT))
                .collect(Collectors.toSet());
        return result;
    }

    private String generateUrl(String fileName, HttpMethod httpMethod) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        // Generated URL will be valid for 1 minute
        calendar.add(Calendar.MINUTE, 1);
        String bucketName = configAWS.getS3Bucket();
        return amazonS3.generatePresignedUrl(bucketName, fileName, calendar.getTime(), httpMethod)
                .toString();
    }

    //for reading content from S3 bucket
    @Override
    public Set<String> getReadingUrls(Set<String> fileNames) {
        String bucketName = configAWS.getS3Bucket();
        Set<String> result = fileNames.stream()
                .map(fileName -> {
                    if(amazonS3.doesObjectExist(bucketName, fileName)) {
                        return generateUrl(fileName, HttpMethod.GET);
                    } else {
                        return null;
                    }
                })
                .collect(Collectors.toSet());
        return result;
    }
}
