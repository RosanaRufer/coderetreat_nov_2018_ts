import { Location } from './Location'

export class Cell {

    private alive: boolean
    private location: Location

    constructor(isAlive: boolean, location: Location = new Location(0, 0)) {
        this.alive = isAlive
        this.location = location
    }

    public isAlive(): boolean {
        return this.alive
    }
    public getLocation(): Location {
        return this.location
    }
    public getNeighbors(): Location[] {
        const x = this.location.x
        const y = this.location.y
        return [
            new Location(x - 1, y - 1), new Location(x, y - 1),
            new Location(x + 1, y - 1), new Location(x - 1, y),
            new Location(x + 1, y), new Location(x - 1, y + 1),
            new Location(x, y + 1), new Location(x + 1, y + 1)
        ]
    }
}
