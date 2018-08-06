import {  PAGE_SUMMARY_URL } from "./constants";

export const getPageSummary = (url) => {
    return fetch(`${PAGE_SUMMARY_URL}?url=${url}`).then(res => res.json());
}

export const getPageSummaryById = (id) => {
    return fetch(`${PAGE_SUMMARY_URL}/${id}`).then(res => res.json());
}