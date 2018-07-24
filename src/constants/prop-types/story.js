import PropTypes from 'prop-types';

export const storyType = PropTypes.shape({
    by: PropTypes.string,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    kids: PropTypes.arrayOf(PropTypes.number),
    score: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    type: PropTypes.string,
    url: PropTypes.string
})