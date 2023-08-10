document.addEventListener('DOMContentLoaded', () => {
  RedirectWithLink();
});

const RedirectWithLink = () => {
    const urlParams = new URLSearchParams(window.location.search);
    var redirection = urlParams.get('redirect');
    
    if (redirection == null){
        var linkToAR = "https://localhost:8000/public/index.html?redirect=";
        const path = window.location.href;
        console.log(path);
        const index = path.indexOf('/');
        var pathAddition = path.substring(index + 1);
        console.log(pathAddition);
        pathAddition = pathAddition.slice(0, -1);
        console.log(pathAddition);
        if (index !== -1) {
            linkToAR += pathAddition;
            
            //Check if board game link
            if (pathAddition.includes("qrcodespel")){
                linkToAR += "&boardgame=true";
            }
            
            //window.location.href = linkToAR;
        }
        console.error('Couldn\'t get path from URL');
    }
    else{
        //window.location.href = window.location.search;
        return;
    }
}
