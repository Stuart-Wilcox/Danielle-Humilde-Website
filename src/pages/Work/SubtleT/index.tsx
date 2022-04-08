import * as React from 'react'
import {
    Banner,
    Content,
} from '../../../components';
import {
    StyledSubtleT,
} from './index.style';

export interface IProps {
    
}

const SubtleT: React.FC<IProps> = (props: IProps) => {
    const {} = props
    
    return (
        <>
            <Banner
                color={'#F97781'}
                title={'Subtle-T'}
                content={'An app made to help those who are experiencing domestic abuse and need access to resources they need to help them determine a course of action and a safety plan to leave their situation discreetly'}
                subContent={'*This research was conducted in January 2021'}
            />
            <Content>
                <StyledSubtleT>
                    SubtleT
                </StyledSubtleT>
            </Content>
        </>
    )
}

export default SubtleT