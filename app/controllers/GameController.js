import GameService from "../services/GameService.js";


//everything up here is private

//use underscore to indicate "private"
let _gameService = new GameService(); //everything in this file can access this.

function _draw() {
    let target = _gameService.Target //Target is from getTarget
    document.getElementById('health').innerText = target.health;
}

export default class GameController {
    constructor() {
        console.log("The controller works", _gameService);
        _draw();
    }

    slap() {
        _gameService.slap()
        _draw();
    }
}