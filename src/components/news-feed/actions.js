import { createActions } from 'redux-actions';

export const { stories, pagePreviews } = createActions({
    STORIES: {
        REQUEST: ({ page, pageSize }) => ({ page, pageSize }) ,
        RESPONSE: (stories) => ({ stories }),
        ERROR: (error) => ({ error })
    },

    PAGE_PREVIEWS: {
        SOCKET: {
            INIT: (socket) => ({ socket }),
            CLOSE: undefined
        },
        REQUEST: ({ stories }) => ({ stories }),
        RESPONSE: ({ data }) => ({ data }),
        ERROR: ({ error }) => ({ error })
    },
});

