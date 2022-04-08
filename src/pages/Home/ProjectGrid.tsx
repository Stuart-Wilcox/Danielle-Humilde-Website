import * as React from 'react';
import {
    Card,
} from '../../components';
import {
    StyledGrid,
    StyledGridRow,
} from './index.style';

type ProjectData = {
    name: string;
    location: string;
    color: string;
    image: string;
};

const projectGridData: ProjectData[] = [
    {
        name: 'Toronto Tube',
        location: '/work/toronto-tube',
        color: '#DECAF2',
        image: '/images/toronto_tube_preview.png',
    },
    {
        name: 'Subtle-T',
        location: '/work/subtle-t',
        color: '#F97781',
        image: '/images/subtle_t_preview.png',
    },
    {
        name: 'Smart Mirror',
        location: '/work/smart-mirror',
        color: '#EFB877',
        image: '/images/smart_mirror_preview.png',
    },
    {
        name: 'Digital Marketing',
        location: '/work/digital-marketing',
        color: '#CADFF2',
        image: '/images/digital_marketing_preview.png',
    }
];

export interface IProps {
    
}

const ProjectGrid: React.FC<IProps> = (props: IProps) => {
    const {} = props;

    const cardsPerRow = 2; // TODO change this if mobile

    const cards: ProjectData[][] = React.useMemo(() => {
        return projectGridData.reduce((acc, curr) => {
            if (acc.length === 0) {
                acc.push([]);
            }

            if (acc[acc.length-1].length < cardsPerRow) {
                acc[acc.length-1].push(curr);
            }
            else {
                acc.push([curr]);
            }

            return acc;
        }, [] as ProjectData[][]);
    }, [cardsPerRow]);
    
    return (
        <StyledGrid>
            {
                cards.map((cardRow, index) => (
                    <StyledGridRow key={index}>
                        {
                            cardRow.map((cardData, index) => (
                                <>
                                    <Card
                                        key={cardData.name}
                                        name={cardData.name}
                                        location={cardData.location}
                                        color={cardData.color}
                                        image={cardData.image}
                                    />

                                    { 
                                        index !== cardRow.length -1 ?
                                            <div style={{ flex:1 }}/> 
                                        :
                                           <></>
                                    }
                                </>
                            ))
                        }
                    </StyledGridRow>
                ))
            }
        </StyledGrid>
    );
}

export default ProjectGrid