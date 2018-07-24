import React from 'react';

import NewsFeed from './news-feed.component';
import { getStories, getTopStoriesIds } from '../../services/api/news.service';
import { attachWithThrottle } from '../../utils/percentage-scrolled';

const STORIES_TO_FETCH_NUMBER = 10;


class NewsFeedContainer extends React.Component {
    constructor() {
        super();

        this.state = { 
            stories: [],
            storyIds: [],
        };
    }

    async componentDidMount() {
        this.pushStory = this.pushStory.bind(this);

        attachWithThrottle(async percentageScrolled  => {
            if (percentageScrolled >= 75) {
                this.getNextStories();
            }
        }, 25);

        const storyIds = await getTopStoriesIds();
        await this.setState({ storyIds });
        this.getNextStories();
    }

    async getNextStories() {
        const { storyIds } = this.state;
        const storiesToFetch = storyIds.splice(0, STORIES_TO_FETCH_NUMBER);
        this.setState({ storyIds });

        const stories = await getStories(storiesToFetch);
        stories.forEach(story => story.then(this.pushStory));
    }

    pushStory(story) {
        const stories  = [...this.state.stories];
        stories.push(story);

        this.setState({ stories });
    }

    render() {
        const { stories } = this.state;
        return <NewsFeed stories={stories}></NewsFeed>
    }
}

export default NewsFeedContainer;