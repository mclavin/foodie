//skapar en array med objekt
var foods = [
    {name: "Pannkakor", veg: true, url: "http://www.spisa.nu/3.12981/recept/pannkakorplattar-med-sylt-och-gradde/"},
    {name: "Köttbullar med potatismos", veg: false, url: "https://www.landleyskok.se/recept/hemlagade-kottbullar.html/"},
    {name: "Baconinlindad kycklingfilé", veg: false, url: "https://www.kokaihop.se/recept/baconinlindad-kycklingfile-2"},
    {name: "Lasagne med köttfärssås", veg: false, url: "http://www.koket.se/lasagne-med-kottfarssas"},
    {name: "Majsplättar med avokadoröra", veg: true, url: "https://www.mathem.se/recept/mattias-majsplattar-med-avokado-chimichurri"},
    {name: "Grönålssoppa med chorizo", veg: false, url:"http://www.matklubben.nu/recept/gr%F6nk%E5lssoppa_med_chorizo_122704.html#.WCxTNcn3b9I"},
    {name: "Pastagratäng med rökt lax", veg: false, url: "http://www.ica.se/recept/pastagratang-med-rokt-lax-och-spenat-719271/"},
    {name: "Thaigryta med kyckling", veg: false, url: "http://www.koket.se/mitt-kok/donal-skehan/thaigryta-med-kyckling/"},
    {name: "Lax med nudelsallad", veg: false, url: "https://www.mathem.se/recept/gustavs-sesamstekta-lax-med-varm-nudelsallad--lime-och-koriander"},
    {name: "Lasagne med halloumi", veg: true, url: "http://www.ica.se/recept/lasagne-med-halloumi-spenat-och-pumpakarnor-718382/"},
    {name: "Rödbetsrisotto med hyvlad halloumi", veg: true, url: "http://www.ica.se/recept/rodbetsrisotto-med-hyvlad-halloumi-och-valnotter-720045/"},
    {name: "Halstrad tonfisk med avocadohummos", veg: false, url: "http://www.ica.se/recept/halstrad-tonfisk-med-avokadohummus-719975/"},
    {name: "Viltkalvsgryta med mandelpotatispuré", veg: false, url: "https://www.mathem.se/recept/viltskavsgryta-med-mandelpotatispure-o-rarorda-lingon"},
    {name: "Coq Au Vin", veg: false, url: "http://www.foodnetwork.com/recipes/ina-garten/coq-au-vin-recipe4.html"},
    {name: "Indisk linssoppa", veg: true, url: "http://www.ica.se/recept/indisk-linssoppa-mulligatawny-718554/"},
    {name: "Falafel med hummos", veg: true, url: "http://www.ica.se/recept/falafel-med-hummus-yoghurtdressing-och-picklad-rodlok-717166/"},
    {name: "Vegetarisk pastagratäng", veg: true, url: "://www.landleyskok.se/recept/vegetarisk-pastagratang.html/"},
    {name: "Morotsbiffar", vag: false, url: "http://www.tasteline.com/recept/morotsbiffar-med-dragon/"},
    {name: "Biff teriyaki", vag: false, url: "http://www.arla.se/recept/biff-teriyaki"},
    {name: "Korvstroganoff", vag: false, url: "http://www.ica.se/recept/korvstroganoff-med-ris-533512/"},
    {name: "Ungsstekt falukorv med rostade rotsaker", veg: false, url: "http://www.ica.se/recept/ugnsstekt-falukorv-med-rostade-rotfrukter-713615/"},
    {name: "Vegetarisk Chipotle Chilipizza", veg: true, url: "http://www.koket.se/vegetariska-chipotle-chilipizzor"},
    {name: "Baconlindad köttfärslimpa", veg: false, url: "http://mittkok.expressen.se/recept/baconlindad-kottfarslimpa/"}
];

//denna container håller allt innehåll
var container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

//skapar en div för knappar
var buttonDiv = document.createElement("div");
buttonDiv.setAttribute("id", "buttons");
container.appendChild(buttonDiv);

//knapp för att få fram slumpvald rätt
var dishB = document.createElement("button");
var dishT = document.createTextNode("Ny rätt");
dishB.appendChild(dishT);
buttonDiv.appendChild(dishB);

//knapp för att få fram slumpvald vegetarisk rätt
var vegB = document.createElement("button");
var vegT = document.createTextNode("Veg");
vegB.appendChild(vegT);
buttonDiv.appendChild(vegB);

//div som ska innehålla text och länk
var textDiv = document.createElement("div");
container.appendChild(textDiv);

//skapar text och länk
var link = document.createElement("a");
textDiv.appendChild(link);
var mealH = document.createElement("h1");
var mealT = document.createTextNode("Klicka på en knapp för att få fram en rätt");
mealH.appendChild(mealT);
link.appendChild(mealH);

//funktion för att skriva ut slumpvald rätt
var dish = function() {
    var food = foods[Math.floor(Math.random()*foods.length)];
    mealT.nodeValue = food.name;
    link.setAttribute("href", food.url);
}

//funktion för att ta fram slumpvald vegetarisk rätt
var veg = function() {
    //skapar ny array och pushar in alla vegetariska rätter
    var vegArr = [];
    for (var i = 0; i < foods.length; i++){
        if (foods[i].veg){
            vegArr.push(foods[i]);
        }
    }
    //hämtar och skriver ut vegetarisk rätt
    var food = vegArr[Math .floor(Math.random()*vegArr.length)];
    mealT.nodeValue = food.name;
    link.setAttribute("href", food.url);
}

//event listeners för de två funktionerna
dishB.addEventListener("click", dish);
vegB.addEventListener("click", veg);