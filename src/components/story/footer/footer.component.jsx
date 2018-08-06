import React from 'react';
import PropTypes from 'prop-types';

import { convertFromUnixTime, timeDifference } from '../../../utils/time';
import Score from '../score/score.component';
import './footer.styles.css';


const StoryFooter = ({ score, date, commentsCount, id }) => (
    <div className='story-footer'>
        <Score score={score}/>
        <div className='comments-link'>
            <a href={`https://news.ycombinator.com/item?id=${id}`} target='_blank'>
                {`${commentsCount} comments`}
            </a>
        </div>
        <div>
            <span role='img' aria-label='story creation time'>🕒 </span>
            <span>{timeDifference(convertFromUnixTime(date), new Date())}</span>
        </div>
    </div>
)

StoryFooter.propTypes = {
    score: PropTypes.number,
    date: PropTypes.number,
    commentsCount: PropTypes.number,
    id: PropTypes.number
}

export default StoryFooter;