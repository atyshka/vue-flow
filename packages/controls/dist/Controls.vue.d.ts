import type { ControlProps } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<ControlProps>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    zoomIn: () => void;
    zoomOut: () => void;
    fitView: () => void;
    interactionChange: (active: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<ControlProps>>> & {
    onZoomIn?: (() => any) | undefined;
    onZoomOut?: (() => any) | undefined;
    onFitView?: (() => any) | undefined;
    onInteractionChange?: ((active: boolean) => any) | undefined;
}, {}>, {
    top?(_: {}): any;
    "control-zoom-in"?(_: {}): any;
    "icon-zoom-in"?(_: {}): any;
    "control-zoom-out"?(_: {}): any;
    "icon-zoom-out"?(_: {}): any;
    "control-fit-view"?(_: {}): any;
    "icon-fit-view"?(_: {}): any;
    "control-interactive"?(_: {}): any;
    "icon-unlock"?(_: {}): any;
    "icon-lock"?(_: {}): any;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
