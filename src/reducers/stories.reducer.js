import { handleActions } from 'redux-actions';

import { stories, pagePreviews } from '../components/news-feed/actions';

const defaultState = {
    stories: [],
    isLoading: false,
    error: null,
    socket: null
}

const storiesReducer = handleActions({
    [stories.request]: (state, action) => ({ ...state, isLoading: true }),

    [stories.response]: (state, action) => ({ 
        ...state,
        isLoading: false,
        stories: [...state.stories, ...action.payload.stories] 
    }),

    [stories.error]: (state, action) => ({ ...state, isLoading: false, error: action.payload.error }),
    
    [pagePreviews.socket.init]: (state, action) => ({ ...state, socket: action.payload.socket }),
    [pagePreviews.socket.close]: (state, action) => {
        state.socket.close();
        return { ...state, socket: null };
    },

    [pagePreviews.request]: (state, action) => state,

    [pagePreviews.response]: (state, action) => {
        const data = JSON.parse(action.payload.data);
        const stories = [...state.stories];
        const index = stories.findIndex(story => story._id === data._id);
        stories[index] = { ...stories[index], preview: data.preview };

        return { ...state, stories };
    }
}, defaultState);

export default storiesReducer;