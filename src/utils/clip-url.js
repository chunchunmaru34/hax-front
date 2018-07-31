export function clipUrl(url) {
    if (!url) return "";
    url = url.slice(url.indexOf('://') + 3);
    const firstDotIndex = url.indexOf('.');
    const firstSlashIndex = url.indexOf('/', firstDotIndex);
    return url.slice(0, firstSlashIndex);
}