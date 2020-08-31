var resetGame = document.getElementById("reset-game");
var game_btn_elements = document.getElementsByClassName('game-btn');
var player = "p1";
var player1_elem = document.getElementById("p1");
var player2_elem = document.getElementById("p2");

// cell click
for (i = 0; i < game_btn_elements.length; i++){
	game_btn_elements[i].addEventListener("click", function(){        
        update_cell_status(this);
    });
}

// reset game
resetGame.addEventListener("click", function(){
    player = "p1";
    reset_game();
})

function set_player_view(){
    if (player === "p1"){
        // console.log('p1');
        player2_elem.classList.remove("play");
        player1_elem.classList.add("play");
    } else {
        // console.log('p2');
        player1_elem.classList.remove("play");
        player2_elem.classList.add("play");
    }
}
function swich_player(){
    if (player === "p1"){
        player = "p2";
    } else {
        player = "p1";
    }

    set_player_view();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function get_rand_free_cell(){
    while(true){
        r = getRandomInt(rows_num);

        c = getRandomInt(cols_num);
        
        console.log(r + "_" + c);
        if( document.getElementById(r + "_" + c).textContent === "A"){
            return r + "_" + c;
        } 
        
    }
}

function get_btns(text) {
    var elems = [];

    
    for (var r = 0; r < rows_num; r++){
        for (var c = 0; c < cols_num; c++){
            e = document.getElementById(r + "_" + c);
            
            if (e.textContent === text) {  
                // elems.push([r, c]);
                elems.push(e);
            }
        }
    }
    return elems
}

function is_p1(id){
    var state = get_btn_state(id);
    return (state === "P1");
}

function is_p2(id){
    var state = get_btn_state(id);
    return (state === "P2");
}

function get_btn_state(id){
    var elem = document.getElementById(id);
    return elem.textContent;
}

function is_free(id){
    // console.log("is free: " + id);
    var elem = document.getElementById(id);
    if (elem.textContent === "A"){
        return true;
    } else {
        return false;
    }
}

function is_neighbours(ids, row, col){
    
    if (row !== 0){
        id = (row-1) + "_" + col;
        if (ids.indexOf(id) !== -1){            
            return true;
        }
    }
    
    if (row != rows_num){
        id = (row+1) + "_" + col;        
        if (ids.indexOf(id) !== -1){            
            return true;
        }
    }

    if (col !== 0){
        id = row + "_" + (col - 1);        
        if (ids.indexOf(id) !== -1){            
            return true;
        }
    }
    
    if (col != cols_num ){
        id = row + "_" + (col+1);    
        if (ids.indexOf(id) !== -1){
            return true;
        }
    }

    return false;
}

function get_ids(buttons){
    ids = [];

    for (var i = 0; i< buttons.length; i++){
        console.log(buttons[i].id);
        ids.push(buttons[i].id);
    }

    return ids;

}

function get_free_neighbours(ids){
    n = []

    for (var row = 0; row < rows_num; row++){
        for (var col = 0; col < cols_num; col++){
            if (is_neighbours(ids, row, col) && is_free(row + "_" + col)) {
                n.push(row + "_" + col);
            }
        }
    }

    return n;

}

function find_mutual(p1_n, p2_n){
    var m = [];

    for (var i = 0; i < p1_n.length; i++){
        if (p2_n.indexOf(p1_n[i]) !== -1){
            m.push(p1[i]);
        }
    }

    return m;
}

function paint_p1(ids){
    for (var i =0; i<ids.length; i++){
        set_p1_cell(ids[i]);
    }
}

function paint_p2(ids){
    for (var i =0; i<ids.length; i++){
        set_p2_cell(ids[i]);
    }
}


function paint_neighbours(){
    p1_buttons = get_btns("P1");
    p2_buttons = get_btns("P2");

    p1_n = get_free_neighbours(get_ids(p1_buttons));
    p2_n = get_free_neighbours(get_ids(p2_buttons));

    // m = find_mutual(p1_n, p1_n);


    p1_new = p1_n;

    // for (var i = 0; i< p1_n; i++){
    //     if (m.indexOf(p1_n[i]) !== -1){
    //         p1_new.push(p1_n[i]);
    //     }
    // }

    p2_new = p2_n;

    // for (var i = 0; i< p2_n; i++){
    //     if (m.indexOf(p2_n[i]) !== -1){
    //         p2_new.push(p2_n[i]);
    //     }
    // }

    // for (var i=0; i<(Math.floor(m.length / 2)); i++){
    //     p1_new.push(m[i]);
    // }
    
    // for (var i=(Math.floor(m.length / 2)); i<m.length; i++){
    //     p2_new.push(m[i]);
    // }

    paint_p1(p1_new);
    paint_p2(p2_new);
}

function is_game_over(){
    // console.log('is game over'); 

    for (var row=0; row < rows_num; row++){
        for (var col=0; col < cols_num; col++){
            id = row + "_" + col;
            var elem = document.getElementById(id);
            if (elem.textContent === 'A'){
                // console.log('game not over, ' + row + " " + col)
                return false;
            }
        }
    }
    console.log('game over');
    return true;
}
