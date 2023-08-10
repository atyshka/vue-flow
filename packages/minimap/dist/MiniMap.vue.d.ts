import type { MiniMapProps } from './types';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<MiniMapProps>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "nodeClick" | "nodeDblclick" | "nodeMouseenter" | "nodeMousemove" | "nodeMouseleave")[], "click" | "nodeClick" | "nodeDblclick" | "nodeMouseenter" | "nodeMousemove" | "nodeMouseleave", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<MiniMapProps>>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onNodeClick?: ((...args: any[]) => any) | undefined;
    onNodeDblclick?: ((...args: any[]) => any) | undefined;
    onNodeMouseenter?: ((...args: any[]) => any) | undefined;
    onNodeMousemove?: ((...args: any[]) => any) | undefined;
    onNodeMouseleave?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
