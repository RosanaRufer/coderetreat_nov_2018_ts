import {Cell} from './Cell'
import {Location} from './Location'

describe('Tests for Cell', () => {
    it('should know whether its alive or not', () => {
        const isAlive = true
        const cell = new Cell(isAlive)
        expect(cell.isAlive()).toEqual(isAlive)
    })

    it('should know its own location', () => {
        const aLocation = new Location(2, 5)
        const irrelevant = true
        const cell = new Cell(irrelevant, aLocation)
        expect(cell.getLocation()).toEqual(aLocation)
    })
    it('a cell should know the location of its neighbours', () => {
        const irrelevant = false
        const cell = new Cell(irrelevant, new Location(3, 3))
        const expectedNeighbours = [
            new Location(2, 2), new Location(3, 2),
            new Location(4, 2), new Location(2, 3),
            new Location(4, 3), new Location(2, 4),
            new Location(3, 4), new Location(4, 4)
        ]
        const neighbours = cell.getNeighbors()

        expect(neighbours).toEqual(expectedNeighbours)
    })
})
