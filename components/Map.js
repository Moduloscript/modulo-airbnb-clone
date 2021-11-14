/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import ReactMapGL, {Marker, Popup } from 'react-map-gl';
import getCenter from "geolib/es/getCenter";


function Map( {searchResults}) {
  const [selectedLocation, setSelectedLocation] = useState({});
  



  
  
  
//Transform the Search results object into an Object
  const coordinates = searchResults.map(result => ({
    longitude : result.long,
    latitude: result.lat,
  }))  


  //The latitude and Longititude of the center of the locations Cordinates
  const center = getCenter(coordinates);

  // console.log(center)

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  })

  // console.log(selectedLocation);

  
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/moduloscript/ckvxx95g32upd14pcu55uwwjq"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport) }

  >
      {searchResults.map(result => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="text-2xl cursor-pointer animate-bounce"
              aria-label="house-locator"
            >🏠</p>
          </Marker>
          
          {/* Popup notification if marker was clicked */}
          {selectedLocation.long === result.long ? (
            <Popup
            closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
            >
             {result.title}
            </Popup>
          ): (
      false
          )}
        </div>
    ))}      
    </ReactMapGL>
  );
}

  export default Map;
