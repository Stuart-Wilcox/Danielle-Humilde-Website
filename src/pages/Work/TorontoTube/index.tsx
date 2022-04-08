import * as React from 'react'
import {
    Banner,
    Content,
} from '../../../components';
import {
    StyledTorontoTube,
} from './index.style';

export interface IProps {
    
}

const TorontoTube: React.FC<IProps> = (props: IProps) => {
    const {} = props
    
    return (
        <>
            <Banner
                color={'#DECAF2'}
                title={'Toronto Tube'}
                content={'An app design concept for Presto card users to adapt contactless payment similar to Apple Pay to enhance app capabilities*'}
                subContent={'*This research was conducted in January 2021'}
            />
            <Content>
                <StyledTorontoTube>
                    TorontoTube
                </StyledTorontoTube>
            </Content>
        </>
    )
}

export default TorontoTube