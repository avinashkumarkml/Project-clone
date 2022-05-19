import React from "react";
import ReactDOM from "react-dom";
import "./footer.css";

import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div({
  display: "flex",
});

const Left = styled.div({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
});

const Logo = styled.h1({});

const Desc = styled.p({
  margin: "20px 0px",
});

const SocialContainer = styled.div({
  display: "flex",
});

const SocialIcon = styled.div({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  color: "white",
  display: "flex",
  alignIteams: "center",
  justifyContent: "center",
  marginRight: "80px",
});

const Center = styled.div({
  flex: "1",
  padding: "20px",
});

const Title = styled.h3({
  marginBottom: "30px",
});

const List = styled.ul({
  margin: "0",
  padding: 0,
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
});

const ListItem = styled.li({
  width: "50%",
  marginBottom: "10px",
});

const Right = styled.div({
  flex: "1",
  // padding: "20px",
  
  

});

const ContactItem = styled.div({
  marginBottom: "20px",
});

const Payment = styled.img({
  width: "50%",
});

export default function Footer(){
  return (
    <div style={{marginTop:"30px"}}>
    <footer className="footer">
    <div> <img src="https://www.uboric.com/wp-content/uploads/2021/04/uboric.svg" alt="" height="5%" width="5%"/></div>

    <Container>
        <Left>
          <Logo>Uboric</Logo>
          <Desc>
          Online shopping with Uboric is quick, convenient and trouble-free. You can shop for the desired product right from the comfort of your home and get them delivered straight to your doorstep. Uboric offers you the chance to choose top branded products sitting in the comfort.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Products</Title>
          <List>
            <ListItem>Foot Wear</ListItem>
            <ListItem>Men's footwear</ListItem>
            <ListItem>Casual Sandals</ListItem>
            <ListItem>Party Shoes</ListItem>
            <ListItem>Slippers</ListItem>
            <ListItem>Crocs</ListItem>
            <ListItem>Flip Flops</ListItem>
            <ListItem>Loafers</ListItem>
            <ListItem>Mojdi</ListItem>
            <ListItem>Sneakers</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} />
            Bihar, Darbhanga, India-847304
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> +91 8619996364
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} />{" "}
            theavinashbhardwaj@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>

    
    
    </footer>
    </div>
  );
}