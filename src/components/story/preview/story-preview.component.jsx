import React from 'react';
import PropTypes from 'prop-types';

import { storyPreviewType } from '../../../constants/prop-types/story';
import { clipUrl } from '../../../utils/clip-url';

import './story-preview.styles.css';


const StoryPreview = ({ preview, url }) => (
    <div className="story-preview-container">
        <div className="story-preview-image">
            { preview.image.type === 'base64' 
                ? <img src={`data:image/jpeg;base64, ${preview.image.src}`} alt="Preview"/>
                : <img src={preview.image.src} alt="Preview"/>
            }
        </div>
        <div className="story-preview-content">
            {/* { preview.title && <div>{preview.title}</div>} */}
            { preview.description && <div>{preview.description}</div>}
            <div className='story-link'><a href={url} target="__blank">{clipUrl(url)}</a></div>
        </div>
    </div>
);


StoryPreview.propTypes = {
    preview: storyPreviewType,
    url: PropTypes.string.isRequired
}

export default StoryPreview;