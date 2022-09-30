package edu.miu.waa.propertymanagementservice.service;

import java.util.Set;

public interface S3FileService {
    Set<String> getPresignedUrls(Set<String> fileNames);
    Set<String> getReadingUrls(Set<String> fileNames);
}
