// SDK version
export const VERSION = "0.1.0-alpha.1";

/**
 * Interface your game must implements.
 */
export interface IGame {
    tick(deltaTime: number): void;
}

/**
 * Interface for the CPU.
 */
export interface IMoroxel8AI {
    /** Maximum number of tilemaps */
    TNUM: number;

    /** Maximum number of sprites */
    SNUM: number;

    /**
     * Print a message to the console.
     * @param {any[]} values - what to print
     */
    print(...values: any[]): void;

    /**
     * Get the draw color.
     * @return {number} - color
     */
    color(): number;

    /**
     * Set the draw color.
     * @param {number} col - color
     */
    color(col: number): void;
    
    /**
     * Clear the screen.
     * @param {number} col - color
     */
    cls(col?: number): void;

    /**
     * Get the selected tilemap.
     * @return {string} - tilemap name
     */
    tmap(): string;

    /**
     * Set the selected tilemap.
     * @param {string} id - tilemap name
     */
    tmap(id: string): void;

    /**
     * Get the color of an individual pixel.
     * @param {number} x - x-coordinate
     * @param {number} y - y-coordinate
     * @return {number} - color
     */
    pget(x: number, y: number): number;

    /**
     * Set the color of an individual pixel.
     * @param {number} x - x-coordinate
     * @param {number} y - y-coordinate
     * @param {number} col - color
     */
    pset(x: number, y: number, col?: number): void;

    /**
     * Get the tile assigned to a sprite.
     * @param {number} id - sprite id
     * @return {number} - tile
     */
    stile(id: number): number;

    /**
     * Assign a tile to a sprite.
     * @param {number} id - sprite id
     * @param {number} tile - tile id
     */
    stile(id: number, tile: number): void;

    /**
     * Get the position attribute of a sprite.
     * @param {number} id - sprite id
     * @return {any} - attributes
     */
    spos(id: number): { x: number, y: number };

    /**
     * Set the position attribute of a sprite.
     * @param {number} id - sprite id
     * @param {number} x - x-coordinate
     * @param {number} y - y-coordinate
     */
    spos(id: number, x: number, y: number): void;

    /**
     * Get the visibility of a sprite.
     * @param {number} id - sprite id
     * @return {boolean} - visibility
     */
    sshow(id: number): boolean;

    /**
     * Change the visibility of a sprite.
     * @param {number} id - sprite id
     * @param {boolean} v - visibility
     */
    sshow(id: number, v: boolean): void;

    /**
     * Get the flip attributes of a sprite.
     * @param {number} id - sprite id
     * @return {any} - attributes
     */
    sflip(id: number): { h: boolean, v: boolean };

    /**
     * Set the flips attributes of a sprite.
     * @param {number} id - sprite id
     * @param {number} h - horizontal flip
     * @param {number} v - vertical flip
     */
    sflip(id: number, h: boolean, v: boolean): void;

    /**
     * Get the scales attributes of a sprite.
     * @param {number} id - sprite id
     * @return {any} - attributes
     */
    sscale(id: number): { h: number, v: number };

    /**
     * Set the scales attributes of a sprite.
     * @param {number} id - sprite id
     * @param {number} h - horizontal scale
     * @param {number} v - vertical scale
     */
    sscale(id: number, h: number, v: number): void;

    /**
     * Get the rotation attribute of a sprite.
     * @param {number} id - sprite id
     * @return {number} - attributes
     */
    srot(id: number): number;

    /**
     * Set the rotation attribute of a sprite.
     * @param {number} id - sprite id
     * @param {number} a - angle in degrees
     */
    srot(id: number, a: number): void;
}

/**
 * Signature of the boot function your game must export.
 */
export interface IBoot {
    (vm: IMoroxel8AI): IGame;
}
