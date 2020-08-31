from flask import Blueprint, render_template, request, redirect, url_for
import logging
from webserver.game_manager import game_manager

routes_bp = Blueprint('routes', __name__)

log = logging.getLogger(__name__)
log.setLevel(logging.DEBUG)

ch = logging.StreamHandler()
ch.setLevel(logging.DEBUG)

formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
ch.setFormatter(formatter)

log.addHandler(ch)


default_rows = 10
default_cols = 7
default_game_num = 1
default_game = "game" + str(default_game_num)


@routes_bp.route('/home', methods=('POST','GET'))
@routes_bp.route('/', methods=('POST','GET'))
def home():
    if request.method == 'POST':
        log.info("restarting game with parameters")
        game_type = request.form['radio-game']
        rows = int(request.form.get('board-rows'))
        cols = int(request.form.get('board-cols'))

    else:
        log.info("reseting game with default values")
        game_type = default_game
        rows = default_rows
        cols = default_cols
    
    return render_template("board{}.html".format(game_type[4:]), game_num=game_type[4:], min_col=7, max_col=15,  min_row=10, max_row=16, rows=rows, cols=cols)
    

@routes_bp.route('/game/<int:game_num>')
def game(game_num):
    log.info("layer_name: {}".format(game_num))
    return render_template("board{}.html".format(game_num), game_num=3, min_col=5, max_col=10,  min_row=5, max_row=10, rows=6, cols=6, init_state=True)