import { fork, all, takeEvery } from 'redux-saga/effects';

import * as storiesWatchers from './stories.saga';
import * as pagePreviewWatchers from './page-preview.saga';


function getWatchers(objects) {
    return objects.map(Object.values).reduce((allFunctions, currentFunctions) => allFunctions.concat(currentFunctions), []);
}

export default function* () {
    const allWatchers = getWatchers([
        storiesWatchers,
        pagePreviewWatchers
    ]);

    allWatchers.push(function*() { yield takeEvery('*', console.log)});

    const forks = allWatchers.map(fork);

    yield all(forks);
}