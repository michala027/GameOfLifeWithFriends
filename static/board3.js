function update_cell_status(cell) {    
    console.log('update cell status, board3 ' + cell.id);
    paint_cell(cell);
    paint_neighbours();
    swich_player();

    if (is_game_over()){
        game_over();
    }
}

function reset_game() {
    console.log('reset game, board3');
    var elem = document.getElementById("message");
    elem.textContent = "";
    reset_board();
    init_game();
}

function block_cells() {
    var blocked_cell_precentage = 0.2;
    var game_btn_elements = document.getElementsByClassName('game-btn');
    var blocked_cells_num =  Math.floor(game_btn_elements.length * blocked_cell_precentage);
    

    blocked_cells = [];
    
    for (var i = 0; i< blocked_cells_num; i++){
        blocked_cells.push(get_rand_free_cell());
    }

    for (var i=0; i < blocked_cells.length; i++){
        set_blocked_cell(blocked_cells[i]);
    }
}

function init_game() {
    console.log('init game, board3');
    set_player_view();
    block_cells();
}