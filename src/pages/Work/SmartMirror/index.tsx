import * as React from 'react'
import {
    Banner,
    Content,
    Paragraph,
    Title,
    Subtitle,
} from '../../../components';
import {
    StyledWorkSection,
} from '../index.style';
import {
    StyledSmartMirror,
    StyledRow,
    StyledImg,
} from './index.style';

export interface IProps {
    
}

const color = '#EFB877';

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
                <StyledWorkSection>
                        <Title color={color} italic={true}>
                            Problem Space
                        </Title>
                        <Paragraph>
                            How can we simplify morning routines especially when running behind?
                        </Paragraph>
                    </StyledWorkSection>
                    <StyledWorkSection>
                        <Title color={color} italic={true}>
                            Solution
                        </Title>
                        <Paragraph>
                            Mornings are flustering enough especially when you are in a rush, the Smart Mirror is a tool to help organise your morning so you can have a clear head to start the day.  
                        </Paragraph>
                        <Paragraph style={{ marginLeft: 20 }}>
                            <Subtitle italic={true}>
                                Goals and Wishes of the User
                            </Subtitle>
                        </Paragraph>
                        <Paragraph>
                            <ul>
                                <li>Customise their morning routine</li>
                                <li>One location for all the information they need to start the day</li>
                                <li>Ease morning routines, especially when in a rush</li>
                            </ul>
                        </Paragraph>
                    </StyledWorkSection>
                    <StyledWorkSection>
                        <Title color={color} italic={true}>
                            Design Phase
                        </Title>
                        <StyledRow>
                            <Paragraph>
                                <Subtitle italic={true}>
                                    Concept Idea
                                </Subtitle>
                                <ul>
                                    <li>Bluetooth and hands-free connection</li>
                                    <li>Anti-fog</li>
                                    <li>Wi-fi capabilities</li>
                                    <li>Touch screen for control</li>
                                    <li>Sync calendar, email, weather, other apps</li>
                                    <li>Speaker connections for voice assistant (Siri or Google)</li>
                                    <li>Siri or Google integration</li>
                                    <li>Similar to “OK Google, start my day” feature but with display</li>
                                    <li>Ex. when getting ready (brushing teeth, fixing hair, etc.)</li>
                                    <li>Like JARVIS in Iron Man</li>
                                </ul>
                            </Paragraph>
                            <Paragraph>
                                <Subtitle italic={true}>
                                    "How might we..."
                                </Subtitle>
                                <ul>
                                    <li>Improve morning routines</li>
                                    <li>Simplify morning routines</li>
                                    <li>Sync all necessary information for the user in one accessible place</li>
                                    <li>Customise people's morning routines</li>
                                    <li>Coordinate tasks and information of the day for the user</li>
                                </ul>
                            </Paragraph>
                        </StyledRow>
                        <Paragraph>
                            Main connection capabilities are through the phone app which controls access to email, calendar, weather, health info, etc. to customise experience for each user based on what information they require in the morning 
                        </Paragraph>
                    </StyledWorkSection>
                    <StyledWorkSection>
                        <Title
                            color={color}
                            italic={true}
                        >
                            Research
                        </Title>
                        <Paragraph>
                            Affinity Diagram to understand what mindset target user would be in when using the Smart Mirror
                        </Paragraph>
                        <div style={{textAlign:'center'}}>
                            <StyledImg
                                src={'/images/smart_mirror_research.png'}
                                alt={'Smart Mirror Research'}
                            />
                        </div>
                    </StyledWorkSection>
                    <StyledWorkSection>
                        <Title color={color} italic={true}>
                            User Scenario Testing
                        </Title>
                        <Paragraph>
                            Mid-fi prototype screens of app connecting to Smart Mirror to customise experience.
                        </Paragraph>
                        <Paragraph>
                            <strong>User Task:</strong>&nbsp;signing into app, pairing Smart Mirror, and configuring to customise their display
                        </Paragraph>
                        <div style={{textAlign:'center'}}>
                            <StyledImg
                                src={'/images/smart_mirror_user_scenario.png'}
                                alt={'Smart Mirror User Scenario Testing'}
                            />
                        </div>
                        <Subtitle italic={true}>
                            User Testing Notes
                        </Subtitle>
                        <ul>
                            <li>User is able to create account and sign in easily (Screen 1)</li>
                            <ul>
                                <li>"Simple log in information and steps"</li>
                            </ul>
                            <li>Pair Smart Mirror to phone, assumed that SM is set up and plugged in, pop up screen saying display ready to pair (Screen 2)</li>
                            <ul>
                                <li>"Easy to pair, similar to other Bluetooth devices"</li>
                            </ul>
                            <li>Connect apps already existing on phone to display on SM (Screen 3)</li>
                            <ul>
                                <li>Able to choose which apps I want to display</li>
                                <li>"Simple enough to choose from the list of existing apps I would have on my phone that I want for my daily overview on SM"</li>
                            </ul>
                            <li>Customise display (Screen 4 & 5)</li>
                            <ul>
                                <li>"I assume I can just press and drag to customise the display"</li>
                                <li>User was able to figure out how to move around apps that they chose to install</li>
                                <li>User was able to customise size of widgets based on what information they wanted largest on screen of SM</li>
                                <li>Looks like the Apple control centre that I am already familiar with, to customise</li>
                            </ul>
                        </ul>
                        <Paragraph>
                            *Testing complete and successful*
                        </Paragraph>
                        <Subtitle italic={true}>Post User Testing Notes</Subtitle>
                        <ul>
                            <li>Misunderstood the size of mirror and worried that there was no space for reflection</li>
                            <ul>
                                <li>Had to explain display from App to Smart Mirror</li>
                            </ul>
                        </ul>
                    </StyledWorkSection>
                </StyledSmartMirror>
            </Content>
        </>
    )
}

export default SmartMirror