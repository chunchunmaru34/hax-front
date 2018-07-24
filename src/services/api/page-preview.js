const API_KEY = '5b55abf42ef022461d182879b500c8bc5cf26c73db07b';
const API_URL = 'http://api.linkpreview.net';


export function getPagePreview(url) {
    return fetch(`${API_URL}?key=${API_KEY}&q=${url}`)
        .then(res => res.json())
    ;
}