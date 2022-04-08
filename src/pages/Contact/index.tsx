import * as React from 'react'
import {
    Content,
} from '../../components';
import {
    StyledContact,
    StyledContactForm,
    StyledContactFormInput,
    StyledContactFormSendButton,
    StyledContactFormTextarea,
    StyledContactFormTitle,
    StyledContactText,
} from './index.style';


export interface IProps {
    
}

const Contact: React.FC<IProps> = (props: IProps) => {
    const {} = props;

    const [message, setMessage] = React.useState<string>('');
    const [name, setName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');

    const handleSendEmailClick = () => {
        // TODO send email
        console.log(`Send email`, message, name, email);
    };
    
    return (
        <Content>
            <StyledContact>
                <StyledContactText>
                    If you like some of my work and would like to discuss a freelance/contract opportunity, mentorship, or even just to chat, please feel free to send me a message and I will get back to you as soon as I can! 
                </StyledContactText>
                <StyledContactForm>
                    <StyledContactFormTitle>
                        Hi Danielle,
                    </StyledContactFormTitle>
                    <StyledContactFormTextarea
                        rows={4}
                        placeholder={'Write your message here...'}
                        value={message}
                        onChange={event=>setMessage(event.target.value)}
                    ></StyledContactFormTextarea>
                    <StyledContactFormTitle>
                        Best,
                    </StyledContactFormTitle>
                    <StyledContactFormInput
                        placeholder={'Your name'}
                        value={name}
                        onChange={event=>setName(event.target.value)}
                    ></StyledContactFormInput>
                    <StyledContactFormInput
                        type={'email'}
                        placeholder={'Your email'}
                        value={email}
                        onChange={event=>setEmail(event.target.value)}
                    ></StyledContactFormInput>
                </StyledContactForm>
                <StyledContactFormSendButton
                    onClick={() => handleSendEmailClick()}
                >
                    Send
                </StyledContactFormSendButton>
            </StyledContact>
        </Content>
    )
}

export default Contact