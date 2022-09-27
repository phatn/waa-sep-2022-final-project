package edu.miu.waa.propertymanagementservice.controller;

import edu.miu.waa.propertymanagementservice.service.impl.S3FileServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/files")
@RequiredArgsConstructor
public class S3FileControler {
    private final S3FileServiceImpl s3FileService;

//    @GetMapping
//    public Set<String> getPresignedUrls() {
//        return s3FileService.getPresignedUrls();
//    }
}
