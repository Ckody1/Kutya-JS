var kutyakTomb = [{
        nev:"Molly",
        kor:"5",
        suli:"Német juhász"
    },{
        nev:"Roki",
        kor:"2",
        suli:"Német juhász"
    },{
        nev:"Morzsa",
        kor:"3",
        suli:"Husky"
    }];

var irany = true;

$(function(){
    tablazatKiir();
    
});

function tablazatKiir(){
    $("article").empty();
    $("article").append("<table>");
    $("article table").append("<tr><th>Név</th><th>Kor</th><th>Fajta</th></tr>");
    
    for (var i = 0; i < kutyakTomb.length; i++) {
        $("article table").append("<tr>");
        for (var item in kutyakTomb[i]) {
            $("article table tr").eq(i + 1).append("<td>" + kutyakTomb[i][item] + "</td>");
        }
    }
    $("article th").click(rendezes);
}

function rendezes(){
    kutyakTomb.sort(function(a, b){
        if(irany){
            return Number(a.nev > b.nev)- 0.5;
        }else{
            return Number(a.nev < b.nev)- 0.5;
        }  
    });
    irany = !irany;
    console.log(irany);
    console.log(kutyakTomb);
    tablazatKiir();
}