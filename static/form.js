var sliderBtn = document.getElementById("choose-game");
var gameSettings = document.getElementById("game-settings");

sliderBtn.addEventListener("click", function(){
    if(gameSettings.classList.contains("open")) {        
        gameSettings.classList.remove("open");
        gameSettings.classList.add("closed");
    } else {
        gameSettings.classList.add("open");
        gameSettings.classList.remove("closed");
    }
    
})

function get_decription(game_type) {
    if (game_type == "game1") {
        return "<strong>Conquer more cells than your opponent!</strong> <br><br> \
        At each turn, one player can paint a free cell in his color, <br> \
        cells that have 3 neighbors that are painted the same color is painted<br> \
        in their color too! Even if it is already painted in a different color!. <br>\
        So get as much cells painted in your color, and try to conquer some of your<br>\
        opponent's cells too!\
        When all cells are either painted or blocked, the winner <br>\
        is the player that has more cells painted his color" ;
    } else if (game_type == "game2") {
        return "<strong>Block your Opponent to get more cells painted in your color!</strong> <br><br> \
                At each turn, one player can block a cell, <br> \
                and painted cell will paint their non-blocked neighbours. <br>\
                When all cells are either painted or blocked, the winner <br>\
                is the player that has more cells painted his color" ;
    }else if (game_type == "game3"){
        return "<strong>Paint cells to get more cells painted in your color!</strong> <br><br> \
                The board starts of with blocked cells. <br> \
                At each turn, one player can paint a cell, <br>\
                and painted cell will paint their non-blocked neighbours. <br>\
                When all cells are either painted or blocked, the winner <br>\
                is the player that has more cells painted his color";
    } else {
        return "UNKNOWN GAME TYPE";
    }
}

function game_type_click(game) {    
    desc = get_decription(game.value);
    var desc_elem = document.getElementById('game-description');
    desc_elem.innerHTML = desc;
}

var elements = document.getElementsByClassName('custom-control-input');

for (i = 0; i < elements.length; i++){    
	elements[i].onclick = function(){        
        game_type_click(this);
    };
}

// set defaults
set_default_values(game_num);

function set_default_values(game_num) {    
    var game_type_button = document.getElementById("game" + game_num);
    game_type_button.click();

    var rows_elem = document.getElementById('board-rows');
    rows_elem.value = rows_num
    
    var cols_elem = document.getElementById('board-cols');
    cols_elem.value = cols_num

}
