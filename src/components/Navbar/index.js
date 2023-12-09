import React from 'react'
import{ Link as LinkR} from 'react-router-dom';
import styled from 'styled-components';
import {DiCssdeck} from "react-icons/di";
import {FaBars} from "react-icons/fa";

import { useTheme } from 'styled-components';
import { Bio } from '../../data/Constant';

const Nav =styled.div`
background-color: ${({theme})=>theme.card_light};
height:80px;
display:flex;
justify-content:center;
align-itmes:center;
font-size:1rem;
position: sticky;
top:0;
z-index:10;
@media screen and (max-width:960px){
    transition:0.8s all easy;
}
`;
const NavContainer=styled.div`
display:flex;
justify-content:space-between;
height:60px;
z-index:1;
width:100%;
padding:0 24px;
max-width:1200px;
`;

const NavLogo=styled(LinkR)`
width:80%;
padding: 0 6px;
display:flex;
justify-self:flex-stact;
cursor:pointer;
text-decoration:none;
align-items:center;
@media screen and (max-width:640px){
    padding: 0 0px;
}
`;

const MobileIcon=styled.div`
display:none;
@media screen and (max-width:768px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%,50%);
    font-size:1.5rem;
    cursor:pointer;
    color: ${({theme})=>theme.text_primary};
}`;

const NavItems=styled.ul`
width:100%;
display:flex;
justify-content:center;
align-items:center;
gap:32px;
list-style:none;
@media screen and (max-width:768px){
    display:none;
}
`;

const NavLink=styled.a`
color: ${({theme})=>theme.text_primary};
font-weight:500;
cursor:pointer;
text-decoration:none;
transition:all 0.2s ease-in-out;
&:hover{
color: ${({theme})=>theme.primary};
}

`;

const ButtonContainer=styled.div`
display:flex;
align-items:center;
justify-content:end;
width:80%;
height:100%;
padding:0 6px;
@media screen and (max-width:640px){
    display:none;
}
`;

const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    display:none;
    }
`;

const MobileMenu=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
gap:16px;
position:absolute;
top:80;
right:0;
width:100%;
padding:12px 40px 24px 40px;
background: ${({theme})=>theme.card_light+99};
transition: all 0.3s easy-in-out;
transform:${({open})=>open ?'translateX(0)':'translateY(100%)'};
border-radius:0 0 20 20px;
box-shadow: 0 5px 10px rgba(0,0,0,0.3);
opacity: ${({open})=>open ? '1':'0'};
z-index: ${({open})=>open ? '1':'-1'};
`;

const MobileMenuLinks = styled(LinkR)`

color:${({theme})=>theme.white};
font-size:1rem;
cursor:pointer;
text-decoration:none;
transition: all 0.2s ease-in-out;

:hover {
    color:${({theme})=>theme.primary};
`;



export const Span=styled.div`
padding:0 4px;
font-weight:bold;
font-size:18px;
`;

const Navbar = () => {
    const [open,setOpen]= React.useState(false);
    const theme =useTheme();
  return(
   <Nav>
    <NavContainer>
        <NavLogo to="/"><a style={{
            display:"flex",
            alignItems:"center",
            color:"white",
            marginBottom:"20;",
            cursor:"pointer",
        }}
        >
            <DiCssdeck size="3rem"/> <span>Portfolio</span>
        </a>
        </NavLogo>
        <MobileIcon>
            <FaBars onClick={()=>{
                setOpen(!open)
            }}
            />
        </MobileIcon>
        <NavItems>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#project">Project</NavLink>
            <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
            <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
    </NavContainer>

    {
        open && (
            <MobileMenu open={open}>
                <MobileMenuLinks href="#about" onClick={()=>{
                    setOpen(!open);
                }}>
                    About
                </MobileMenuLinks>
                <MobileMenuLinks href="#skills" onClick={()=>{
                    setOpen(!open);
                }}>
                    Skills
                </MobileMenuLinks>
                <MobileMenuLinks href="#experience" onClick={()=>{
                    setOpen(!open);
                }}>
                    Experience
                </MobileMenuLinks>
                <MobileMenuLinks href="#project" onClick={()=>{
                    setOpen(!open);
                }}>
                    Project
                </MobileMenuLinks>
                <MobileMenuLinks href="#education" onClick={()=>{
                    setOpen(!open);
                }}>
                    Education
                </MobileMenuLinks>
                <MobileMenuLinks>
                    <GitHubButton style={{
                        padding:"10px 16px",
                        backgroundcolor: `${theme.primary}`,
                        color:"white",
                        width:"max-content",
                    }}href={Bio.github}target="_blank">Github Profile</GitHubButton>
                     <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
                </MobileMenuLinks>
            </MobileMenu>
        )
    }
  </Nav>

  );
};

export default Navbar;
