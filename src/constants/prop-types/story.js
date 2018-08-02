import PropTypes from 'prop-types';

export const storyType = PropTypes.shape({
    by: PropTypes.string,
    _id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    kids: PropTypes.arrayOf(PropTypes.number),
    score: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    type: PropTypes.string,
    url: PropTypes.string,
    preview: storyPreviewType
})

export const storyPreviewType = PropTypes.shape({
    _id: PropTypes.number.isRequired,
    tittle: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape({
        type: PropTypes.string,
        src: PropTypes.string
    })
})