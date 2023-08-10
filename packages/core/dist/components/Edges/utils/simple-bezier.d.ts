import { Position } from "../../../types";
export interface GetSimpleBezierPathParams {
    sourceX: number;
    sourceY: number;
    sourcePosition?: Position;
    targetX: number;
    targetY: number;
    targetPosition?: Position;
    controlOffsetX?: number;
    controlOffsetY?: number;
}
export declare function getSimpleBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition, controlOffsetX, controlOffsetY, }: GetSimpleBezierPathParams): [path: string, labelX: number, labelY: number, offsetX: number, offsetY: number];
