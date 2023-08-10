import type { ComputedGetters, State, ViewportFunctions } from "../types";
interface ExtendedViewport extends ViewportFunctions {
    initialized: boolean;
}
export declare function useViewport(state: State, getters: ComputedGetters): import("vue").ComputedRef<ExtendedViewport>;
export {};
