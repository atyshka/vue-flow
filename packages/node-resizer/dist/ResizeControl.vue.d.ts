import type { OnResize, OnResizeStart, ResizeControlProps } from './types';
import { ResizeControlVariant } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ResizeControlProps>, {
    variant: ResizeControlVariant;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    keepAspectRatio: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    resizeStart: (resizeEvent: OnResizeStart) => void;
    resize: (resizeEvent: OnResize) => void;
    resizeEnd: (resizeEvent: OnResizeStart) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ResizeControlProps>, {
    variant: ResizeControlVariant;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    keepAspectRatio: boolean;
}>>> & {
    onResizeStart?: ((resizeEvent: OnResizeStart) => any) | undefined;
    onResize?: ((resizeEvent: OnResize) => any) | undefined;
    onResizeEnd?: ((resizeEvent: OnResizeStart) => any) | undefined;
}, {
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    variant: ResizeControlVariant;
    keepAspectRatio: number | boolean;
}>, {
    default?(_: {}): any;
}>;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
