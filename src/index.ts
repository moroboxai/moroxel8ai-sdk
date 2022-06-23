// SDK version
export const VERSION = "0.1.0-alpha.5";

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

    /** First player */
    P1: number;

    /** Second player */
    P2: number;

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

    //############
    // PLAYER API
    //############

    /**
     * Send the game state to all players.
     * @param {any} val - game state 
     */
    state(val: any): void;

    /**
     * Send the game state to selected player.
     * @param {number} pid - player id
     * @param {any} val - game state 
     */
    state(pid: number, val: any): void;

    /**
     * Get the state of a button for P1.
     * @param {number} bid - button id
     * @returns true if pressed
     */
    btn(bid: number): boolean;

    /**
     * Get the state of a button.
     * @param {number} pid - player id
     * @param {number} bid - button id
     * @returns true if pressed
     */
    btn(pid: number, bid: number): boolean;

    /**
     * Get if an AI is bound to a player controller.
     * @param {number} pid - player id
     * @returns {boolean} true if AI bound
     */
    pbound(pid: number): boolean;

    /**
     * Get the label of a player.
     * @param {number} pid - player id
     * @returns {string} player label
     */
    plabel(pid: number): string;

    //############
    // TILEMAP API
    //############

    /**
     * Select a tilemap by its unique id.
     * @param {string} id - tilemap unique id
     */
    tmap(id: string): void;

    //############
    // MAP API
    //############

    /**
     * Select map mode (8 | 16 | 32 | 64) pixels.
     * 
     * This allows mtile to works on 8x8, 16x16, ... tiles.
     * 
     * @param {number} val - new mode
     */
    mmode(val: number): void;

    /**
     * Clear the map tiles.
     */
    mclear(): void;

    /**
     * Set a tile on the map.
     * 
     * x and y are affected by mode, meaning that x=1 corresponds
     * to the second tile if mode is 8, or the fourth tile if mode
     * is 16.
     * 
     * If w > 1 or h > 1, then it sets the [x, x+w[ and [y, y+h[ tiles
     * of the map.
     * 
     * @param {number} x - horizontal position
     * @param {number} y - vertical position
     * @param {number} i - tile position
     * @param {number} j - tile position
     * @param {number} w - tile width
     * @param {number} h - tile height
     */
    mtile(x: number, y: number, i: number, j: number, w?: number, h?: number): void;

    /**
     * Scroll map to position.
     * 
     * This is not affected by mode.
     * 
     * @param {number} x - horizontal position
     * @param {number} y - vertical position
     */
    mscroll(x: number, y: number): void;

    //###########
    // SPRITE API
    //###########

    /**
     * Assign a tile to a sprite.
     * @param {number} id - sprite id
     * @param {number} i - tile position
     * @param {number} j - tile position
     * @param {number} w - tile width
     * @param {number} h - tile height
     */
    stile(id: number, i: number, j: number, w?: number, h?: number): void;

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
    sscale(id: number): { x: number, y: number };

    /**
     * Set the scales attributes of a sprite.
     * @param {number} id - sprite id
     * @param {number} x - horizontal scale
     * @param {number} y - vertical scale
     */
    sscale(id: number, x: number, y: number): void;

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

    //###########
    // MATH API
    //###########

    abs(val: number): number;
    floor(val: number): number;
    ceil(val: number): number;
    sign(val: number): number;
    min(a: number, b: number): number;
    max(a: number, b: number): number;
    clamp(val: number, min: number, max: number): number;
}

/**
 * Signature of the boot function your game must export.
 */
export interface IBoot {
    (vm: IMoroxel8AI): IGame;
}
