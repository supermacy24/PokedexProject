
$(function () {
    $('#menu').mouseover('click', function(){
        showMenu();
         
     })
     $('#mySidenav').mouseleave('click', function(){
       closeMenu();
     })
    $('#typeFilterArrowDown').on('click',function(){
        showFilterType();
    })
})

function search(pokemons) {
    $('#searchPokemon').on('keyup', function () {
        let searchInput = $('#searchPokemon').val()
        $.each(pokemons, function (index, pokemon) {
            if (pokemon.name == searchInput) {
                pokemonPicShow(pokemon.id, pokemon.name, pokemon.sprite, pokemon.types)
            }
            if ("#" + pokemon.id == searchInput) {
                pokemonPicShow(pokemon.id, pokemon.name, pokemon.sprite, pokemon.types)
            }
        })
        if(searchInput == ""){
            $('#showDetails').css("display", "none")
        }

    })
}

function pokemonPicShow(id, name, sprite, types) {
    var typesTemp = [types]
    //console.log(typesTemp)
    var typeImg;

    $('#pokemonTypes').empty()

    // $.each(types, function (type) {
    //     switch (type.name) {
    //         case ('grass'):
    //             typeImg = "<img class='pokeType' title='Grass' src='assets/types/grass.svg'/>"
    //             $('#pokemonTypes').append(typeImg);
    //             break;
    //         case ('poison'):
    //             typeImg = "<img class='pokeType' title='Poison' src='assets/types/poison.svg'/>"
    //             $('#pokemonTypes').append(typeImg);
    //             break;

    //     }

    // })
    let labelDivLastSearch = $('#lastSearched label');
    if(labelDivLastSearch.length==9){
       $('#lastSearched').find(":first-child").remove();
    }

    let lastSearched = "<label class='labelSearched' style='cursor:pointer' data-type ='" + types + "' onclick='pokemonPicShow(" + id + ",\"" + name + "\",\"" + sprite + "\",\"" + types + "\")' >"+name.substring(0, 1).toUpperCase() + name.substring(1)+"</label>"

    if (types.includes('bug')) {
        typeImg = "<img class='pokeType' title='Bug' src='assets/types/bug.svg'/>"
        $('#pokemonTypes').append(typeImg);
    }
    if (types.includes('ice')) {
        typeImg = "<img class='pokeType' title='Ice' src='assets/types/ice.svg'/>"
        $('#pokemonTypes').append(typeImg);
    }
    if (types.includes('ground')) {
        typeImg = "<img class='pokeType' title='Ground' src='assets/types/ground.svg'/>"
        $('#pokemonTypes').append(typeImg);
    }
    if (types.includes('grass')) {
        $('#pokemonShow').css({
            'background-image': 'linear-gradient(0deg,#71c66c,#8cff00,#034f1a,#71c66c,#8cff00)'
        })
        typeImg = "<img class='pokeType' title='Grass' src='assets/types/grass.svg'/>"
        $('#pokemonTypes').append(typeImg);
    }
    if (types.includes('poison')) {
        typeImg = "<img class='pokeType' title='Poison' src='assets/types/poison.svg'/>"
        $('#pokemonTypes').append(typeImg);
    }
    if (types.includes('water')) {
        $('#pokemonShow').css({
            'background-image': 'linear-gradient(0deg,#0040ff,#73bfe8,#0040ff,#73bfe8)'
        })
        typeImg = "<img class='pokeType' title='Water' src='assets/types/water.svg'/>"
        $('#pokemonTypes').append(typeImg);
    }
    if (types.includes('fire')) {
        $('#pokemonShow').css({
            'background-image': 'linear-gradient(0deg,#ff0000,#d2ab56,#edb10c,#ff0000,#d2ab56)'
        })
        typeImg = "<img class='pokeType' title='Fire' src='assets/types/fire.svg'/>"
        $('#pokemonTypes').append(typeImg);
    }
    if (types.includes('normal')) {
        typeImg = "<img class='pokeType' title='Normal' src='assets/types/normal.svg'/>"
        $('#pokemonTypes').append(typeImg);
    }
    if (types.includes('electric')) {
        typeImg = "<img class='pokeType' title='Electric' src='assets/types/eletric.svg'/>"
        $('#pokemonShow').css({
            'background-image': 'linear-gradient(0deg,#fbff00,#d7cb14,#000000,#fbff00,#d7cb14)'
        })
        $('#pokemonTypes').append(typeImg);
    }
    if (types.includes('flying')) {
        typeImg = "<img class='pokeType' title='Flying' src='assets/types/flying.svg'/>"
        $('#pokemonTypes').append(typeImg);
    }
    if (types.includes('dragon')) {
        typeImg = "<img class='pokeType' title='Dragon' src='assets/types/dragon.svg'/>"
        $('#pokemonTypes').append(typeImg);
    }
    if (types.includes('psychic')) {
        typeImg = "<img class='pokeType' title='Pshycic' src='assets/types/psychic.svg'/>"
        $('#pokemonTypes').append(typeImg);
    }
    if (types.includes('rock')) {
        typeImg = "<img class='pokeType' title='Rock' src='assets/types/rock.svg'/>"
        $('#pokemonTypes').append(typeImg);
    }
    if (types.includes('fairy')) {
        typeImg = "<img class='pokeType' title='Fairy' src='assets/types/fairy.svg'/>"
        $('#pokemonTypes').append(typeImg);
    }
    if (types.includes('fighting')) {
        typeImg = "<img class='pokeType' title='Fighting' src='assets/types/fighting.svg'/>"
        $('#pokemonTypes').append(typeImg);
    }

    $('#pokemonPic').empty();
    $('#showDetails').css("display", "block")
    

   
    $('#lastSearched').append(lastSearched)

    let pic = "<img style='width:100px' src='" + sprite + "'/>"
    $('#pokemonPic').append(pic)
    $('#pokemonName').text("#" + id + " " + name.substring(0, 1).toUpperCase() + name.substring(1))

}


