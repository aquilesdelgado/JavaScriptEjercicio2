import {Dragon, Elfo, Mago} from "./clasepersonajes.js";

export let heroes = []
heroes[0] = new Mago("Merlin",4500,6000,"magia blanca",1000,150,1,"https://i.imgur.com/xKbgdTZ.jpg",150);
heroes[1] = new Dragon("ClashFire",9000,5000,"fuego",1000,800,2,"https://vignette.wikia.nocookie.net/lotr/images/9/98/SmaugDestroyingLakeTownCropped.jpg",150,2000);
heroes[2] = new Elfo("Valgalatar",7000,6500,"magia elfica",1000,200,3,"https://i.imgur.com/GKyNkPG.jpg",150,"Arco");