import React from 'react';
import PropTypes from 'prop-types';

import Story from '../story/story.component';
import SearchBar from '../searchbar/searchbar.component';
import { storyType } from '../../constants/prop-types/story';
import './news-feed.styles.css';

const NewsFeed = ({ stories }) => (
    <div className='feed'>
        <SearchBar/>
        <div className='stories-container'>
            {stories.map(story => <Story key={story._id} data={story}/>)}
        </div>
    </div>
    
)


NewsFeed.propTypes = {
    stories: PropTypes.arrayOf(storyType)
}

export default NewsFeed;