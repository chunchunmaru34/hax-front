import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { storyType } from '../../constants/prop-types/story';
import { stories, pagePreviews } from './actions';
import NewsFeed from './news-feed.component';
import { attachWithThrottle } from '../../utils/percentage-scrolled';


const PAGE_PREVIEWS_SOCKET = 'ws://localhost:5555/pagePreviews';
const PAGE_SIZE = 20;

class NewsFeedContainer extends React.Component {
    static propTypes = {
        stories: PropTypes.arrayOf(storyType),
        isStoriesLoading: PropTypes.bool,
        initSocket: PropTypes.func,
        requestStories: PropTypes.func,
        receivePagePreview: PropTypes.func,
    }

    constructor() {
        super();

        this.state = { 
            page: 0,
        };
    }

    componentDidMount() {
        const { receivePagePreview, initSocket } = this.props;
        const pagePreviewsSocket = new WebSocket(PAGE_PREVIEWS_SOCKET);
        pagePreviewsSocket.onmessage = receivePagePreview;
        initSocket(pagePreviewsSocket);

        attachWithThrottle(async percentageScrolled  => {
            if (percentageScrolled >= 75 && !this.props.isStoriesLoading) {
                this.getNextStories();
            }
        }, 25);

        if (!this.props.stories.length) {
            this.getNextStories(); 
        } 
    }

    async getNextStories() {
        const { page } = this.state;
        const { requestStories } = this.props;

        requestStories({ page: page + 1, pageSize: PAGE_SIZE });
        this.setState({ page: page + 1});
    }

    render() {
        const { stories } = this.props;
        return stories && <NewsFeed stories={stories}></NewsFeed>
    }
}

const mapStateToProps = (state) => ({
    stories: state.stories.stories,
    isStoriesLoading: state.stories.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    requestStories: ({ page, pageSize }) => dispatch(stories.request({ page, pageSize })),
    initSocket: (socket) => dispatch(pagePreviews.socket.init(socket)),
    receivePagePreview: (event) => dispatch(pagePreviews.response({data: event.data }))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedContainer);