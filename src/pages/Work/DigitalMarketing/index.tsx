import * as React from 'react'
import {
    Banner,
    Content,
    Paragraph,
    Subtitle,
    Title,
} from '../../../components';
import {
    StyledWorkSection,
} from '../index.style';
import {
    StyledDigitalMarketing
} from './index.style';
export interface IProps {
    
}

const color = '#CADFF2';

const DigitalMarketing: React.FC<IProps> = (props: IProps) => {
    const {} = props;
    
    return (
        <>
            <Banner
                color={color}
                title={'Digital Marketing'}
                content={'Freelance and Contract work case studies'}
            />
            <Content>
                <StyledDigitalMarketing>
                    
                </StyledDigitalMarketing>
            </Content>
        </>
    )
}

export default DigitalMarketing