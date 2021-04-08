import React from 'react'
import styled from "styled-components"
import {Header, Footer} from "components";
import AppRouter from "config/AppRouter"

const StyledLayout = styled.div`
    display:flex;
    flex-direction:column;
    background-color: #000;
    color: #fff;
`

export default function Layout() {
    return (
        <StyledLayout>
            <Header />
            <AppRouter />
            <Footer />
        </StyledLayout>
    )
}