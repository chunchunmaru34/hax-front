import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Story from '../src/components/story/story.component';

const mockStoryData = {
    by: 'gadders',
    decdendants: 16,
    id: 17573421,
    kids: [
        177574754,
        17574244,
        17574055,
        17573488
    ],
    score: 42,
    time: 1532076388,
    title: "Egypt sarcophagus: Mystery black tomb opened in Alexandria",
    type: "story",
    url: 'https://www.bbc.co.uk/news/world-middle-east-44893804'
}

storiesOf('Story', module)
    .add('with good data', () => (
        <Story data={mockStoryData}></Story>
    ))
    .add('with no title', () => (
        <Story data={{...mockStoryData, title: ''}}></Story>
    ))
    .add('with big rating', () => (
        <Story data={{...mockStoryData, rating: 999}}></Story>
    ))