package com.neurofleetx.backend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.neurofleetx.backend.graph.Node;
import com.neurofleetx.backend.service.RouteOptimizationService;

@RestController
@RequestMapping("/api/route")
public class RouteOptimizationController {

    private final RouteOptimizationService service;

    public RouteOptimizationController(RouteOptimizationService service) {
        this.service = service;
    }

    @GetMapping("/optimize")
    public Map<String, Integer> optimize(@RequestParam String start) {

        Node startNode = new Node(start);
        Map<Node, Integer> result = service.optimizeRoute(startNode);

        // Convert Node -> String for React
        Map<String, Integer> response = new HashMap<>();
        result.forEach((node, distance) ->
            response.put(node.getName(), distance)
        );

        return response;
    }
}
