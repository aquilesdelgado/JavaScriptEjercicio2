export class Heroe {
    constructor (nombre,nivel,experiencia,categoria,vidas,poderes,id,imagen) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.experiencia = experiencia;
        this.categoria = categoria;
        this.vidas = vidas;
        this.poderes = poderes;
        this.id = id;
        this.imagen = imagen;
    }
    saludar(adversario) {
        return "hola" + " " + adversario.nombre + " " + ", comencemos la batalla";
    }
}