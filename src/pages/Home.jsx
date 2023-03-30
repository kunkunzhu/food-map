import React, { useState } from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import star from "../assets/star.png"
import food from "../components/foodData"
import { Ticker, Wiggle } from "../components/animations";

const Header = styled.h1`
    display: flex;
    flex-direction: column;

    .title {
        font-family: var(--title);
        text-transform: uppercase;
        font-size: 150px;
        margin-top: -25px;
        background: none;
    }
    .text {
        font-family: var(--txt);
        letter-spacing: 2rem;
        font-size: 18px;
        margin-top: -30px;
        margin-left: 50px;
        opacity: 0;
        background: none;

        :hover {
            opacity: 1;
            transition: 1s ease-in;
        }
    }
`

const Star = styled.div`
    background: url(${star});
    background-size: 50px 50px;
    height: 50px;
    width: 50px;
    margin-left: 15px;
`

const Cities = styled.div`
    
`

const City = styled.div`
    column-width: 100vw;
    border-bottom: 0.5rem solid;
    display: flex;
    overflow: hidden;
    margin-bottom: 15px;
    height: 80px;
`

const CityTag = styled.div`
    display: flex;
    font-family: var(--txt);
    font-size: 75px;
    text-transform: lowercase;
    margin-left: 15px;

    animation: ${Ticker} 15s infinite linear;

    .text {
        text-decoration: none;
        color: inherit;
    }

    .text:hover {
        font-family: var(--txt);
        transition: 1s ease-in-out;
        cursor: grab; 
    }

    .city:hover & {
        animation-play-state: paused;
        font-family: var(--scribble);
        font-weight: bold;
    } 
`

const CityImages = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 100px;
    right: 0;
    z-index: 1000;
    overflow: hidden;
    animation: ${Wiggle} 125ms infinite;
    animation-timing-function: linear; 
`

const CityImage = styled.div`
    background: url(${(props) => props.image});
    height: 300px;
    width: 400px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-right: 25px;
    border-radius: 25px;
`

function Home() {

    const [cityGallery, setCityGallery] = useState(null)

    const randomNum = (max) => {
        let random = Math.floor(Math.random() * max)
        return random
    }

    const randomSelect = (images, num) => {
        let selected = []
        let len = images.length
        for (let i = 0; i < num; i++) {
            let idx = randomNum(len)
            selected.push(images[idx])
            images.splice(idx, 1)
            len--
        }
        return selected
    }

    const renderFoodGallery = (cityName) => {
        let cityCode = 0;
        (cityName === "toronto") ? cityCode = 1 : cityCode = 2
        let foodImagesURLs = Object.values(food).filter(f => f.city === cityCode).map(f => f.images).flat()
        let selectedURLs = randomSelect(foodImagesURLs, 3) 
        let foodImageArray = []
        selectedURLs.map((image, key) => (
            foodImageArray.push(
                <CityImage image={image} key={key} />
            )
        ))
        return (
            <CityImages>
                {foodImageArray}
            </CityImages>
        )
    } 
    
    const cityRow = (city) => {
        let cityTags = []
        let path = "/" + city
        for (let i=0; i < 3; i++) {
            cityTags.push(
                <CityTag key={i}>
                <Link className="text" to={path} >
                    {city}
                </Link>
                <Star></Star>
                </CityTag>
            )
        }
        return cityTags
    }

    return (
        <div>
            <Header>
                <div className="title">
                    veni, vidi, 
                </div>
                <div className="text">
                    been there, ate that.
                </div>
                <div className="title">
                    voravi  
                </div>
            </Header>
            {cityGallery && renderFoodGallery(cityGallery)}
            <Cities>
                <City 
                className="city" 
                onMouseEnter={() => setCityGallery("waterloo")}
                onMouseLeave={() => setCityGallery(null)}
                >
                    {cityRow("waterloo")}
                    {cityRow("waterloo")}
                </City>
                <City 
                className="city"
                onMouseEnter={() => setCityGallery("toronto")}
                onMouseLeave={() => setCityGallery(null)}
                >
                    {cityRow("toronto")}
                    {cityRow("toronto")}
                </City>      
            </Cities>
        </div>
    )
}

export default Home