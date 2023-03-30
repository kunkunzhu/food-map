import React, { useState } from 'react'
import styled from 'styled-components'
import { Display } from './Display'
import { Pin } from './Pin'
import {
    MapContainer,
    TileLayer,
    AttributionControl,
    ZoomControl,
  } from 'react-leaflet'
import foods from './foodData'
import { Wiggle } from './animations'

const MapBox = styled(MapContainer)`
  height: 80vh;
  width: 90vw;
  margin: auto;
  border: 5px solid;
  position: relative;

  * {
    background-color: transparent;
  }
`

const MapHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  justify-content: space-between;
  position: absolute;
  top: 35px;
  left: 125px;
  font-family: var(--title);

  .header {
    margin-right: 200px;
    font-size: 30px;
  }

  .city {
    text-transform: uppercase;
    color: var(--background);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color:  black;
    font-size: 45px;
  }

  *:hover {
    animation: ${Wiggle} 125ms infinite;
    animation-timing-function: linear;   
  }
`

export const CityMap = ({ city }) => {

  let foodPins = Object.values(foods)

  const [foodDisplay, setFoodDisplay] = useState(null)
  const [displayStatus, setDisplayStatus] = useState(false)

  let position = null;
  let minZoom = 11.5;

  if (city === "waterloo") {
    position = [43.465, -80.52]
    minZoom += 2;
  } else {
    position = [43.72, -79.38]
  }

  const zoom = minZoom + 0.5;
  const maxZoom = minZoom + 2.5;

  const openModal = (food) => {
    setFoodDisplay(food)
    setDisplayStatus(true)
  }

  const closeModal = () => {
    setFoodDisplay(null)
    setDisplayStatus(false)
  }

  console.log(displayStatus)

  return (
    <div>
      <MapHeader>
        <div className='header'>
          veni, vidi, voravi 
        </div>
        <div className='city'>
          {city}
        </div>
      </MapHeader>
      <MapBox 
      center={position} 
      zoom={zoom}
      minZoom={minZoom}
      maxZoom={maxZoom} 
      zoomDelta={0.2}
      zoomSnap={0}
      dragging={false}
      zoomControl={false}
      attributionControl={false}
      >
        <TileLayer
        url={`https://api.mapbox.com/styles/v1/kunleidoscopic/clf762p9z00dk01p9h201suae/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia3VubGVpZG9zY29waWMiLCJhIjoiY2xmNzZwYXVuMTZydzNzbzc4OHh6ZXc5YSJ9.AMN9lXcpcRZnCcM9iQ7SVQ`}
        />
        <ZoomControl position="bottomleft"/>
        <AttributionControl position="bottomright" />
        {foodPins.map((pin, key) => {
              return <Pin 
              position={pin.latlng} 
              handleClick={openModal}
              key={key} 
              food={pin}
              className="pin"
              />;
        })}
        {foodDisplay && (
          <Display displayInfo={foodDisplay} handleClick={closeModal}/>
        )}
      </MapBox>
    </div>
  )
}