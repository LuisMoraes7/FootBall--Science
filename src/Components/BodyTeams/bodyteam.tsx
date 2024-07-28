import { useEffect, useState } from 'react'
import * as S from './bodyteams-style'
import { TTTimes, Teams } from '../Teams/teams'
import { PlayerOrganization } from '../PlayersOrganization/playersOrganization'
import { MagnifyingGlass } from 'react-loader-spinner'

export const BodyTeam: React.FC = () => {
    const [teams, setTeam] = useState([])
    const fetchTeams = async () => {
        //pegando os times...
        try{
            const response = await fetch('https://luismoraes7.github.io/Testes/teamsPL.json')
            const data = await response.json()
            //atribuindo a const teams a resposta json..
            setTeam(data)
        }
     catch (error){
         console.error('Erro' + error)
        }
    }
    useEffect(() => {
        //cuidado para não repetir a chamada da função desnecessariamente...
        fetchTeams()
    }, [])
    
    //parametro que inicia com uma string vazia, em relação aos nomes do time que o usuário pode escolher.
    const [teamName, setTeamName] = useState('')
    const handleSelectChange = (event: React.ChangeEventHandler<HTMLSelectElement> | any) => {
        //setando o nome do time para o nome capturado lá no select-options.
        setTeamName(event.target.value);

        //declarando a presença do botao 'fechar' como verdadeira. ou seja, ele vai aparecer sempre que o usuário escolher uma option.
        setshowButton(true)

    };
    //declarando a interação com o botao..
    const [showbutton, setshowButton] = useState(false)


    const closeButton = () => {
        //função vai setar o nome do time como uma string vazia, fazendo com que busque na "API" esse valor, que não sera encontrado, portanto a 'aba' do time sera fechada
        setTeamName('')
        //tornando a presença do botao como falsa.
        setshowButton(!showbutton)
    }
    
    return(
        
        
        <S.divMaster>
        
            <S.Container>Olá! Seja bem-vindo ao <strong>FootBall Science</strong>. Aqui, nós utilizamos dados da Premier League, na temporada 2023-2024, trazendo os 11 jogadores que mais tem minutagem de alguns times da liga inglesa, além de algumas informações extras desses times. </S.Container>

            

            <S.SelectField>
                <label htmlFor="teams">Selecione seu time!</label>
                {/* aqui esta o dinamismo do botao. se o botao estiver aparecendo, o valor na option sera o nome do time escolhido. caso contrario, ele retornara o 'disabled' ('Selecione...) */}
                <select name="teams" value={showbutton ? (teamName) : ("0")}  id="teams" onChange={handleSelectChange}>
                    <option value="0" disabled selected>Selecione...</option>
                    <>
                    {/* um map que rodeara a constante team declarada la no começo, agora carregada com os dados da API. esse map esta funcionando para criar as opçoes que o usuario pode selecionar, ou seja, os times. aqui eu estou usando a interface TTTimes, para que o typescript entenda que cada elemento de 'teams' possui uma estrutura definida e eu posteriormente possa usar esses elementos*/}
                        {teams.map((team: TTTimes, index) => (
                            (
                            <option key={index} value={team.team.name}>{team.team.name}</option>
                            )
                        ))}
                    </>
                </select>
                {/* se relaciona com a visibilidade do botao..*/}
                {showbutton ? (<S.closeButton onClick={closeButton}>Fechar</S.closeButton>): (null)}
                
            </S.SelectField>

            {/* a constante teams possui algo (ou seja, o fetch funcionou)? caso sim, dará um map pelos times até achar o nome que o usuario escolheu, entao compartilhando seus dados com o componente 'Logos'.. */}
            {teams.length > 0 ? (
                <section>
                    {teams.map((team, index) => (
                        (<Teams key={index} teamGeral={team} teamName={teamName} >
                        </Teams>)
                    ))}
                </section>
                
            ) : (
                // tela de 'carregamento'..
                (<MagnifyingGlass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="magnifying-glass-loading"
                    wrapperStyle={{}}
                    wrapperClass="magnifying-glass-wrapper"
                    glassColor="#c0efff"
                    color="#e15b64"
                    />)
                  
            )}
            {/* passa o nome do time para o componente PlayerOrganization, afim de pegar os jogadores do time selecionado */}
            <PlayerOrganization teamName={teamName}></PlayerOrganization>

        
        </S.divMaster>
    )
}
