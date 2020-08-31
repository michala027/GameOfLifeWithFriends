
function set_p1_cell(cell_id) {
    var cell = document.getElementById(cell_id);
    cell.classList.add("disabled");
    cell.disabled = true;
    cell.classList.add("btn-info");
    cell.classList.remove("btn-outline-primary");
    cell.classList.remove("btn-danger");
    cell.textContent = "P1"
}
function set_p2_cell(cell_id) {
    var cell = document.getElementById(cell_id);
    cell.classList.add("disabled");
    cell.disabled = true;
    cell.classList.add("btn-danger");
    cell.classList.remove("btn-outline-primary");
    cell.classList.remove("btn-info");
    cell.textContent = "P2"
}
function set_blocked_cell(cell_id) {
    var cell = document.getElementById(cell_id);
    cell.classList.add("disabled");
    cell.disabled = true;
    cell.classList.add("btn-primary");
    cell.classList.remove("btn-outline-primary");
    cell.textContent = "B"
}
function set_default_cell(cell_id) {
    var cell = document.getElementById(cell_id);
    cell.classList.remove("disabled");
    cell.disabled = false;
    cell.classList = "btn btn-outline-primary game-btn mb-1 text-center";
    cell.textContent = "A"
}

function paint_cell(cell) {
    if (player === "p1"){
        set_p1_cell(cell.id);
    } else {
        set_p2_cell(cell.id);
    }
}