import React from 'react'
import styled from 'styled-components'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Logoimg from '../img/logo.png'
import { mobile } from '../responsive';


const Container = styled.div`
    height: 80px;
    
   
`
const Wrapper = styled.div`
   padding: 5px 20px;
   display: flex;
   align-items: center;
   ${mobile({padding:"5px"})}
   
`
const Left = styled.div`
    flex: 1;
    align-items: center;
   display: flex;
`
const Center = styled.div`
    flex: 1;
    display: flex;
   align-items: center;
   justify-content: center;
   
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: end;
    ${mobile({ flex: 2, justifyContent: "center", width: "200px" })}
`


const SerachContainer = styled.div`
   border:1px solid #000;
   align-items: center;
   display: flex;
   margin-left: 25px;
   padding: 5px;
   border-radius: 20px;
   ${mobile({width:"90px", marginLeft: "10px"})}
`
const Input = styled.input`
   border:none;
   ${mobile({width:"55px", marginLeft: "10px"})}
`
const Logo = styled.div`
   
`
const Image = styled.img`
    width: 70px;
    ${mobile({marginLeft: "10px"})}
    
`
const MenuItem = styled.div`
    width: 80px;
    margin-left:25px;
    ${mobile({ fontSize: "12px", marginLeft: "5px" })}
   
`
const Navbars = styled.div`
   
   
`
const NavItem = styled.nav`
    ${mobile({display:"none"})}
   
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
            <Left>
                <Navbars>
                    <NavItem link to="#">Products</NavItem>
                    
                </Navbars>
                <SerachContainer>
                    <Input placeholder="Search"/>
                    <Search style={{ color: "gray", fontSize: 16 }}/>

                </SerachContainer>
            </Left>
            <Center>
                <Logo>
                    <Image src={Logoimg} />

                    </Logo>
            </Center>
            <Right>
            <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                 </Badge>
                </MenuItem>
            </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
