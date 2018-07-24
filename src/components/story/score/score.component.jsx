import React from 'react';
import PropTypes from 'prop-types';

import './score.styles.css';


const Score = ({ score }) => (
    <div className='score'>
        <div>◀</div>
        <span>{score}</span>
    </div>
)

Score.propTypes = {
    score: PropTypes.number
}

export default Score;