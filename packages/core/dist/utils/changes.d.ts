import type { EdgeAddChange, EdgeChange, EdgeRemoveChange, EdgeSelectionChange, ElementChange, FlowElement, FlowElements, GraphEdge, GraphNode, NodeAddChange, NodeChange, NodeRemoveChange, NodeSelectionChange } from "../types";
export declare function applyChanges<T extends FlowElement = FlowElement, C extends ElementChange = T extends GraphNode ? NodeChange : EdgeChange>(changes: C[], elements: T[]): T[];
export declare function applyEdgeChanges(changes: EdgeChange[], edges: GraphEdge[]): GraphEdge<any, any, string>[];
export declare function applyNodeChanges(changes: NodeChange[], nodes: GraphNode[]): GraphNode<any, any, string>[];
export declare function createSelectionChange(id: string, selected: boolean): NodeSelectionChange | EdgeSelectionChange;
export declare function createAdditionChange<T extends GraphNode | GraphEdge = GraphNode, C extends NodeAddChange | EdgeAddChange = T extends GraphNode ? NodeAddChange : EdgeAddChange>(item: T): C;
export declare function createRemoveChange(id: string): NodeRemoveChange | EdgeRemoveChange;
export declare function getSelectionChanges(elements: FlowElements, selectedIds: string[]): {
    changedNodes: NodeSelectionChange[];
    changedEdges: EdgeSelectionChange[];
};
