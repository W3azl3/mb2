function locationupdaten() {
    navigator.geolocation.getCurrentPosition(
        function(pos) {
            let card = document.getElementById("locationcard");
            card.innerText = "lat = " + pos.coords.latitude + 
                         " long = " + pos.coords.longitude;
        }
        , 
        function(err) {
            alert("Unable to retrieve position: " + err)
        }
    );
}

function bodyGeladen(){
    if(window.usingCordova){
        //Native App
        console.log('Native Anwendung');
    }else{
        //Browser
        console.log('Browseranwendung');
        initApp();
    }
}
function initApp(){
        console.log("Starting framework7 app...")
        var app = new Framework7({
            root: '#app',
            name: 'My App',
            id: 'com.myapp.test',
            panel: {
                swipe: 'left',
            }
        });
    }
    

document.addEventListener('deviceready', initApp, false);