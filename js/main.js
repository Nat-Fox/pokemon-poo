function Pokemon(nombre, color, poderDeAtaque) {
    this.lista = [];
    this.nombre = nombre;
    this.color = color;

    this.nivelDeAmistad = 0;
    this.vida = 1000;
    this.poderDeAtaque = poderDeAtaque;

    this.mostrarPokemon = function() {
        return ('Hola, soy: ' + this.nombre + 'y soy de color: ' + this.color);
    };

    this.push = function(pokemon) {
        this.lista.push(pokemon);
    };

    this.aumentarAmistad = function(valor) {
        this.nivelDeAmistad = this.nivelDeAmistad + valor;
    };

    this.atacar = function(pokemon) {
        pokemon.vida = pokemon.vida - this.poderDeAtaque;
    };
}

//Ingreso en un arreglo el equipo de Pokemon
var lista = [];
const Pikachu = new Pokemon('Pikachu', 'amarillo', 100);
const Charmander = new Pokemon('Charmander', 'rojo', 20);
const Vulpix = new Pokemon('Vulpix', 'naranjo', 50);
const Lapras = new Pokemon('Lapras', 'celeste', 250);
lista.push(Pikachu);
lista.push(Charmander);
lista.push(Vulpix);
lista.push(Lapras);

//Dibujo el select de quien ataca
function dibujarAtacan() {
    var listaPokemon = document.getElementById('pokemon-ataca');
    listaPokemon.innerHTML = '';
    var nuevoHTML = '';
    lista.forEach(function(pokemon) {
        nuevoHTML += '<option value="' + pokemon.nombre + '">' + pokemon.nombre + '</option>';
    });

    listaPokemon.innerHTML = nuevoHTML;
}

//Dibujo el select del atacado
function dibujarAtacados() {
    var listaPokemonAtacado = document.getElementById('pokemon-atacado');
    listaPokemonAtacado.innerHTML = '';
    var nuevoHTML = '';
    lista.forEach(function(pokemon) {
        nuevoHTML += '<option value="' + pokemon.nombre + '">' + pokemon.nombre + '</option>';
    });

    listaPokemonAtacado.innerHTML = nuevoHTML;
}

//Llamo a las funciones que dibujan
dibujarAtacan();
dibujarAtacados();


function pelear() {
    //Obtiene el pokemon que va a atacar
    pokemonQueAtaca = document.getElementById("pokemon-ataca").value;

    //Obtiene el pokemon atacado
    pokemonAtacado = document.getElementById('pokemon-atacado').value;

    //podria pedir el poder con un prompt
    var atacante = new Pokemon(pokemonQueAtaca, 'color', 100);
    var atacado = new Pokemon(pokemonAtacado, 'color', 100);

    if (pokemonQueAtaca === pokemonAtacado) {
        alert('No puedes atacarte a ti mismo');
        return;
    }

    atacante.atacar(atacado);
    console.log(atacado.vida);

    document.getElementById('ataca').innerHTML = 'Pokemon ' + pokemonQueAtaca + ' ataco a ' + pokemonAtacado +
        ' y pokemon ' + pokemonAtacado + ' tiene vida ' + atacado.vida;





}