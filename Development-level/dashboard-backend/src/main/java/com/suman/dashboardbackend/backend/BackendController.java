package com.suman.dashboardbackend.backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(path = "api/v1/dashboard")
public class BackendController {

    private final BackendService backendService;


    public BackendController(BackendService backendService) {
        this.backendService = backendService;
    }

    @GetMapping
    public List<Backend> getEach() {
        return backendService.getEverything();
    }
}