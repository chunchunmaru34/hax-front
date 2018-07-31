import React from 'react';

import NewsFeed from './news-feed.component';
import { getTopStories } from '../../services/api/news.service';
import { attachWithThrottle } from '../../utils/percentage-scrolled';


const PAGE_PREVIEWS_SOCKET = 'ws://localhost:5555/pagePreviews';

class NewsFeedContainer extends React.Component {
    constructor() {
        super();

        this.state = { 
            stories: [],
            page: 0,
            isStoriesLoading: false,
            pagePreviewsSocket: null,
        };
    }

    componentDidMount() {
        const pagePreviewsSocket = new WebSocket(PAGE_PREVIEWS_SOCKET);
        pagePreviewsSocket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const stories = [...this.state.stories];
            const index = stories.findIndex(story => story._id === data._id);
            stories[index] = { ...stories[index], preview: data.preview };
            this.setState({ stories });
        }; 
        this.setState({ pagePreviewsSocket });

        attachWithThrottle(async percentageScrolled  => {
            if (percentageScrolled >= 75 && !this.state.isStoriesLoading) {
                this.getNextStories();
            }
        }, 25);

        this.getNextStories();  
    }

    async getNextStories() {
        const { page, stories } = this.state;

        let fetchedStories;
        try {
            this.setState({ isStoriesLoading: true });

            fetchedStories = await getTopStories({ page: page + 1, pageSize: 20 });
            this.setState({ 
                stories: [...stories, ...fetchedStories],
                page: page + 1,
                isStoriesLoading: false
            });

            const previewInfo = fetchedStories.map(story => ({ url: story.url, _id: story._id }));
            this.state.pagePreviewsSocket.send(JSON.stringify(previewInfo));
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { stories } = this.state;
        return <NewsFeed stories={stories}></NewsFeed>
    }
}

export default NewsFeedContainer;