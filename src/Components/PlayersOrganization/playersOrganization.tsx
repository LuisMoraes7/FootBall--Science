import { useEffect, useState } from 'react';
import * as S from './playersOrganization-style'
import {Player} from '../Player/Player'

interface DataProps {
    teamName: string;
}
interface PlayerData {
    name: string;
    team: string;
    position: string;
    image: string;
}



export const PlayerOrganization: React.FC<DataProps> = ({ teamName }) => {
    const [players, setPlayers] = useState<PlayerData[]>([])
    
    const fetchPlayers = async () => {
        try{
            const response = await fetch('https://luismoraes7.github.io/Testes/playersPL.json');
            const data = await response.json();
            setPlayers(data)
        } catch (error) {
            console.error('Erro' + error)
    }
}

//consulta os dados obtidos da API, passeando por cada posição dos jogadores e declarando tudo isso em um array. será usado posteriormente para separar os jogadores por posição.
const positions = Array.from(new Set(players.map(player => player.position)));
useEffect(() => {
    fetchPlayers()
}, [])



    return(
        <div>
            
            
            
            
             <section>
                {/* o componente 'bodyteam' passou o nome do jogador? caso sim, faça um map por cada posição do array declarado anteriormente. agora, faça uma filtragem, passando pelos dados da API e tendo certeza se há algum jogador do time selecionado lá + também verifique se a posição dele estará na 'position' que está passando naquele momento pelo map. agora, dentro dessa filtragem, use o map para passar dados para cada variavel ali dentro, passando alguns dados da API para o componente 'player'. */}
            {teamName !== '' ? (
                positions.map(position => (
                    <div key={position}>
                        <S.Introduction>{position.toUpperCase()}S</S.Introduction>
                        {players.filter(player => player.team === teamName && player.position === position)
                        .map((player) => (
                            //aquela variavel 'teamname' passada no bodyteam esta sendo usada aqui
                            <Player teamName={teamName} key={player.name} player={player}></Player>
                        ))}
                    </div>
                )))
             : (
                null
                )}
            </section>
        </div>
        

    )
}

export default PlayerOrganization