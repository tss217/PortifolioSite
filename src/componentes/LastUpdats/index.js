
import {books} from "./lastUpdateData";
import styled from "styled-components";

const LastUpdatsContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #EB9B00;
    font-size: 36px;
    text-align: center;
    margin: 0;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LastUpdats(){
    return(
        <LastUpdatsContainer>
            <Title>Últimas atualizações</Title>
            <NewBooksContainer>
                {books.map((book) =>(
                    <img src={book.src}/>
                ))}
            </NewBooksContainer>

        </LastUpdatsContainer>
        
    );
}

export default LastUpdats;