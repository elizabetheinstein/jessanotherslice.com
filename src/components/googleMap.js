import React from "react";
import GoogleMapReact from "google-map-react";
import { MAPS_API_KEY } from "../../secrets.json";

import "../styles/map.css";

import {
    JoeAndPats,
    Brunetti,
    DiFara,
    Macchina,
    Levante,
    BleekerStreetPizza,
    NYPizzaSuprema,
    Emily,
    LIndustriePizzeria,
    Keste,
    Levante
} from "./restaurantList";

const defaultProps = {
    center: {
        lat: 40.728953,
        lng: -73.984091,
    },
    zoom: 13,
};

const GoogleMap = () => (
    <div className="google-map">
        <GoogleMapReact
            bootstrapURLKeys={{ key: MAPS_API_KEY }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
            <JoeAndPats lat={40.728953} lng={-73.984091} text={"1"} />
            <Brunetti lat={40.738268} lng={-74.0075657} text={"2"} />
            <DiFara lat={40.7169342} lng={-73.9641728} text={"3"} />
            <Macchina lat={40.740848} lng={-73.9833777} text={"4"} />
            <Levante lat={40.747557} lng={-73.9416924} text={"5"} />
            <BleekerStreetPizza lat={40.7321938} lng={-74.0055907} text={"6"} />
            <NYPizzaSuprema lat={40.7501438} lng={-73.9974131} text={"7"} />
            <Emily lat={40.7501226} lng={-74.0652643} text={"8"} />
            <LIndustriePizzeria lat={40.7116053} lng={-73.9600578} text={"9"} />
            <Keste lat={40.7315345} lng={-74.0051513} text={"10"} />
        </GoogleMapReact>
    </div>
);

export default GoogleMap;
