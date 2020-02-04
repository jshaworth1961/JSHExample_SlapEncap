import Target from '../models/Target.js';

let _target = new Target("Bob", 100, 1, 5, 10);


export default class GameService {

    constructor() {
        console.log(`In the GameService constructor`);
    }

    slap() {
        console.log('You got slapped');
        _target.health -= _target.attacks.slap
        console.log(_target.health);
    }

    get Target() {
        //return _target;
        //make new copy
        return new Target(_target.name, _target.health, _target.slap, _target.punch, _target.kick);
    }




}