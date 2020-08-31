function set_cur_player(cur_player){
    // console.log(cur_player);
    player = cur_player;    

    var p1_elem = document.getElementById("p1");
    var p2_elem = document.getElementById("p2");

    if (cur_player === "p1"){
        p1_elem.classList.add("play");
        p2_elem.classList.remove("play");
    }else{
        p1_elem.classList.remove("play");
        p2_elem.classList.add("play");
    }
}

function reset_board(){
    var elements = document.getElementsByClassName("game-btn");

    for(i=0; i < elements.length; i++ ) {        
        set_default_cell(elements[i].id);
    }
}

function get_winner_str() {
    var p1_count = 0;
    var p2_count = 0;

    var elements = document.getElementsByClassName("game-btn");

    for(i=0; i < elements.length; i++ ) {        
        
        if (elements[i].textContent === "P1"){
            p1_count++;
        } else if (elements[i].textContent === "P2"){
            p2_count ++;
        }
    }

    if (p1_count > p2_count){
        return "GAME OVER! The winner is Player One!";
    } else if (p2_count > p1_count){
        return "GAME OVER! The winner is Player Two!";
    } else {
        return "GAME OVER! the game is Tied!";
    }
}

function game_over() {
    console.log("GAME OVER");
    var elem = document.getElementById("message");
    
    elem.textContent = get_winner_str();
}
