if (process.browser) {
    var h = document.documentElement, b = document.body, st = 'scrollTop', sh = 'scrollHeight';
    window.onload = () => {
        window.onscroll = () => {
            var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
            if(percent > 20) {
                document.querySelector('#to-top').setAttribute('data-down', 'true');
            } else { 
                document.querySelector('#to-top').setAttribute('data-down', 'false');
            }
        };
        document.querySelector('#to-top').onclick = () => {
            window.scrollTo(0,0);
        }; 
    };
}