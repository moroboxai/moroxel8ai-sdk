// SDK version
export const VERSION = "0.1.0-alpha.3";

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
    /** Screen width (128) */
    SWIDTH: number;

    /** Screen height (128) */
    SHEIGHT: number;

    /** Maximum number of tilemaps */
    TNUM: number;

    /** Maximum number of sprites */
    SNUM: number;

    /** Default mode where the drawing order is decided by the CPU */
    MDEFAULT: number;

    /** Draw mode where you control the drawing order yourself */
    MDRAW: number;

    /** Left button */
    BLEFT: number;

    /** Right button */
    BRIGHT: number;

    /** Up button */
    BUP: number;

    /** Down button */
    BDOWN: number;

    /**
     * Print a message to the console.
     * @param {any[]} values - what to print
     */
    print(...values: any[]): void;

    /**
     * Get the state of a button.
     * @param {number} id - button id
     * @returns true if pressed
     */
    btn(id: number): boolean;

    /**
     * Get the selected mode.
     * @returns mode
     */
    mode(): number;

    /**
     * Set the selected mode.
     * @param {number} value - mode
     */
    mode(value: number): void;

    /**
     * Get the draw color.
     * @return {number} - color
     */
    color(): number;

    /**
     * Set the draw color (only with MDRAW).
     * @param {number} col - color
     */
    color(col: number): void;
    
    /**
     * Clear the screen (only with MDRAW).
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
     * Set the color of an individual pixel (only with MDRAW).
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
     * Get the origin attribute of a sprite.
     * @param {number} id - sprite id
     * @return {any} - attributes
     */
    sorigin(id: number): { x: number, y: number };

    /**
     * Set the origin attribute of a sprite.
     * @param {number} id - sprite id
     * @param {number} x - x-coordinate
     * @param {number} y - y-coordinate
     */
    sorigin(id: number, x: number, y: number): void;

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

    /**
     * Draw a sprite (only with MDRAW).
     */
    sdraw(id: number): void;
}

/**
 * Signature of the boot function your game must export.
 */
export interface IBoot {
    (vm: IMoroxel8AI): IGame;
}
