import { stringify } from 'qs';
import { TOP_STORIES_URL } from './constants';


// export const getStory = id => {
//     return fetch(`${ITEM_PATH}/${id}.json`).then(res => res.json());
// }

export const getTopStories = ({ page, pageSize }) => {
    const queryString = stringify({ page, pageSize });
    return fetch(`${TOP_STORIES_URL}?${queryString}`).then(res => res.json());
}
