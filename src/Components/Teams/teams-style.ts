import { styled } from "styled-components";

export const TeamLogo = styled.img`
    margin: auto;
    
`
interface ContainerProps{
    teamName: string;
    
}
const redTeams = ['Manchester United', 'Arsenal', 'Liverpool', 'Nottingham Forest']
const whiteTeams = ['Newcastle', 'Fulham', 'Tottenham']

export const Container = styled.div<ContainerProps>`
    
    display: flex;
    align-items: center;
    background-color: ${(props) => {
        if (redTeams.includes(props.teamName)){
            return '#EF3E36'
        } else if (whiteTeams.includes(props.teamName)){
            return '#F2FDFF'
        } else if(props.teamName === 'Wolves'){
            return '#FCAA27'
        } else {
            return '#5CA4A9'
        }
    }};

    justify-content: space-between;
    width: 100vw;
    height: 350px;
    overflow: hidden;
    box-shadow: -2px 3px 8px black;
    img#venueImage{
        border-radius: 20px;
        height: 320px;
        width: 550px;
        margin-right: -20px;
    }

    //estilo para celulares.
    @media (max-width: 768px) {
        font-size: 12px;
        font-weight: bold;
        display: block;
        height: 500px;
        img#venueImage{
            height: 340px;
            width: 100%;
        }
    }
    
    `

export const TeamData = styled.p`
    font-size: 1.1em;

`



export const teamName = styled.p`
    font-family: 'Premier League', Arial, sans-serif;
    font-weight: bold;
    font-size: 37px;
    color: #37003C;
    margin-left: 15px;
    @media (max-width: 768px) {
        font-size: 24px;
        margin-left: 0px;
    }
`

export const miniContainer = styled.div`
    display: grid;
    margin-left: 40px;
    padding: 10px;
    width: 600px;
    grid-template-columns: 1fr 1fr;

    //estilo para celulares.
    @media (max-width: 768px) {
        width: 400px;
    }
    
`

