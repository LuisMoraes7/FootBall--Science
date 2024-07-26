import React from "react"
import * as S from './players-style'


export interface PPProps{
    name: string,
    team: string,
    position: string,
    image: string
}

interface PlayerProps{
    player: PPProps;
    teamName: string
}

export const Player: React.FC<PlayerProps> = ({ player, teamName }) => {
 

    //mais uma verificação para saber se o time do jogador realmente é o time selecionado usando a variavel teamname
    if (player.team === teamName) {
        return(
            <>
                    <S.ContainerMaster>
                        <S.Container>
                            <S.playerImage teamName={(teamName)} src={player.image}></S.playerImage>
                            <S.playerName>{player.name}</S.playerName>
                            <S.playerPosition>{player.position}</S.playerPosition>
                        </S.Container>            
                    </S.ContainerMaster>
                    
            </>
        )
    } else{
        return null
    }
}