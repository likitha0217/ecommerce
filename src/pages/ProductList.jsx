import React from 'react'
import styled from 'styled-components'
import Accounment from '../component/Accounment'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Newsletter from '../component/Newsletter'
import Products from '../component/Products'
import { mobile } from '../responsive'

const Container = styled.div`
   
`

const Title = styled.h2`
   margin: 20px;
`

const FliterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Fliter = styled.div`
  
  
margin:20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const FliterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`
const Select = styled.select`
padding:10px;
margin-right: 20px;
${mobile({ margin: "10px 0px" })}
`
const Option = styled.option`
   
`

const ProductList = () => {
    return (
        <Container>
              <Accounment />
            <Navbar />
            <Title>Dresses</Title>
            <FliterContainer>
                <Fliter>
                    <FliterText>Fliter Products</FliterText>
                    <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
                </Fliter>
                <Fliter>
                <FliterText>Sorted Products</FliterText>
                <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
                </Fliter>
            </FliterContainer>
          <Products />
          <Newsletter />
          <Footer/>
        </Container>
    )
}

export default ProductList
