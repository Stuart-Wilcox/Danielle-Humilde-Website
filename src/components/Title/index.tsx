import styled from "styled-components";

const Title = styled.h1<{
    color?: string;
    italic?: boolean;
}>`
    color: ${props => props.color || '#000'};
    ${props => props.italic ? 'font-style: italic;' : ''}
`;

export default Title;