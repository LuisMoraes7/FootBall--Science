import styled from "styled-components";
import { teamName } from "../Teams/teams-style";

export const Container = styled.div`
    //background-color: tomato;
    margin-top: 40px;
    //border: 1px solid black;
    width: 250px;
    //padding: 10px;
    height: 318px;
    //display: flex;
    &:hover{
        border-radius: 11px;
        border: 1px solid black;
        display: block;
        cursor: pointer;
        transform: translate(5px, -5px);
        transition: transform 0.3s;

    }
    `

export const ContainerMaster = styled.div`
    display: inline-flex;
    //background-color: tomato;
    margin-left: 15px;
    
    `

export const playerPosition = styled.p`
    margin-top: -10px;
    font-family: "Bebas Neue", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: light;
    color: white;
    text-shadow: 17px 12px 20px black;
    `

interface playerImageProps{
    teamName: string;
}

const redTeams = ['Manchester United', 'Arsenal', 'Liverpool', 'Nottingham Forest']
const whiteTeams = ['Newcastle', 'Fulham', 'Tottenham']

export const playerImage = styled.img<playerImageProps>`
    
    border-radius: 11px;
    background-color: ${(props) => {
        if (redTeams.includes(props.teamName)){
            return '#EF3E36'
        } else if (whiteTeams.includes(props.teamName)){
            return 'black'
        } else if(props.teamName === 'Wolves'){
            return '#FCAA27'
        } else {
            return '#5CA4A9'
        }
    }};
    width: 100%;
    background-size: cover;
    
    `

export const playerName = styled.p`

    font-family: "Bebas Neue", sans-serif;
    font-size: 31px;
    font-style: normal;
    font-weight: bolder;
    color: white;
    text-shadow: 17px 12px 20px black;
    margin-top: -60px;
    

`