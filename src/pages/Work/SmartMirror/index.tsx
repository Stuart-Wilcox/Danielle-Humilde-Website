import * as React from 'react'
import {
    Banner,
    Content,
} from '../../../components';
import {
    StyledSmartMirror,
} from './index.style';

export interface IProps {
    
}

const SmartMirror: React.FC<IProps> = (props: IProps) => {
    const {} = props
    
    return (
        <>
            <Banner
                color={'#EFB877'}
                title={'Smart Mirror'}
                content={'Made to simplify morning routines and ease into the day'}
                subContent={'*This research was conducted in March 2021'}
            />
            <Content>
                <StyledSmartMirror>
                    Smart Mirror
                </StyledSmartMirror>
            </Content>
        </>
    )
}

export default SmartMirror