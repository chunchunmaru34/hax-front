import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// import Story from '../src/components/story/story.component';
import StoryFooter from '../src/components/story/footer/footer.component';

const mockStoryData = {
    by: 'gadders',
    decdendants: 16,
    _id: 17573421,
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

// storiesOf('Story', module)
//     .add('with good data', () => (
//         <Story data={mockStoryData}></Story>
//     ))
//     .add('with no title', () => (
//         <Story data={{...mockStoryData, title: ''}}></Story>
//     ))
//     .add('with big rating', () => (
//         <Story data={{...mockStoryData, rating: 999}}></Story>
//     ))
//     

storiesOf('StoryFooter', module)
    .add('with timediff: minutes', () => {
        const date = new Date();
        date.setMinutes(date.getMinutes() - 3);
        const unixDate = Math.round(date / 1000);
        return <StoryFooter commentsCount={mockStoryData.kids.length}
            score={mockStoryData.score}
            id={mockStoryData._id}
            date={unixDate}
        />
    })
    .add('with timediff: hours', () => {
        const date = new Date();
        date.setHours(date.getHours() - 3);
        const unixDate = date / 1000;
        return <StoryFooter commentsCount={mockStoryData.kids.length}
            score={mockStoryData.score}
            id={mockStoryData._id}
            date={unixDate}
        />
    })
    .add('with timediff: days', () => {
        const date = new Date();
        date.setDate(date.getDate() - 3);
        const unixDate = date / 1000;
        return <StoryFooter commentsCount={mockStoryData.kids.length}
            score={mockStoryData.score}
            id={mockStoryData._id}
            date={unixDate}
        />
    })
    .add('with timediff: weeks', () => {
        const date = new Date();
        date.setDate(date.getDate() - 23);
        const unixDate = date / 1000;
        return <StoryFooter commentsCount={mockStoryData.kids.length}
            score={mockStoryData.score}
            id={mockStoryData._id}
            date={unixDate}
        />
    })
    .add('with timediff: months', () => {
        const date = new Date();
        date.setDate(date.getDate() - 3);
        date.setMonth(date.getMonth() - 3);
        const unixDate = date / 1000;
        return <StoryFooter commentsCount={mockStoryData.kids.length}
            score={mockStoryData.score}
            id={mockStoryData._id}
            date={unixDate}
        />
    })
    .add('with timediff: years', () => {
        const date = new Date();
        date.setFullYear(date.getFullYear() - 3);
        const unixDate = date / 1000;
        return <StoryFooter commentsCount={mockStoryData.kids.length}
            score={mockStoryData.score}
            id={mockStoryData._id}
            date={unixDate}
        />
    })