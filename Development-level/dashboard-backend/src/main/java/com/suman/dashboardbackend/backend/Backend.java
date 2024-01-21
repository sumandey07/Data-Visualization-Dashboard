package com.suman.dashboardbackend.backend;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Table(name = "data")
public class Backend {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Integer id;
    private Integer end_year;
    private String citylng;
    private String citylat;
    private Integer intensity;
    private String sector;
    private String topic;
    private String insight;
    private String swot;
    private String url;
    private String region;
    private String start_year;
    private String impact;
    private String added;
    private String published;
    private String city;
    private String country;
    private Integer relevance;
    private String pestle;
    private String source;
    private String title;
    private Integer likelihood;
}
