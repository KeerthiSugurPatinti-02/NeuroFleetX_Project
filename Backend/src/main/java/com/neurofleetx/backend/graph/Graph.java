package com.neurofleetx.backend.graph;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class Graph {

    private final Set<Node> nodes = new HashSet<>();
    private final Map<Node, Map<Node, Integer>> adjacency = new HashMap<>();

    public void addNode(Node node) {
        nodes.add(node);
        adjacency.putIfAbsent(node, new HashMap<>());
    }

    // 🔥 Bidirectional edge (real roads work both ways)
    public void addEdge(Node from, Node to, int weight) {
        addNode(from);
        addNode(to);

        adjacency.get(from).put(to, weight);
        adjacency.get(to).put(from, weight);   // reverse direction
    }

    public Set<Node> getNodes() {
        return nodes;
    }

    public Map<Node, Integer> getEdges(Node node) {
        return adjacency.getOrDefault(node, new HashMap<>());
    }
}
