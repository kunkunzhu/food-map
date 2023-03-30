import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import star from "../assets/star.png"

const NavWrapper = styled.div`
    padding: 25px;
    display: flex;
    justify-content: space-between;
`

const Star = styled.div`
    background: url(${star});
    background-size: 60px 60px;
    height: 60px;
    width: 60px;
`

export function Nav() {
    return (
        <NavWrapper>
            <Link to = "/">
                <Star></Star>
            </Link>
        </NavWrapper>
    )
}
