import * as React from 'react'
import {
    Link,
} from 'react-router-dom';
import {
    StyledCard,
    StyledCardImageShoulder,
    StyledCardImageContainer,
    StyledCardImage,
    StyledCardContent,
} from './index.style';

export interface IProps {
    name: string;
    location: string;
    color: string;
    image: string;
}

const Card: React.FC<IProps> = (props: IProps) => {
    const {
        name,
        location,
        color,
        image,
    } = props
    
    return (
        <div>
            <Link to={location}>
                <StyledCard
                    color={color}
                >
                    <StyledCardImageContainer>
                        <StyledCardImage
                            src={image}
                            alt={name}
                        />
                    </StyledCardImageContainer>
                    <StyledCardContent className={'card-content'}>
                        <div style={{flex:1}} />
                        {name}
                        <div style={{flex:1}} />
                    </StyledCardContent>
                </StyledCard>
            </Link>
        </div>
    )
}

export default Card