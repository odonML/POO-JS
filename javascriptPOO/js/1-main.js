class Persona{
//ES EL METODO QUE AUTOMATICAMENTE SE EJECUTA CUANDO SE HACE LA INSTANCIAS DE LA CLASE
    constructor(_ancho, _largo,_color){
        console.log("hola mundo");
        this.ancho=_ancho;
        this.largo=_largo;
        this.color=_color;
    }
//METODOS NORMALES
    getArea(){
        return this.ancho * this.largo;
    }
    printDescription(){
        console.log("el color es: "+this.color );
    }
//GETTERS AND SETTERS IN JAVASCRIPT
    get area(){
         return this.ancho * this.largo;
    }
    set area(area){
         this.ancho = area;
    }
}
//INSTNACIA
let persona = new Persona(2,10,"azul");
let persona2 = new Persona(5,10,"amarillo");

//METODOS NORMALES
persona.printDescription();
console.log("area "+persona.getArea());

//GETTERS AND SETTERS
console.log(persona.area);
persona.area=25;
console.log(persona.area);

////////////////////////////////////////////// 

//PARA ESTE EJEMPLO CREARE OTRA CLASE PARA PODER OBSERVAR QUE EN NINGUN MOMENTO SE HACE
// UNA INSTANCIA DE ESTA
class Sumar{
    /*Los métodos estáticos son llamados sin instanciar su clase. 
    Son habitualmente utilizados para crear funciones para una aplicación.*/
    static suma(x,y){
        return x+y;
    }
}
console.log(Sumar.suma(10,20));

////////////////////////////////////////////// 

//PARA ESTE OTRO EJEMPLO DE IGUAL MANERA HAREMOS OTRA CLASE PARA VER LA HERENCIA DE UNA
//CLASE PADRE A UNA CLASE HIJO

class People{
    constructor(_name,_age){
        this.name=_name;
        this.age=_age;
    }
    descrip(){
        console.log(`hola mi nombre es ${this.name} y mi edad es ${this.age}`);
    }
}
class Programer extends People{
    constructor(_name,_age,_experiens){
        super(_name,_age);
        this.experiens=_experiens;
    }
}
//SE HACE LA INSTANCIA DE LA CLASE PROGRAMER PERO
//CON ESA INSTANCIA SE EJECUTA EL METODO DE DESCRIP
//DICHO METODO ES DE LA CLASE PADRE
let programer=new Programer("odon",23,1);
programer.descrip();

////////////////////////////////////////////// 

//POLIMORFISMO

////////////////////////////////////////////





