import React from 'react';

import StoryHeader from './header/header.component';
import StoryFooter from './footer/footer.component';
import { storyType } from '../../constants/prop-types/story';

import './story.styles.css';


const Story = ({ data }) => (
    <div className='story-card'>
        <StoryHeader text={data.title}/>
        <div className='story-content'>
            <div className='story-link'>
                <a href={data.url} target="_blank">{data.url}</a>
            </div>
            <StoryFooter
                id={data.id} 
                score={data.score} 
                date={data.time}
                commentsCount={data.descendants}
            />
        </div>
    </div>
)

Story.propTypes = {
    data: storyType
}

export default Story;