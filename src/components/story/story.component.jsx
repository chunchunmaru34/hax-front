import React from 'react';

import StoryHeader from './header/header.component';
import StoryFooter from './footer/footer.component';
import StoryPreview from './preview/story-preview.component';
import SummaryButton from './summary/summary-button.component';
import { storyType } from '../../constants/prop-types/story';
import { clipUrl } from '../../utils/clip-url';

import './story.styles.css';


const Story = ({ data }) => (
    <div className='story-card'>
        <StoryHeader text={data.title}/>
        {data.preview 
            ? <StoryPreview preview={data.preview} url={data.url}/>
            : (
                <div className='story-link'>
                    <a href={data.url} target="_blank">{clipUrl(data.url)}</a>
                </div>
            )
        }
        <div>
            <SummaryButton id={data._id}/>
            <StoryFooter
                id={data._id} 
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