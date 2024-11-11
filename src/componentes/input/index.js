
import styled from "styled-components";
const Input = styled.input`
    order: 1px solid #FFF;
    background: transparent;
    boder: 1px solid #FFF;
    padding: 10px 140px; /* Reduced the height by changing the padding */
    border-radius: 50px;
    width: 500px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 25px;

    &::placeholder {
        color: #FFF;
        font-size: 16px;
    }   
`;

export default Input;