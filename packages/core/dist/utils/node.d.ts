import type { Ref } from 'vue';
import type { Actions, GraphNode, HandleElement } from "../types";
export declare function getHandleBounds(selector: string, nodeElement: HTMLDivElement, zoom: number): HandleElement[] | undefined;
export declare function handleNodeClick(node: GraphNode, multiSelectionActive: boolean, addSelectedNodes: Actions['addSelectedNodes'], removeSelectedNodes: Actions['removeSelectedNodes'], nodesSelectionActive: Ref<boolean>, unselect: boolean | undefined, nodeEl: HTMLDivElement): void;
