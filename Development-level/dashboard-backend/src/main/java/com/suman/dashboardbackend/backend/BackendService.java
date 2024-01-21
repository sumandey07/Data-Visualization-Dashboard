package com.suman.dashboardbackend.backend;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class BackendService {

    private final BackendRepository backendRepository;

    public BackendService(BackendRepository backendRepository) {
        this.backendRepository = backendRepository;
    }

    public List<Backend> getEverything() {
        return backendRepository.findAll();
    }
}
