export function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}

export function percentageScrolled(){
    var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
    var docheight = getDocHeight()
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var trackLength = docheight - winheight
    var pctScrolled = Math.floor(scrollTop/trackLength * 100);
    return pctScrolled;
}



export function attachWithThrottle(callback, throttleMs = 50) {
    let timer;

    window.addEventListener('scroll', () => {
        
        if (timer) {
            clearTimeout(timer);
            timer = setTimeout(() => timer = clearTimeout(timer), throttleMs);
            return;
        }
        timer = setTimeout(() => timer = clearTimeout(timer), throttleMs);
        
        const scrolled = percentageScrolled();
        callback(scrolled);
    })
    
} 