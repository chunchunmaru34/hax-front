import { takeEvery, call, put } from 'redux-saga/effects';
import { stories, pagePreviews } from '../components/news-feed/actions';
import { getTopStories } from '../services/api/news.service';

export function* watchStoriesRequest() {
    yield takeEvery(stories.request, fetchStories);
}

function* fetchStories(action) {
    const res = yield call(getTopStories, action.payload);
    yield put(stories.response(res));
    const pagePreviewRequest = res.map(story => ({ _id: story._id, url: story.url }));
    yield put(pagePreviews.request({ stories: pagePreviewRequest }));
}