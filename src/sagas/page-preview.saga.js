import { takeEvery, select } from 'redux-saga/effects';

import { pagePreviews } from '../components/news-feed/actions';


export function* watchPagePreviewRequest() {
    yield takeEvery(pagePreviews.request, fetchPagePreviews)
}

function* fetchPagePreviews(action) {
    const socket = yield select(state => state.stories.socket);

    const payload = JSON.stringify(action.payload.stories);
    yield socket.send(payload);
}