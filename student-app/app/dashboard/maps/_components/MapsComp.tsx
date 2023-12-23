import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

interface MapProps {
    accessToken: string;
}


const Map: React.FC<MapProps> = ({ accessToken }) => {
    const mapContainer = useRef(null);

    useEffect(() => {
        // Initialize map
        mapboxgl.accessToken = accessToken;
        const map = new mapboxgl.Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/streets-v11', // You can choose a different map style
            center: [48.584230, 7.673150], // Initial center [lng, lat]
            zoom: 100, // Initial zoom level
        });


        // Add controls, markers, etc. as needed
        new mapboxgl.Marker().setLngLat([48.584230, 7.673150]).addTo(map)

        // Cleanup on unmount
        return () => map.remove();
    }, [accessToken]);

    return <div ref={mapContainer} style={{ height: '400px', width: '100%' }} />;
};

export default Map;