import * as React from 'react'
import {
    StyledNavbar,
    StyledNavbarGroup,
    StyledNavbarItem,
} from './index.style';

export interface IProps {
    
}

const Navbar: React.FC<IProps> = (props: IProps) => {
    const {} = props

    const handleResumeClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // stop page from following url in anchor
        event.preventDefault();
        event.nativeEvent.preventDefault();

        // TODO download resume
        console.log('Download Resume');
    };
    
    return (
        <StyledNavbar>
            <StyledNavbarGroup>
                <StyledNavbarItem to={'/home'}>
                    Danielle Humilde
                </StyledNavbarItem>
            </StyledNavbarGroup>
            <div style={{flex:1}}/>
            <StyledNavbarGroup>
                <StyledNavbarItem to={'/work'}>
                    Work
                </StyledNavbarItem>
                <StyledNavbarItem to={'/about'}>
                    About
                </StyledNavbarItem>
                <StyledNavbarItem to={'contact'}>
                    Contact
                </StyledNavbarItem>
                <StyledNavbarItem
                    to={'/'}
                    onClick={event => handleResumeClick(event)}
                >
                    Resume
                </StyledNavbarItem>
            </StyledNavbarGroup>
        </StyledNavbar>
    )
}

export default Navbar