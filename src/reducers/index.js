import { combineReducers } from 'redux';

import storiesReducer from './stories.reducer';
// import pagePreviewReducer from './page-preview.reducer';

export default combineReducers({
    stories: storiesReducer,
    // pagePreviews: pagePreviewReducer
})
