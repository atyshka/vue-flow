import type { OnResize, OnResizeStart, ResizeControlLineProps } from './types';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<ResizeControlLineProps>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    resizeStart: (resizeEvent: OnResizeStart) => void;
    resize: (resizeEvent: OnResize) => void;
    resizeEnd: (resizeEvent: OnResizeStart) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<ResizeControlLineProps>>> & {
    onResizeStart?: ((resizeEvent: OnResizeStart) => any) | undefined;
    onResize?: ((resizeEvent: OnResize) => any) | undefined;
    onResizeEnd?: ((resizeEvent: OnResizeStart) => any) | undefined;
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
