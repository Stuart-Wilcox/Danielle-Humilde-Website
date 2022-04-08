import * as React from 'react'
import {
    Banner,
    Content,
} from '../../../components';
import {
    StyledDigitalMarketing,
} from './index.style';
export interface IProps {
    
}

const DigitalMarketing: React.FC<IProps> = (props: IProps) => {
    const {} = props
    
    return (
        <>
            <Banner
                color={'#CADFF2'}
                title={'Digital Marketing'}
                content={'Freelance and Contract work case studies'}
            />
            <Content>
                <StyledDigitalMarketing>
                    Digital Marketing
                </StyledDigitalMarketing>
            </Content>
        </>
    )
}

export default DigitalMarketing