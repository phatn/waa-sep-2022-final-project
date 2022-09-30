package edu.miu.waa.propertymanagementservice.controller;

import edu.miu.waa.propertymanagementservice.service.impl.S3FileServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/files")
@RequiredArgsConstructor
public class S3FileControler {
    private final S3FileServiceImpl s3FileService;

    @GetMapping("/{name}")
    public Set<String> getFileListUrls(@PathVariable String name ) {
        Set<String> fileNames = new HashSet<>(Arrays.asList(name));
        return s3FileService.getReadingUrls(fileNames);
    }

    @GetMapping("/presign/{name}")
    public Set<String> getPresignUrl(@PathVariable String name) {
        Set<String> fileNames = new HashSet<>(Arrays.asList(name));
        return s3FileService.getPresignedUrls(fileNames);
    }
}
