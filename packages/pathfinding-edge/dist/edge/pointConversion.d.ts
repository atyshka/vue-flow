import type { XYPosition } from '@vue-flow/core';
/**
 * Each bounding box is a collection of X/Y points in a graph, and we
 * need to convert them to "occupied" cells in a 2D grid representation.
 *
 * The top most position of the grid (grid[0][0]) needs to be equivalent
 * to the top most point in the graph (the graph.topLeft point).
 *
 * Since the top most point can have X/Y values different than zero,
 * and each cell in a grid represents a 10x10 pixel area in the grid,
 * there's need to be a conversion between a point in a graph to a point
 * in the grid.
 *
 * We do this conversion by dividing a graph point X/Y values by 10, and
 * "shifting" their values up or down, depending on the values of the top most
 * point in the graph. The top most point in the graph will have the smallest
 * values for X and Y.
 *
 * We avoid setting nodes in the border of the grid (x=0 or y=0), so there's
 * always a "walkable" area around the grid.
 */
export declare function graphToGridPoint(graphPoint: XYPosition, smallestX: number, smallestY: number): XYPosition;
/**
 * Converts a grid point back to a graph point, using the reverse logic of
 * graphToGridPoint.
 */
export declare function gridToGraphPoint(gridPoint: XYPosition, smallestX: number, smallestY: number): XYPosition;
