function update_cell_status(cell) {    
    console.log('update cell status, board2 ' + cell.id)
    set_blocked_cell( cell.id);
    swich_player();
    paint_neighbours();

    if (is_game_over()){
        game_over();    
    }
    
}

function reset_game() {
    console.log('reset game, board2')
    var elem = document.getElementById("message");
    elem.textContent = "";
    reset_board();
    init_game();
}

function init_game() {
    console.log('init game, board2');
    set_player_view();

    p1_cell = get_rand_free_cell();
    p2_cell = get_rand_free_cell();

    console.log('p1_cell: ' + p1_cell + " p2_cell: " + p2_cell);
    set_p1_cell(p1_cell);
    set_p2_cell(p2_cell);
}

