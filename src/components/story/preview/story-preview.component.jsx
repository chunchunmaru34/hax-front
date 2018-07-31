import React from 'react';
import PropTypes from 'prop-types';

import { clipUrl } from '../../../utils/clip-url';

import './story-preview.styles.css';

const StoryPreview = ({ preview, url }) => (
    <div className="story-preview-container">
        <div className="story-preview-image">
            <img src={`data:image/jpeg;base64, ${preview.image}`} alt="Preview"/>
        </div>
        <div className="story-preview-content">
            {/* { preview.title && <div>{preview.title}</div>} */}
            { preview.description && <div>{preview.description}</div>}
            <div className='story-link'><a href={url}>{clipUrl(url)}</a></div>
        </div>
    </div>
);

StoryPreview.propTypes = {
    preview: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string.isRequired,
    }),
    url: PropTypes.string.isRequired
}

export default StoryPreview;