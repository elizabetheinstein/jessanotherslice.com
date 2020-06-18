import React from "react";
import GoogleMapReact from "google-map-react";
import { MAPS_API_KEY } from "../../secrets.json"

const defaultProps = {
    center: {
        lat: 40.728953,
        lng: -73.984091,
    },
    zoom: 12,
};

const Restaurant = ({ text }) => <div>{text}</div>;

const GoogleMap = () => (
    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: MAPS_API_KEY }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
            <Restaurant
                lat={40.728953}
                lng={-73.984091}
                text={"1"}
            />
        </GoogleMapReact>
    </div>
);

export default GoogleMap;
