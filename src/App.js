import './App.css';
import finaldata from "./data.json";
import { useState, useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";

function App() {
  const [location, setLocation] = useState([]);
  const R = 6371;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const india = { lat: 20.5937, lng: 78.9629 };
  const [zoom] = useState(3);
  maptilersdk.config.apiKey = 'NaYtUF3TXs9dILENQReB';

  const finder = (range, givenLocation) => {
    finaldata.forEach(element => {
      const difflat = element.latitude * (Math.PI / 180) - givenLocation.latitude * (Math.PI / 180);
      const difflon = element.longitude * (Math.PI / 180) - givenLocation.longitude * (Math.PI / 180);

      let a = Math.sin(difflat / 2) ** 2 + Math.cos(element.latitude * (Math.PI / 180)) * Math.cos(givenLocation.latitude * (Math.PI / 180)) * Math.sin(difflon / 2) ** 2;
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      let distance = R * c;

      if (distance <= range) {
        setLocation(prevvalue => [element, ...prevvalue]);
      }
    });

  }

  useEffect(() => {
    console.log("hello")
    if (!map.current) {
      map.current = new maptilersdk.Map({
        container: mapContainer.current,
        style: maptilersdk.MapStyle.STREETS,
        center: [india.lng, india.lat],
        zoom: zoom
      });
    }

    else {

      if(map.current.markers != undefined) map.current.markers.forEach(marker => marker.remove());
      if(location != undefined)
      {
        
        location.forEach(element => {
      
          new maptilersdk.Marker({ color: "#FF0000" })
            .setLngLat([element.longitude, element.latitude])
            .addTo(map.current);
        }); 
      }
    }
  }, [india.lng, india.lat, zoom , location]);

  return (
    <div className="App">
      <button onClick={() => {
        finder(1, {
          latitude: 30.68894,
        longitude: 76.39308
        })
      }}>Find Locations</button>

      {JSON.stringify(location)}
      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>
    </div>
  );
}

export default App;
