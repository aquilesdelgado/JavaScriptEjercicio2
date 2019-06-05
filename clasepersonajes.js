import {Heroe} from "./claseHeroe.js";

export class Mago extends Heroe {
    constructor (nombre,nivel,experiencia,categoria,vidas,poderes,id,imagen,nivel_hechizo) {

        super (nombre,nivel,experiencia,categoria,vidas,poderes,id,imagen)
        this.nivel_hechizo = nivel_hechizo;

    }
    LanzarHechizo (enemy) {

        if (enemy.vidas > this.nivel_hechizo) {
            let b =  enemy.vidas;
            enemy.vidas = b - (this.nivel_hechizo - (enemy.experiencia*0.01));
            return enemy.vidas;
            console.log(a);
        } return 0;

    }

}
export class Dragon extends Heroe {
    constructor (nombre,nivel,experiencia,categoria,vidas,poderes,id,imagen,nivel_destruccion,capacidad_vuelo) {
        super (nombre,nivel,experiencia,categoria,vidas,poderes,id,imagen)
        this.nivel_destruccion = nivel_destruccion;
        this.capacidad_vuelo = capacidad_vuelo;

    }
    LanzarLLamarada (enemy) {
        if(enemy.vidas > this.nivel_destruccion) {
            let b =  enemy.vidas;
            enemy.vidas = b - (this.nivel_destruccion - (enemy.experiencia*0.01));
            return enemy.vidas;
        }return 0;
    }
}
export class Elfo extends Heroe{
    constructor (nombre,nivel,experiencia,categoria,vidas,poderes,id,imagen,poder_ataque,armas) {
        super (nombre,nivel,experiencia,categoria,vidas,poderes,id,imagen)
        this.armas = armas;
        this.poder_ataque = poder_ataque;
    }
    LanzarFlechaMagica (enemy) {
        if(enemy.vidas > this.poder_ataque) {
            let b =  enemy.vidas;
            enemy.vidas = b - (this.poder_ataque - (enemy.experiencia*0.01));
            return enemy.vidas;
        } return 0;
    }
}