import {Cell, Location} from './Cell'
import {World} from './World'

describe('getAliveLocations', () => {
    it('The World can return a collection of alive cells locations', () => {
        const firstLocation = new Location(1, 2)
        const secondLocation = new Location( 2, 4)
        const expectedLocations = [firstLocation, secondLocation]
        const world = new World()
        world.addLivingCellAt(firstLocation)
        world.addLivingCellAt(secondLocation)
        const aliveCellsLocations = world.getAliveCellsLocations()

        expect(aliveCellsLocations).toEqual(expectedLocations)
    })
})

describe('tick', () => {
    it('Given a world with a single cell, no cells should survive', () => {
        const aLocation = new Location(1, 2)
        const world = new World()
        world.addLivingCellAt(aLocation)
        world.tick()
        expect(world.getAliveCellsLocations()).toEqual([])
    })
})
