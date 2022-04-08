import styled from "styled-components";
import {
    Paragraph,
} from '../../components';

export const StyledContact = styled.div`
    text-align: center;
`;

export const StyledContactText = styled(Paragraph)`
    color: #696767;
`;

export const StyledContactForm = styled.div`
    text-align: left;
`;

export const StyledContactFormTitle = styled.div`
    font-weight: 500;
    font-size: 20px;
    color: #696767;
`;

export const StyledContactFormTextarea = styled.textarea`
    font-family: 'Inter', sans-serif;
    width: 90%;
    margin: 12px 0;
    margin-left: 5%;
    margin-right: 5%;
`;

export const StyledContactFormInput = styled.input`
    font-family: 'Inter', sans-serif;
    width: 90%;
    margin: 12px 0;
    margin-left: 5%;
    margin-right: 5%;
`;

export const StyledContactFormSendButton = styled.button`
    background-color: #1494F0;
    color: #fff;
    padding: 12px 50px;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
`;