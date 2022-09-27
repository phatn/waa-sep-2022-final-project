package edu.miu.waa.propertymanagementservice.service.impl;

import edu.miu.waa.propertymanagementservice.constant.AWSConfigProperties;
import edu.miu.waa.propertymanagementservice.service.S3FileService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.logging.log4j.util.Strings;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.auth.credentials.ProfileCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.S3Exception;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.GetObjectPresignRequest;
import software.amazon.awssdk.services.s3.presigner.model.PresignedGetObjectRequest;
import software.amazon.awssdk.services.s3.presigner.model.PresignedPutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.model.PutObjectPresignRequest;

import java.time.Duration;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class S3FileServiceImpl implements S3FileService {
    private final AWSConfigProperties configAWS;

    private String generateUrl(S3Presigner presigner, String bucketName, String keyName) {
        try {
            PutObjectRequest objRequest = PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(keyName)
                    .contentType("image/*")
                    .build();

            PutObjectPresignRequest presignRequest = PutObjectPresignRequest.builder()
                    .signatureDuration(Duration.ofMinutes(5))
                    .putObjectRequest(objRequest)
                    .build();

            PresignedPutObjectRequest presignedRequest = presigner.presignPutObject(presignRequest);
            String url = presignedRequest.url().toString();

            System.out.println("presign url:" + url);
            System.out.println("http method: " + presignedRequest.httpRequest().method());

            return url;
        } catch (S3Exception e) {
            log.error("S3Exception: ", e);
        }
        return Strings.EMPTY;
    }
    @Override
    public Set<String> getPresignedUrls(Set<String> keyNames) {
        String bucketName = configAWS.getS3Bucket();
        ProfileCredentialsProvider credentialsProvider = ProfileCredentialsProvider.create();
        Region region = Region.of(configAWS.getRegion());
        S3Presigner presigner = S3Presigner.builder()
                .region(region)
                .credentialsProvider(credentialsProvider)
                .build();

        Set<String> result = keyNames.stream()
                .map( keyName -> generateUrl(presigner, bucketName, keyName))
                .collect(Collectors.toSet());

        presigner.close();
        return result;
    }

    //for reading content from S3 bucket
    private String getFileUrl(S3Presigner presigner, String bucketName, String keyName) {
        try {
            GetObjectRequest objRequest = GetObjectRequest.builder()
                    .bucket(bucketName)
                    .key(keyName)
                    .build();

            GetObjectPresignRequest objPresignRequest = GetObjectPresignRequest.builder()
                    .signatureDuration(Duration.ofMinutes(60))
                    .getObjectRequest(objRequest)
                    .build();

            PresignedGetObjectRequest presignedGetObjRequest = presigner.presignGetObject(objPresignRequest);
            String url = presignedGetObjRequest.url().toString();
            System.out.println("presigned url:" + url);

            return url;
        } catch (S3Exception e) {
            log.error("S3Exception: ", e);
        }
        return Strings.EMPTY;
    }
    @Override
    public Set<String> getFileListUrls(Set<String> keyNames){
        String bucketName = configAWS.getS3Bucket();
        ProfileCredentialsProvider credentialsProvider = ProfileCredentialsProvider.create();
        Region region = Region.of(configAWS.getRegion());
        S3Presigner presigner = S3Presigner.builder()
                .region(region)
                .credentialsProvider(credentialsProvider)
                .build();

        Set<String> result = keyNames.stream()
                .map( keyName -> getFileUrl(presigner, bucketName, keyName))
                .collect(Collectors.toSet());

        presigner.close();
        return result;
    }
}
