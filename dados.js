//Código JavaScript -- Carlos Montero
function Jugador(nombre){
    this.getganador=function(){
         return this.partidasganadas;
        }
        this.getnombre=function(){
         return this.nombre;
        }
    this.nombre = nombre;
    this.caraDado1 = 0;
    this.caraDado2 = 0;
    this.partidasganadas = 0;
}

function JuegoDados(numeroJuego, j1, j2){
    this.numeroJuego = numeroJuego;
    this.jugador1 = j1;
    this.jugador2 = j2;

    this.tirarDados = function() {
        this.jugador1.caraDado1 = (Math.floor(Math.random()*7)); //usar random(1,6)
        this.jugador1.caraDado2 = (Math.floor(Math.random()*7)); //usar random(1,6)
        this.jugador2.caraDado1 = (Math.floor(Math.random()*7)); //usar random(1,6)
        this.jugador2.caraDado2 = (Math.floor(Math.random()*7)); //usar random(1,6)
    }

    this.determinaGanador = function() {
        if ( (this.jugador1.caraDado1 + this.jugador1.caraDado2 == 7)
            && (this.jugador2.caraDado1 + this.jugador2.caraDado2 != 7) ) {
                this.jugador1.partidasganadas++;
            return this.jugador1.nombre
        }
        else if ( (this.jugador2.caraDado1 + this.jugador2.caraDado2 == 7)
            && (this.jugador1.caraDado1 + this.jugador1.caraDado2 != 7) ) {
                this.jugador2.partidasganadas++;
            return this.jugador2.nombre
        }
        else return "Empate";
    }
}
let pedro = new Jugador("Pedro Sánchez");
let antonio = new Jugador("Antonio Ramírez");
let ciclo = true;
let juegos = 0;
let juego1 = new JuegoDados(1, pedro, antonio);
let ganador = 0;

while(ciclo){
    juegos++;
    juego1.tirarDados();
    ganador=juego1.determinaGanador();
    console.log("El ganador del lanzamiento es: "+ ganador);
    if(pedro.getganador()==3){
        ciclo=false;
        ganador=pedro.getnombre();
    }else if(antonio.getganador()==3){
        ciclo=false;
        ganador=antonio.getnombre();
    }
}
console.log("El ganador es: " + ganador);
console.log("El numero de juegos fueron: " + juegos);


//Determinar el primer ganador de 3 juegos y cuantos juegos hubo

