document.addEventListener('DOMContentLoaded',function(event){
var movietitles=["Avengers 1",
"Avengers age of ultron",
"Avengers Infinity War",
"Avengers Endgame",
"Black Panther"]


function TypeWriter(text,i,fnCallback){
    if(i<text.length){
        document.getElementById("Movies").innerHTML=text.substring(0,i+1)  
        setTimeout(function(){
            TypeWriter(text,i+1,fnCallback)
        },200);
    }
    else if (typeof fnCallback=='function'){
        setTimeout(fnCallback,1200);
    }
}
function starttextanimation(i){
 if (typeof movietitles[i] == undefined){
    setTimeout(function(){starttextanimation[0],20000});
}
if(i<movietitles.length){
    TypeWriter(movietitles[i],0,function(){
        starttextanimation(i+1);
    })

    }
    
    if(i==0){
        document.getElementById("gif").src='https://media.giphy.com/media/N97kHQgG33rUI/giphy.gif'; 
    }


     else if (i==1){document.getElementById("gif").src='https://media.giphy.com/media/OPOIcmwa6Ew2A/giphy.gif';
    } 
    else if (i==2){document.getElementById("gif").src='https://media.giphy.com/media/PhHLbwtuA4g6Rx6e66/giphy.gif';
} 
else if (i==3){document.getElementById("gif").src='https://media.giphy.com/media/mCbjBx1F9fuKdpD3oE/giphy.gif';
} 
else if (i==4){document.getElementById("gif").src='https://media.giphy.com/media/3o7WIrsAqYAl1pif2E/giphy.gif';
} 
  
   
    

}

starttextanimation(0);
});


