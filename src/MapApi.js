// import "./App.css";

// import GoogleMapReact from "google-map-react";

// function MapApi() {
//   return (
//     <>
//       {/* <Map

//           google={this.props.google}
//           zoom={8}
//           style={{width:"100%", height:"100%"}}
//           initialCenter={{ lat: 53.384811, lng: -6.263190}}
//         /> */}

//       <div style={{ height: "100vh", width: "100%" }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyD89qFkISscunCIo7oZL0moe3CYzZHw28g" }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//           lat={53.384811}
//           lng={-6.26319}
//           text="My Marker"
//         >
//           {/* <AnyReactComponent /> */}
//         </GoogleMapReact>
//       </div>
//     </>
//   );
// }

// export default MapApi;

import React from "react";
import { GoogleMap, LoadScript} from "@react-google-maps/api";

function MapApi() {
  const mapStyles = {
    height: "60vh",
    width: "100%",
  };

  const defaultCenter = {
    lat:53.349804, lng: -6.260310
  }


  return (
    <LoadScript googleMapsApiKey="AIzaSyD89qFkISscunCIo7oZL0moe3CYzZHw28g">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
}

export default MapApi;