// function pokemonListDisplay(pokemon) {
   
//     let pokemonRow = "<h2 style='cursor:pointer' onclick='pokemonPicShow(" + pokemon.id + ",\"" + pokemon.name + "\",\"" + pokemon.sprite + "\",\"" + pokemon.types + "\")'><img style = 'width:25px;vertical-align: middle;margin-right: 10px;' src='assets/pokeball.svg'/>" + pokemon.name + "</h2>"
//     $('#pokemon').append(pokemonRow)

// }

function pokemonListDisplay(pokemons) {
    //console.table(pokemons)
    
   $.each(pokemons,function(index,pokemon){
       let pokemonRow = "<h2 style='cursor:pointer' id='" + pokemon.id +"' onclick='pokemonPicShow(" + pokemon.id + ",\"" + pokemon.name + "\",\"" + pokemon.sprite + "\",\"" + pokemon.types + "\")'><img style = 'width:25px;vertical-align: middle;margin-right: 10px;' src='assets/pokeball.svg'/> # " + pokemon.id + " " + pokemon.name + "</h2>"

      $('#pokemon').append(pokemonRow)
       $("#pokemon h2").sort(function(a, b) {
        return parseInt(a.id) - parseInt(b.id);
      }).each(function() {
        var elem = $(this);
        elem.remove();
        $(elem).appendTo("#pokemon");
      });
   })
   

}



function showMenu(){

    $('#mySidenav').css("width","300px");
    // $('#body').css("background-color","rgba(0,0,0,0.4)")

}

function closeMenu(){

    $('#mySidenav').css("width","0px");

    if($('#filterType').is(':visible')){

        $('#filterType').hide();
    }
    // $('#body').css("background-color","#FFF")
    
    
}

function showFilterType(){
 $('#filterType').slideToggle("slow");
}