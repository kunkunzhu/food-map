import React from 'react';
import L from "leaflet";
import star from "../assets/star.png"
import styled from "styled-components";
import { Marker, Tooltip } from "react-leaflet";

const StyledTooltip = styled(Tooltip)`
  font-family: var(--txt);
  text-transform: lowercase;
  border: 2px solid black;
  padding: 10px;
  background-color: var(--background); !important
`

export const Pin = ({position, handleClick, food}) => {

  const icon = new L.Icon({
    iconUrl: star,
    iconRetinaUrl: star,
    iconAnchor: [0, 0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(25, 25),
  });
  
  return (
      <Marker
      position={position}
      icon={icon}
      zIndexOffset={1000}
      eventHandlers={{
        click: (e) => handleClick(food)
      }}
      >
        <StyledTooltip
        direction="top"
        offset={[13, 2]}
        opacity={1}
        >
          {food.name}
        </StyledTooltip>
      </Marker>
  );
}