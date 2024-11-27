
import Input from '../input'
import styled from "styled-components";
import faceImg from './../../img/face.jpg';
import { useState } from 'react';
import { books } from './data';


const DivSearch = styled.div`
    display: flex;`;

const ContainerSearch = styled.section`
    background-image: linear-gradient(90deg, #000000 35%, #000000 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 670px;
    width: 100%;

`;
const Title = styled.h2`
       color: #FFF;
        font-size: 56px;
        text-align: center;
        width: 100%;
        margin-top: 115px;
`;
const SubTitle = styled.h3`
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 40px;
    color: #8A2BE2; /* Roxo fluorescente */
`;

const FaceImage = styled.img`
    width: 750px; /* Ajuste o tamanho conforme necessário */
    height: auto;
    margin-top: 0px; /* Ajuste o espaçamento conforme necessário */
    object-fit: contain; /* Garante que a imagem não será distorcida */
`;
const DivResult = styled.div`
    display: flex;
    justify-content: flex-start; /* Alinha os itens à esquerda */
    align-items: center;
    margin-top: 90px; 
    margin-left: 290px; /* Adiciona margem à esquerda */
    overflow: hidden; 
    img {
        object-fit: cover;
    }
`;

const DivBookTitle = styled.div`
    text-align: left; /* Alinha o texto à esquerda */
    max-width: 400px; /* Define a largura máxima da caixa */
    margin: 0 20px 0 0; /* Adiciona margem à direita para espaçamento */
    padding: 10px; /* Adiciona um pouco de preenchimento interno */
    line-height: 1.5; /* Ajusta o espaçamento entre linhas */
`;

const DivBookImg = styled.div`
    color: #FFF;
`;

function SearchBar() {
    const[searchText, setSearchText] = useState([]);
    console.log(searchText);

  return (
    <>
        <DivSearch>
            <ContainerSearch>
                <Title>Portfólio </Title>
                <SubTitle>Thiago.s.silva</SubTitle>
                <Input placeholder="Escreve sua proxima leitura" onBlur={events =>{
                    const text = events.target.value;
                    const resultFromSearch = books.filter(book => book.name.includes(text));
                    setSearchText(resultFromSearch);
                }} />
                
            {searchText.map(book => (
                <DivResult>
                    <DivBookTitle>
                        <p><h1>{book.name}</h1></p>
                        <p>{book.text}</p>
                    </DivBookTitle>
                    <DivBookImg>
                        <img src={book.src} alt = {book.name}/>
                    </DivBookImg>
                    
                </DivResult>
            ))}

            </ContainerSearch>
            <FaceImage src={faceImg} alt="Face" />
        </DivSearch>
        
        
    </>
    
  );
}

export default SearchBar;