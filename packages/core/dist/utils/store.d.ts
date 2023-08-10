import type { Actions, Connection, Edge, GraphEdge, GraphNode, Node, State } from "../types";
type NonUndefined<T> = T extends undefined ? never : T;
export declare function isDef<T>(val: T): val is NonUndefined<T>;
export declare function addEdgeToStore(edgeParams: Edge | Connection, edges: Edge[], onError: State['hooks']['error']['trigger']): false | (import("../types").DefaultEdge<any, any, string> & {
    selected: boolean;
    sourceNode: GraphNode<any, any, string>;
    targetNode: GraphNode<any, any, string>;
    data: any;
    events: Partial<import("../types").EdgeEventsHandler<any>>;
    type: string;
} & import("../types").EdgePositions);
export declare function updateEdgeAction(edge: GraphEdge, newConnection: Connection, edges: GraphEdge[], findEdge: Actions['findEdge'], shouldReplaceId: boolean, onError: State['hooks']['error']['trigger']): false | {
    id: string;
    source: string;
    target: string;
    sourceHandle: string | null | undefined;
    targetHandle: string | null | undefined;
    label?: string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | import("vue").Component<import("../types").EdgeTextProps, any, any, import("vue").ComputedOptions, import("vue").MethodOptions> | undefined;
    type: string;
    animated?: boolean | undefined;
    markerStart?: import("../types").EdgeMarkerType | undefined;
    markerEnd?: import("../types").EdgeMarkerType | undefined;
    updatable?: import("../types").EdgeUpdatable | undefined;
    selectable?: boolean | undefined;
    focusable?: boolean | undefined;
    deletable?: boolean | undefined;
    class?: string | import("../types").ClassFunc<GraphEdge<any, any, string>> | undefined;
    style?: import("../types").Styles | import("../types").StyleFunc<GraphEdge<any, any, string>> | undefined;
    hidden?: boolean | undefined;
    interactionWidth?: number | undefined;
    template?: import("../types").EdgeComponent | undefined;
    data: any;
    events: Partial<import("../types").EdgeEventsHandler<any>>;
    zIndex?: number | undefined;
    ariaLabel?: string | null | undefined;
    labelStyle?: import("vue").CSSProperties | undefined;
    labelShowBg?: boolean | undefined;
    labelBgStyle?: import("vue").CSSProperties | undefined;
    labelBgPadding?: [number, number] | undefined;
    labelBgBorderRadius?: number | undefined;
    selected: boolean;
    sourceNode: GraphNode<any, any, string>;
    targetNode: GraphNode<any, any, string>;
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
};
export declare function createGraphNodes(nodes: Node[], currGraphNodes: GraphNode[], findNode: Actions['findNode'], onError: State['hooks']['error']['trigger']): GraphNode<any, any, string>[];
export {};
