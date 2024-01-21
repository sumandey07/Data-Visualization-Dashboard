package com.suman.dashboardbackend.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BackendRepository extends JpaRepository<Backend, Integer> {
}
