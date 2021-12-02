import styled from "styled-components"
import React from "react"

const Container = styled.div`
    background-color: teal;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-size: 14px;

`
const Accounment = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over $50
        </Container>
    )
}

export default Accounment
