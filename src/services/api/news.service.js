import { stringify } from 'qs';

const API = 'http://localhost:5555';
const TOP_STORIES_PATH = `${API}/topstories`;

// export const getStory = id => {
//     return fetch(`${ITEM_PATH}/${id}.json`).then(res => res.json());
// }

export const getTopStories = (params) => {
    const queryString = stringify(params);
    return fetch(`${TOP_STORIES_PATH}?${queryString}`).then(res => res.json());
}
