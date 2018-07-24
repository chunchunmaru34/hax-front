const API = 'https://hacker-news.firebaseio.com/v0';
const ITEM_PATH = `${API}/item`;
const TOP_STORIES_PATH = `${API}/topstories`;

export const getStory = id => {
    return fetch(`${ITEM_PATH}/${id}.json`).then(res => res.json());
}

export const getStories = (storyIds) => {
    const promises = [];

    storyIds.forEach(storyId => {
        promises.push(getStory(storyId));
    })

    return promises;
}

export const getTopStoriesIds = () => {
    return fetch(TOP_STORIES_PATH + '.json').then(res => res.json());
}