function set_cur_player(cur_player){
    console.log(cur_player);
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
        set_default_cell(elements[i]);
    }
}

function game_over() {
    console.log("GAME OVER");
    var elem = document.getElementById("message");
    
    if (player === "p1"){
        var p = "Player One";
    } else {
        var p = "Player Two";
    }
    
    elem.textContent = "GAME OVER! The winner is " + p + "!";
}

function update_view(res) {    
    p1_cells = res["p1"];
    p2_cells = res["p2"];
    blocked_cells = res["blocked"];
    next_player = res["next_player"];
    go = res["game_over"];

        
    for(i=0; i < p1_cells.length; i++ ) {
        var elem = document.getElementById(p1_cells[i]);
        set_p1_cell(elem);
    }

    for(i=0; i < p2_cells.length; i++ ) {
        var elem = document.getElementById(p2_cells[i]);
        set_p2_cell(elem);
    }
    for(i=0; i < blocked_cells.length; i++ ) {
        var elem = document.getElementById(blocked_cells[i]);
        set_blocked_cell(elem);
    }

    set_cur_player(next_player);

    if (go) {
        console.log("game over, updating");
        game_over();
    }
}

function update_init_state(){    
    let on_success = (resp) => {        
        res = JSON.parse(resp);
        
        update_view(res);
    };

    let on_error = () => {
        console.log('error');
    };

    let xhttp = new GameAjax('/get_init_state', on_success, on_error);
    xhttp.send_json({'game_id': game_id});
}



function update_cell_status(cell) {    
    let on_success = (resp) => {        
        res = JSON.parse(resp);

        update_view(res);
    };

    let on_error = () => {
        console.log('error');
    };

    updates = {
        'player': player,
        'cells': [cell.id],
        'game_id': game_id,
    }   
    
    console.log('update');
    let xhttp = new GameAjax('/update', on_success, on_error);
    xhttp.send_json(updates);
}
