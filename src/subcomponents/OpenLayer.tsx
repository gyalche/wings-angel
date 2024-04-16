import Feature from 'ol/Feature';
import Map from 'ol/Map';
import View from 'ol/View';
import Circle from 'ol/geom/Circle'; // Import Circle from ol/geom/Circle
import { Vector as VectorLayer } from 'ol/layer';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import { Stroke, Style } from 'ol/style';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const OpenLayer = ({ locations }: any) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current || !locations) return;

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([126.978, 37.5665]), // Seoul City Hall coordinates
        zoom: 16, // Zoom level 16
      }),
      controls: [],
    });

    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    map.addLayer(vectorLayer);

    // Add circles for each location
    locations.forEach((location: { latitude: number; longitude: number }) => {
      const circle = new Feature({
        geometry: new Circle(fromLonLat([location.longitude, location.latitude]), 20), // setting radius to 50
      });
      circle.setStyle(
        new Style({
          stroke: new Stroke({ color: 'rgb(49, 153, 204)', width: 2 }), // Correct stroke width
        })
      );
      vectorSource.addFeature(circle);
    });

    return () => {
      // map.setTarget(null);
    };
  }, [locations]);

  return <MapLoader ref={mapRef} style={{ width: '100%', height: '100vh' }} />;
};
const MapLoader = styled.div`
  width: 100%;
  height: 100vh;
`;
export default OpenLayer;
