import React from 'react';
import PropTypes from 'prop-types';


const PageSummary = ({ html }) => (
    <div dangerouslySetInnerHTML={{__html: html}}></div>
)

PageSummary.propTypes = {
    html: PropTypes.string,
}

export default PageSummary;