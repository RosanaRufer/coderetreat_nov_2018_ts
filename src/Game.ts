import {Cell, Location} from './Cell'
import {World} from './World'

export function game() {
    const world = new World()
    const cells = [
        new Location(1, 1),
        new Location(1, 2)
    ]
    world.addLivingCellsAt(cells)
}
