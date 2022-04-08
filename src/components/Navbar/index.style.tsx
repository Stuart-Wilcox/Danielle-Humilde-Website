import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
`;

export const StyledNavbarGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const StyledNavbarItem = styled(Link)`
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    border-radius: 5px;
    text-decoration: none;
    color: #696767;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;