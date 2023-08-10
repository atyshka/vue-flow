export declare function isMouseEvent(event: MouseEvent | TouchEvent): event is MouseEvent;
export declare function getEventPosition(event: MouseEvent | TouchEvent, bounds?: DOMRect): {
    x: number;
    y: number;
};
export declare function isString(val: any): val is string;
export declare function isFunction(val: any): val is Function;
export declare function isBoolean(val: any): val is boolean;
export declare function isNumber(val: any): val is number;
