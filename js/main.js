function Pokemon(nombre, color, poderDeAtaque) {
    this.nombre = nombre;
    this.color = color;

    this.nivelDeAmistad = 0;
    this.vida = 100;
    this.poderDeAtaque = poderDeAtaque;

    this.mostrarPokemon = function() {
        return ('Hola, soy: ' + this.nombre + 'y soy de color: ' + this.color);
    };

    this.aumentarAmistad = function(valor) {
        this.nivelDeAmistad = this.nivelDeAmistad + valor;
    };

    this.atacar = function(pokemon) {
        pokemon.vida = pokemon.vida - this.poderDeAtaque;
    };
}

const Pikachu = new Pokemon('Pikachu', 'amarillo', 100);
const Charmander = new Pokemon('Charmander', 'rojo', 20);
const Vulpix = new Pokemon('Vulpix', 'naranjo', 50);
const Lapras = new Pokemon('Lapras', 'celeste', 250);

Pikachu.atacar(Charmander);
//document.write('La vida de Charmander es: ', Charmander.vida);
console.log(Charmander.vida);

function pelear() {
    var id1 = document.getElementById('pokemon-ataca');
    console.log(id1);

}