import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";

const FleetHeatmap = ({ points }) => {
  const mapRef = useRef(null);
  const heatLayerRef = useRef(null);

  // ---------- INIT MAP ----------
  useEffect(() => {
    if (mapRef.current) return;

    mapRef.current = L.map("fleet-heatmap", {
      center: [12.9716, 77.5946],
      zoom: 12,
      zoomControl: true
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors"
    }).addTo(mapRef.current);
  }, []);

  // ---------- HEATMAP DATA ----------
  useEffect(() => {
    if (!mapRef.current || !points?.length) return;

    if (heatLayerRef.current) {
      mapRef.current.removeLayer(heatLayerRef.current);
    }

    const heatData = points.map(p => [
      p.lat,
      p.lng,
      p.tripCount
    ]);

    heatLayerRef.current = L.heatLayer(heatData, {
      radius: 30,
      blur: 22,
      maxZoom: 16,
      gradient: {
        0.2: "#4facfe",
        0.4: "#00f2fe",
        0.6: "#fbc531",
        0.8: "#e84118"
      }
    }).addTo(mapRef.current);
  }, [points]);

  // ---------- INLINE STYLES ----------
  const styles = {
    card: {
      background: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      padding: "20px",
      marginTop: "20px"
    },
    header: {
      marginBottom: "14px"
    },
    title: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#2f3640",
      margin: 0
    },
    subtitle: {
      fontSize: "13px",
      color: "#718093",
      marginTop: "4px"
    },
    map: {
      height: "420px",
      width: "100%",
      borderRadius: "12px",
      overflow: "hidden",
      border: "1px solid #eaeaea"
    },
    legend: {
      display: "flex",
      gap: "20px",
      marginTop: "12px",
      fontSize: "13px",
      color: "#444"
    },
    legendItem: {
      display: "flex",
      alignItems: "center",
      gap: "6px"
    },
    dotLow: {
      width: "14px",
      height: "14px",
      borderRadius: "50%",
      background: "#4facfe"
    },
    dotMedium: {
      width: "14px",
      height: "14px",
      borderRadius: "50%",
      background: "#fbc531"
    },
    dotHigh: {
      width: "14px",
      height: "14px",
      borderRadius: "50%",
      background: "#e84118"
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3 style={styles.title}>Fleet Heatmap Overview</h3>
        <p style={styles.subtitle}>
          Pickup, drop-off & route demand visualization
        </p>
      </div>

      <div id="fleet-heatmap" style={styles.map} />

      <div style={styles.legend}>
        <div style={styles.legendItem}>
          <span style={styles.dotLow}></span> Low
        </div>
        <div style={styles.legendItem}>
          <span style={styles.dotMedium}></span> Medium
        </div>
        <div style={styles.legendItem}>
          <span style={styles.dotHigh}></span> High
        </div>
      </div>
    </div>
  );
};

export default FleetHeatmap;
