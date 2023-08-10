import type { ComputedRef } from 'vue';
import type { Actions, ComputedGetters, State } from "../types";
export declare function useActions(state: State, getters: ComputedGetters, nodeIds: ComputedRef<string[]>, edgeIds: ComputedRef<string[]>): Actions;
