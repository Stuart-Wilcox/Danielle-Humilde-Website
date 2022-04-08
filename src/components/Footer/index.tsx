import * as React from 'react'
import {
    StyledFooter,
    StyledFooterShoulder,
    StyledFooterItem,
    StyledFooterGroup,
    StyledFooterIcon,
} from './index.style';

export interface IProps {
    
}

const Footer: React.FC<IProps> = (props: IProps) => {
    const {} = props;

    const handleResumeClick = () => {
        // TODO resume download
        console.log('Resume download');
    };
    
    return (
        <StyledFooter>
            <StyledFooterShoulder />
            <StyledFooterGroup>
                <StyledFooterShoulder />
                <StyledFooterItem>
                    <a href={'mailto:d.humilde@outlook.com'}>
                        <StyledFooterIcon
                            src={'/images/email.png'}
                            alt={'Email'}
                        />
                    </a>
                </StyledFooterItem>
                <StyledFooterItem>
                    <a href={'https://www.linkedin.com/in/danielle-humilde/'} target={'_blank'}>
                        <StyledFooterIcon
                            src={'/images/linkedin.png'}
                            alt={'LinkedIn'}
                        />
                    </a>
                </StyledFooterItem>
                <StyledFooterItem>
                    <StyledFooterIcon
                        style={{ cursor: 'pointer' }}
                        src={'/images/resume.png'}
                        alt={'Resume'}
                        onClick={() => handleResumeClick()}
                    />
                </StyledFooterItem>
                <StyledFooterShoulder />
            </StyledFooterGroup>
            <StyledFooterShoulder />
        </StyledFooter>
    )
}

export default Footer