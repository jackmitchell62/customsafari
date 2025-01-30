//detect if page is google

if ((window.location.host).includes('google.com')||(window.location.host).includes('google.co.uk')){
    //Homepage 
    //Get Rid of Images Button
    try{
        document.getElementById('SBmmZd').innerHTML = ''
    }catch{}

    //Get rid of search trending
    try{
        document.getElementsByClassName('bLgP0e')[0].innerHTML = ''
    }catch{}

    //Get Rid of footer
    try{
        for (let i = 0; i < document.getElementsByClassName('fbar').length+1; i++) {
            document.getElementsByClassName('fbar')[i].style.display = 'none'
        }
    }catch{}

    //Get rid of Bell Icon
    try{
        document.getElementsByClassName('j4hoVe')[0].innerHTML = "" 
    }catch{}

    //Remove Apps and Profile Picture
    try{
        document.getElementsByTagName('header')[0].style.display = 'none'
    }catch{}

    //Get Rid of Mic Button
    try{
        document.getElementsByClassName('FJoqsb')[0].innerHTML = ""
    }catch{}

    //Get Rid of Google Lens Button
    try{
        document.getElementsByClassName('v9gBvd')[0].innerHTML = ""
    }catch{}

    //Get Rid of Trending searches
    try{
        document.getElementsByClassName('aajZCb')[0].style.display = 'none'
    }catch{}
    //Clear Cookies Message
    try{
        L2AGLb.click()
    }catch{}
    //Cool Background Image
    document.getElementsByTagName('body')[0].style.backgroundImage = 'url("https://github.com/jackmitchell62/customsafari/blob/main/backgroundimg.jpg?raw=true")'
    document.getElementsByTagName('body')[0].style.backgroundSize = 'cover'

    //Search Query

    if ((window.location.host).includes('search?q=')){

        var delayInMilliseconds = 1000; //1 second

        setTimeout(function() {
            try{
                document.getElementsByClassName('commercial-unit-mobile-top')[0].style.display = "none"
            }catch{}
            
            //Block Promoted Sites
            try{
                document.querySelector('[aria-label="Ads"]').style.display = 'none'
            }catch{}
            
            //Get rid of 'people also searched for'
            try{
                for (let i = 0; i < document.getElementsByClassName('Wt5Tfe').length+1; i++) {
                    document.getElementsByClassName('Wt5Tfe')[i].style.display = 'none'
                }
            }catch{}
            L2AGLb.click()
        }, 500);
    }

}