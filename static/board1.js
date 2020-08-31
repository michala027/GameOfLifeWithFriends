function update_cell_status(cell) {    
    console.log('update cell status, board1 ' + cell.id);
    paint_cell(cell);
    check_neighbors(cell);
    swich_player();

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
    console.log('init game, board1');
    set_player_view();
}

function check_neighbors(cell){
    a = cell.id.split("_");
    row = parseInt(a[0]);
    col = parseInt(a[1]);

    if (row !== 0){
        check_cell(row-1, col);
    }
    if (col !== 0){
        check_cell(row, col-1);
    }
    if (row !== rows_num-1){
        check_cell(row+1, col)
    }
    if (col !== cols_num-1){
        check_cell(row, col+1)
    }
}

function check_cell(row, col) {
    p1_count = 0;
    p2_count = 0;

    if (row !== 0){
        id = (row -1).toString() + "_" + col.toString();
        if (is_p1(id)){
            p1_count+= 1;
        }
        else if(is_p2(id)){
            p2_count +=1;
        }
    }
    if (col !== 0){
        id = (row).toString() + "_" + (col -1).toString();
        if (is_p1(id)){
            p1_count+= 1;
        }
        else if (is_p2(id)){
            p2_count +=1;
        }
    }
    if (row !== rows_num-1){
        id = (row +1).toString() + "_" + col.toString();
        if (is_p1(id)){
            p1_count+= 1;
        }
        else if (is_p2(id)){
            p2_count +=1;
        }
    }
    if (col !== cols_num-1){
        id = (row).toString() + "_" + (col+1).toString();
        if (is_p1(id)){
            p1_count+= 1;
        }
        else if (is_p2(id)){
            p2_count +=1;
        }
    }

    if (p1_count >= 3){
        console.log('p1 count >= 3. ' + row + "_" + col );
        paint_p1([row+ "_" + col]);
    } else if (p2_count >= 3) {
        console.log('p2 count >= 3. ' + row + "_" + col );
        paint_p2([row+ "_" + col]);
    }
}