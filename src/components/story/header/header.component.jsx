import React from 'react';
import PropTypes from 'prop-types';

import './header.styles.css';

const StoryHeader = ({ text }) => (
    <div>
        <h3 className='story-header'>{text}</h3>
    </div>
)

StoryHeader.propTypes = {
    text: PropTypes.string
}

export default  StoryHeader;