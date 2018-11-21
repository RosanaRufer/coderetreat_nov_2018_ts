import {Location} from './Cell'

export class World {

    private LocationsWithAliveCells: Location[] = []

    public addLivingCellAt(location: Location) {
        this.LocationsWithAliveCells.push(location)
    }

    public addLivingCellsAt(locations: Location[]) {
        locations.forEach((location) => this.addLivingCellAt(location))
    }

    public getAliveCellsLocations(): Location[] {
        return this.LocationsWithAliveCells
    }

    public isThereALivingCellAt(location: Location): boolean {
        return this.LocationsWithAliveCells
                        .find((aliveCell) =>
                            aliveCell.x === location.x &&
                            aliveCell.y === location.y) !== undefined
    }

    public willCellSurvive(neighboursCount: number): boolean {
        return neighboursCount === 2 ||
               neighboursCount === 3
    }

    public willCellResurrect(neighboursCount: number): boolean {
        return neighboursCount === 2
    }

    public tick(): void {
        const nextAliveCellsLocations: Location[] = []
        this.LocationsWithAliveCells.forEach((location: Location) => {
            const aliveNeigboursCount = this.getAliveNeighborsForLocation(location).length
            if (this.willCellSurvive(aliveNeigboursCount)) {
                nextAliveCellsLocations.push(location)
            }
        })
        this.LocationsWithAliveCells = nextAliveCellsLocations
    }

    public getAliveNeighborsForLocation(aLocation: Location): Location[] {
        return aLocation.getNeighbors().filter((location) => this.isThereALivingCellAt(location))
    }
}
