function Pokemon(nombre, color, poderDeAtaque) {
    this.lista = [];
    this.nombre = nombre;
    this.color = color;

    this.nivelDeAmistad = 0;
    //modifico el valor para probar las batallas
    this.vida = 500;
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

//Ingreso en un arreglo el equipo de Pokemon para dibujar en el html posteriormente
var lista = ['Pikachu', 'Charmander', 'Vulpix', 'Lapras'];
// const Pikachu = new Pokemon('Pikachu', 'amarillo', 100);
// const Charmander = new Pokemon('Charmander', 'rojo', 20);
// const Vulpix = new Pokemon('Vulpix', 'naranjo', 50);
// const Lapras = new Pokemon('Lapras', 'celeste', 250);
// lista.push(Pikachu);
// lista.push(Charmander);
// lista.push(Vulpix);
// lista.push(Lapras);

//Dibujo el select de quien ataca
function dibujarAtacan() {
    var listaPokemon = document.getElementById('pokemon-ataca');
    listaPokemon.innerHTML = '';
    var nuevoHTML = '';
    lista.forEach(function(pokemon) {
        nuevoHTML += '<option value="' + pokemon + '">' + pokemon + '</option>';
        //en caso de utilizar el new
        //nuevoHTML += '<option value="' + pokemon.nombre + '">' + pokemon.nombre + '</option>';
    });

    listaPokemon.innerHTML = nuevoHTML;
}

//Dibujo el select del atacado
function dibujarAtacados() {
    var listaPokemonAtacado = document.getElementById('pokemon-atacado');
    listaPokemonAtacado.innerHTML = '';
    var nuevoHTML = '';
    lista.forEach(function(pokemon) {
        nuevoHTML += '<option value="' + pokemon + '">' + pokemon + '</option>';
        //en caso de utilizar el new
        //nuevoHTML += '<option value="' + pokemon.nombre + '">' + pokemon.nombre + '</option>';
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


    if (pokemonQueAtaca === pokemonAtacado) {
        alert('No puedes atacarte a ti mismo');
        return;
    }

    //para utilizar la función atacar necesito que el pokemon sea de tipo objeto
    //para este ejercicio el color es irrelevante y el valor se pide por prompt
    var poderAtacante = prompt('Ingrese el poder de ataque del pokemon atacante');
    var poderAtacante = prompt('Ingrese el poder de ataque del pokemon atacado');
    var atacante = new Pokemon(pokemonQueAtaca, 'color', poderAtacante);
    var atacado = new Pokemon(pokemonAtacado, 'color', poderAtacante);


    atacante.atacar(atacado);
    console.log(atacado.vida);

    document.getElementById('ataca').innerHTML = '<div><h4>Pokemon ' + pokemonQueAtaca + ' ataco a ' + pokemonAtacado +
        ' y pokemon ' + pokemonAtacado + ' tiene ' + atacado.vida + ' de vida restante</h4></div>' +
        '<img width="200px" src="assets/img/' + pokemonQueAtaca + '.png" alt="">' + '<h3><strong>VS</strong></h3>' +
        '<img width="200px" src="assets/img/' + pokemonAtacado + '.png" alt="">';

}