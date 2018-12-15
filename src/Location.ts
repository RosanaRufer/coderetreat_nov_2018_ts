export class Location {
  public x: number
  public y: number
  constructor(x: number, y: number) {
      this.x = x
      this.y = y
  }
  public getNeighbors(): Location[] {
      const x = this.x
      const y = this.y
      return [
          new Location(x - 1, y - 1), new Location(x, y - 1),
          new Location(x + 1, y - 1), new Location(x - 1, y),
          new Location(x + 1, y), new Location(x - 1, y + 1),
          new Location(x, y + 1), new Location(x + 1, y + 1)
      ]
  }
}
