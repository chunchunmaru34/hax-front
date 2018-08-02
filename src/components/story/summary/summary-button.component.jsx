import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import './summary-button.styles.css';


const STORIES_SUMMARY_URL = '/stories'

const SummaryButton = ({ id, history }) => (
    <div className='summary-button' onClick={() => history.push(`${STORIES_SUMMARY_URL}/${id}`)}>
        Read         
    </div>
)

SummaryButton.propTypes = {
    id: PropTypes.number,
    history: PropTypes.object
}

export default withRouter(SummaryButton);