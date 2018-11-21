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
        return this.LocationsWithAliveCells.indexOf(location) !== -1
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
        this.LocationsWithAliveCells = nextAliveCellsLocations
    }
}
