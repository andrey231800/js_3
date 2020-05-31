function Laptop(name, model, serNumber, year, razmerOZU, razmerPZU, diskovod, massa){
    this.name = name;
    this.model = model;
    this.serNumber = serNumber;
    this.year = year;
    this.razmerOZU = razmerOZU;
    this.razmerPZU = razmerPZU;
    this.diskovod = diskovod;
    this.massa = massa;
    this.getPZU = function(){
        return this.razmerPZU;
    };
    this.getOZU = function(){
        return this.razmerOZU;
    };
};

var objLaptop = new Laptop("Lenovo", "Legion ", "Y520", "2015", "16384 Mb", "256 Gb", "+", "2.5 Kg");

console.log(objLaptop.getPZU());
console.log(objLaptop.getOZU());

function Ultrabook(massa, name, model, serNumber, year, razmerOZU, razmerPZU){
    this.massa = massa;
    if(massa <= 1.5){
        console.log('good mass');
    }else{
        console.log('your mass is big');
    };
    this.name = name;
    this.model = model;
    this.serNumber = serNumber;
    this.year = year;
    this.razmerOZU = razmerOZU;
    this.razmerPZU = razmerPZU;
    this.getName = function(){
        return this.name;
    };
    this.getYear = function(){
        return this.year;
    };
};

var objUltrabook = new Ultrabook("1", "Asus", "Aspire", "1123", "2017", "16 Gb", "256 Gb");

console.log(objUltrabook.getName());
console.log(objUltrabook.getYear());