class Pokemon {
    constructor(name) {
        this.name = name;
        this.type = [];
    }
    addPokemon(pokemon, type, weakness) {
        this.pokmeon.push(new Pokemon(pokemon, type, weakness));
    }
}
class Type {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

class PokemonType {
    static url = 'https://ancient-taiga-31359.herokuapp.com/api/pokemon';
    static getAllPokemon() {
        return $.get(this.url);
    }

    static getPokemon(id) {
        return$.get(this.url + `/${id}`);
    }
    static createPokemon(pokemon) {
        return $.post(this.url, pokemon);
    }
    static updatePokemon(pokemon) {
        return $.ajax({
            url: this.url + `/${pokemon._id}`, 
            dataType: 'json',
            data: JSON.stringify(pokemon),
            contentType: 'application/json',
            type: 'PUT'
        });
    }

    static deletePokemon(id) {
        return $.ajax({
            url: this.url + `/${id}`,
            type: 'DELETE'
        });
    }
}

class DOMManager {
    static creatures;

    static getAllPokemon(){
      PokemonType.getAllPokemon().then(pokemon => this.render(pokemon));  
    }

    static render(pokemon) {
        this.pokemon = pokemon;
        $(`#app`).empty();
        for (let pokemon of pokemon) {
            $('#app').prepend(
             `<div id="${pokemon._id} class="card">
             <div class="card-header">
             <h2>${pokmeon.name}</h2>
             <button class="btn btn-danger" onClick="DOMManager.deletePokemon('${pokemon._id}')">Delete</button>
             </div>
             <div class="card-body">
             <div class="card">
             <div class="row">
             <div class="col-sm">
             <input type="text" id="${pokemon._id}-pokemon-addtionaltype-weakness" class="form-contorl" placeholder="Pokemon Type">
             </div>
             <input type="text" id="${pokemon._id}-pokemon-area" class="form-contorl" placeholder="Pokemon Area">
             <div class="col-sm"
             </div>
             </div>
             `          
            );
        }
    }
}

DOMManager.getAllPokemon();