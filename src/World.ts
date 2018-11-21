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

    public tick(): void {
        const nextAliveCellsLocations: Location[] = []
        this.LocationsWithAliveCells = nextAliveCellsLocations
    }
}
