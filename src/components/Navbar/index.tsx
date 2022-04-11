import * as React from 'react'
import { downloadResume } from '../utils';
import { useIsMobile } from '../../hooks';
import MobileNavbar from './index.mobile';
import {
    StyledNavbar,
    StyledNavbarGroup,
    StyledNavbarItem,
} from './index.style';

export interface IProps {
    
}

const Navbar: React.FC<IProps> = (props: IProps) => {
    const {} = props;

    const isMobile = useIsMobile();

    const handleResumeClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // stop page from following url in anchor
        event.preventDefault();
        event.nativeEvent.preventDefault();

        downloadResume();
    };

    if (isMobile) {
        return (
            <MobileNavbar
                resumeClicked={handleResumeClick}
            />
        );
    }
    
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