from random import randint
import logging
import os 
log = logging.getLogger(__name__)
log.setLevel(logging.DEBUG)

ch = logging.StreamHandler()
ch.setLevel(logging.DEBUG)

import multiprocessing
import threading

process_name = multiprocessing.current_process().name
thread_name = threading.current_thread().name

formatter = logging.Formatter('%(processName)s %(threadName)s %(asctime)s - %(name)s - %(levelname)s - %(message)s')
ch.setFormatter(formatter)

log.addHandler(ch)


class GamesManager():

    def __init__(self):
        self.games = {}

    def get_new_game_id(self):
        state = True
        
        while(state):
            value = randint(1000, 4000)
            if value not in self.games.keys():            
                return value

    def get_game(self, id):
        id = int(id)
        log.debug('games: {}'.format([str(k) for k in self.games.keys()]))
        log.debug('games: {}'.format([type(k) for k in self.games.keys()]))
        log.debug(type(id))
        return self.games[id]

    def create_new_game(self, game_type, rows, cols):
        game_id = self.get_new_game_id()
        log.debug('game id: {} {}'.format(game_id, type(game_id)))
        self.games[game_id] = Game(game_type, rows, cols)
        
        log.debug('games: {}'.format([k for k in self.games.keys()]))
        return game_id


log.debug('CREATING GAME MANAGER')
game_manager = GamesManager()
log.info('game manager: {}'.format(game_manager))