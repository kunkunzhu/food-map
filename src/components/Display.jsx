import React from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Wiggle } from './animations'

const DisplayWrapper = styled.div`
    width: 85vw;
    position: absolute;
    z-index: 999;
    height: 100vw;
`
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 25px;
    background-color: transparent;
    justify-content: space-between;
`

const ImageCarousel = styled.div`
    display: flex;
    flex-direction: row;
    background-color: inherit;
`

const ImageFrame = styled.div`
    background: url(${(props) => props.image});
    width: 350px;
    height: 250px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-right: 25px;
    border-radius: 25px;
    :hover {
        animation: ${Wiggle} 125ms infinite;
        animation-timing-function: linear;   
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;
    padding: 25px;m
    margin-left: 50px;
    border-radius: 25px;
    border: 5px solid;

    * {
        background: none;
        :hover {
            animation: ${Wiggle} 125ms infinite;
            animation-timing-function: linear;   
          }
    }

    .name {
        font-family: var(--title);
        text-transform: uppercase;
        font-size: 35px;
        line-height: 80%;
    }

    .address {
        font-family: var(--txt);
        text-transform: uppercase;
        font-size: 35px;
    }
`

const StyledRating = styled(Rating) ({
    '& .MuiRating-iconFilled': {
        color: "#FF5A70",
    },
    '& .MuiRating-iconEmpty': {
        color: "#FF5A70",
    },
});

export function Display({displayInfo, handleClick}) {

    const randomNum = (max) => {
        let random = Math.floor(Math.random() * max)
        return random
    }

    const selectImages = (images, len) => { 
        let selectedImages = []
        let selected = []
        for (let i = 0; i < 2; i++) {
            let random = randomNum(len)
            while (len > 1 && selected.includes(random)) {
                random = randomNum(len)
            }
            selectedImages.push(images[random])
            selected.push(random)
        }
        return selectedImages
    }

    const Images = (images) => {
        let imagesArray = []
        let selectedImages = selectImages(images, images.length)
        selectedImages.map((image) => (
            imagesArray.push(
                <ImageFrame image={image}/>
            )
        ))
        return imagesArray
    }

    const renderRating = (rating) => {
        return (
            <StyledRating 
            defaultValue={rating} 
            precision={0.5} 
            size="large"
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            readOnly />
        )
    }

    return (
        <DisplayWrapper onClick={handleClick}>
            <ContentWrapper>
                <ImageCarousel>
                    {Images(displayInfo.images)}
                </ImageCarousel>
                <Info>
                    <div className="name">
                        {displayInfo.name}
                    </div>
                    <div className="rating">
                        {renderRating(displayInfo.rating)}
                    </div>
                    <div className="address">
                        <LocationOnIcon />
                        &nbsp;
                        {displayInfo.address}
                    </div>
                </Info>
            </ContentWrapper>
        </DisplayWrapper>
    )
}