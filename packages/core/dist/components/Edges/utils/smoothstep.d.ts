import { Position } from "../../../types";
export interface GetSmoothStepPathParams {
    sourceX: number;
    sourceY: number;
    sourcePosition?: Position;
    targetX: number;
    targetY: number;
    targetPosition?: Position;
    borderRadius?: number;
    centerX?: number;
    centerY?: number;
    offset?: number;
}
export declare function getSmoothStepPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition, borderRadius, centerX, centerY, offset, }: GetSmoothStepPathParams): [path: string, labelX: number, labelY: number, offsetX: number, offsetY: number];
