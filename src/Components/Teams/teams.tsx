import { ReactNode } from "react";
import * as S from './teams-style'


export interface TTTimes{
    team: {
        id: Number;
        name: string;
        code: string;
        country: string;
        founded: number;
        national: boolean;
        logo: string;
    };
    venue: {
        id: Number;
        name: string;
        address: string;
        city: string;
        capacity: number;
        surface: string;
        image: string;
    }
}

export interface TeamsProps{
    teamGeral: TTTimes;
    children?: ReactNode;
    teamName: string
}

export const Teams: React.FC<TeamsProps> = ({ teamGeral, teamName }) => {
        if (teamGeral.team.name === teamName){
            return(
                <div>
                    
                    <S.Container teamName={teamGeral.team.name}>
                        <S.miniContainer>
                            <S.TeamLogo src={teamGeral.team.logo}></S.TeamLogo>
                            <div>
                                <S.teamName>{teamGeral.team.name}</S.teamName>
                                <S.TeamData>{teamGeral.team.founded}  - {teamGeral.venue.name}, {teamGeral.venue.city} - Capacidade: {teamGeral.venue.capacity}</S.TeamData>
                            </div>
                        </S.miniContainer>
                            
                        <img id="venueImage" src={teamGeral.venue.image} alt="" />
                    </S.Container>
                    

                </div>
            )
        } else{
            return null
        }
    
}