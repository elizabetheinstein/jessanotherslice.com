import React from "react";

import GoogleMap from "./googleMap"

export const Restaurant = () => (
    <div className="restaurant-container">
        <div className="restaurant-list">
            {/* list of restaurants as a sidebar */}
        </div>
        <div className="restaurant-map">
            <GoogleMap />
        </div>

    </div>
);