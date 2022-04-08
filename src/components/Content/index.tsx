import styled from "styled-components";

const StyledContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
`;

const StyledContentShoulder = styled.div`
    flex: 1;
`;

const StyledContentMain = styled.div`
    flex: 6;
`;

const Content: React.FC<{}> = ({ children }) => (
    <StyledContent>
        <StyledContentShoulder />
        <StyledContentMain>
            {children}
        </StyledContentMain>
        <StyledContentShoulder />
    </StyledContent>
);

export default Content;