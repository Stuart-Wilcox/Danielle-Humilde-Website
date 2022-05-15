import styled from "styled-components";

export const StyledCard = styled.div<{ color: string }>`
    border-radius: 20px;
    background-color: ${props => props.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    
    &:hover {
        & > div.card-content {
            opacity: 0.75;
        }
    }
`;

export const StyledCardImageShoulder = styled.div`
    flex: 1;
`;

export const StyledCardImageContainer = styled.div`
    height: 350px;
    width: 350px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
`;

export const StyledCardImage = styled.img`
    margin: auto;
    border-radius: 20px; /* images are poorly cropped */
`;

export const StyledCardContent = styled.div`
    position: absolute;
    opacity: 0; /* usually see through, this gets set when hover parent */
    background-color: #000;
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;