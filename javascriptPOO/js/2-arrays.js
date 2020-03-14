class MyList{
    constructor(list){
        this.list=list;
        this.textlist=[];
    }
    static createElement(text){
        // createElement tiene la capacidad de crear un elemento en concreto
        const li = document.createElement("li");
        //textContent genera texto dentro del elemento
        li.textContent = text;

        return li;

    }
    update(){
        //.firstChild seleciona el primer elemento de el nodo o de una etiqueta padre
        while(this.list.firstChild){ 
            this.list.removeChild(this.list.firstChild);
        }

        //Por medio de appendChild podemos incluir en un nodo un nuevo hijo, de esta manera
        for(const text of this.textlist){
            this.list.appendChild(MyList.createElement(text));
        }
    }
    view(){
        console.log(this.textlist);
    }
    add(text){
        this.textlist.push(text);
        this.update();
        //console.log(this.textlist);
    }
    remove(index){
        this.textlist.splice(index, 1);
    }

}
const list = document.getElementById("mylist");
const build = new MyList(list);

