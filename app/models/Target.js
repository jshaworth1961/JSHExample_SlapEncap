


export default class Target {
    constructor(name, health, slap, kick, punch) {
        this.name = name;
        this.health = health;
        this.slap = slap;
        this.attacks =
        {
            slap: slap,
            kick: kick,
            punch: punch
        }
    }
}