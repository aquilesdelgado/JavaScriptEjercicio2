
var padretemplate = document.querySelector("#padretemplate");
var template1 = document.querySelector("#template1");
var hijotemplate1 = template1.content.querySelector("#contenedor");

// agregar los heroes al un array
import {heroes} from "./crearPersonajes.js";


// clonar template para pintar
function agregarHeroes () {
    for (let i=0;i<heroes.length;i++)
    {
        hijotemplate1.id= 'hijo' + i;
        var clon = template1.content.cloneNode(true);


        clon.querySelector("img").src = heroes[i].imagen;
        clon.querySelector("img").id = 'imagen'+heroes[i].id;
        clon.querySelector("#nombre").innerHTML = heroes[i].nombre;
        let nombre = heroes[i].nombre;
        clon.querySelector("#vidas").innerHTML = "Nivel del Heroe" + " " + heroes[i].nivel;
        clon.querySelector("#otro").innerHTML= "Categoria de Heroe" + " " + heroes[i].categoria;
        clon.querySelector("button").addEventListener("click",atacar,false);
        clon.querySelector("button").id= i;
        clon.querySelector("button").innerHTML = "Atacar";
        clon.querySelector("#vitalidad").innerHTML= "Cantidad de vidas:" + " " + heroes[i].vidas;
        var select = clon.querySelector(".select");
        select.id = "sel" +i;
        clon.querySelector("progress").id ="prog" +i;

        for(let i = 0; i<heroes.length; i++){
            if(heroes[i].nombre == nombre){
                continue;
            }
            let option = document.createElement("option");
            option.innerHTML = heroes[i].nombre;
            option.value = heroes[i].id;
            option.id = "elem"+ heroes[i].id;
            option.class = heroes[i].id;



            select.appendChild(option);

        }
        padretemplate.appendChild(clon);
    }


}


// //crear el boton y darle funcionalidad,(encontrar al que ataca y al que es atacado) desde la funcion atacar

function atacar (event) {
    let click = event.target.id;
    console.log(click);
    var Hero = event.target.id;
    var idenemy = event.target.parentNode.querySelector("#sel"+click).value;
    let enemy = idenemy -1;
    console.log(enemy);
    var progressbar = event.target.parentNode.parentNode.querySelector('#hijo' + enemy).childNodes[5];
    console.log(progressbar);
    var enemyLife = event.target.parentNode.parentNode.querySelector('#hijo' + enemy).querySelector("#vitalidad");

    // progressbar.value = heroes[click].LanzarHechizo(heroes[enemy]);
    if (heroes[click] == heroes[0]) {
        let hit1 = heroes[0].LanzarHechizo(heroes[enemy]);
        progressbar.value = hit1;
        console.log(progressbar);
        if (hit1===0) {
            document.querySelector('#hijo'+enemy).childNodes[3].style.filter= "grayscale(100%)";
            document.querySelector('#hijo'+enemy).childNodes[15].style.display= "none";
            document.querySelector('#hijo'+enemy).childNodes[17].style.display= "none";
        }


        enemyLife.innerHTML ="Cantidad de vidas:  " + hit1;
    } if (heroes[click] == heroes[1]) {
        let hit2 = heroes[1].LanzarLLamarada(heroes[enemy]);
        progressbar.value = hit2;
        console.log(hit2);
        if (hit2===0) {
            document.querySelector('#hijo'+enemy).childNodes[3].style.filter= "grayscale(100%)";
            document.querySelector('#hijo'+enemy).childNodes[15].style.display= "none";
            document.querySelector('#hijo'+enemy).childNodes[17].style.display= "none";
        }
        enemyLife.innerHTML ="Cantidad de vidas:  " + hit2;
    }
     if (heroes[click] == heroes[2]) {
        let hit3 = heroes[2].LanzarFlechaMagica(heroes[enemy]);
        progressbar.value = hit3;
         if (hit3===0) {
             document.querySelector('#hijo'+enemy).childNodes[3].style.filter= "grayscale(100%)";
             document.querySelector('#hijo'+enemy).childNodes[15].style.display= "none";
             document.querySelector('#hijo'+enemy).childNodes[17].style.display= "none";
         }
        enemyLife.innerHTML ="Cantidad de vidas:  " + hit3;
    }
     console.log("Hola "+progressbar.value);
};


agregarHeroes();
