import {Cell, Location} from './Cell'
import {World} from './World'

describe('getAliveLocations', () => {
    it('There should not be any alive cell in a new world', () => {
        const world = new World()
        expect(world.getAliveCellsLocations()).toEqual([])
    })
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

describe('isThereALivingCellAt', () => {
    it('For a new world, at a given location, no cell should be alive', () => {
        const world = new World()
        const irrelevantLocation = new Location(1, 1)
        const alive = world.isThereALivingCellAt(irrelevantLocation)
        expect(alive).toBeFalsy()
    })

    it('For a world that has a given cell, such cell should be alive', () => {
        const world = new World()
        const irrelevantLocation = new Location(1, 1)
        world.addLivingCellAt(irrelevantLocation);
        const alive = world.isThereALivingCellAt(irrelevantLocation)
        expect(alive).toBeTruthy()
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
