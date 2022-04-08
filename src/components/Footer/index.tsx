import * as React from 'react'
import {
    StyledFooter,
    StyledFooterShoulder,
    StyledFooterItem,
} from './index.style';

export interface IProps {
    
}

const Footer: React.FC<IProps> = (props: IProps) => {
    const {} = props
    
    return (
        <StyledFooter>
            <StyledFooterShoulder />
            <StyledFooterItem>
                _mail
            </StyledFooterItem>
            <StyledFooterItem>
                _instagram
            </StyledFooterItem>
            <StyledFooterItem>
                _resume
            </StyledFooterItem>
            <StyledFooterShoulder />
        </StyledFooter>
    )
}

export default Footer