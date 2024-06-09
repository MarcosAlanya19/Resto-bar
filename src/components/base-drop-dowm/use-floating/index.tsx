import type { ComputePositionConfig, ComputePositionReturn, Middleware, SideObject, VirtualElement } from '@floating-ui/core';
import { MutableRefObject } from 'react';
export { autoPlacement, flip, hide, offset, shift, limitShift, size, inline, getOverflowAncestors, detectOverflow, autoUpdate, } from '@floating-ui/dom';
declare type Data = Omit<ComputePositionReturn, 'x' | 'y'> & {
    x: number | null;
    y: number | null;
};
declare type UseFloatingReturn = Data & {
    update: () => void;
    reference: (node: Element | VirtualElement | null) => void;
    floating: (node: HTMLElement | null) => void;
    refs: {
        reference: MutableRefObject<Element | VirtualElement | null>;
        floating: MutableRefObject<HTMLElement | null>;
    };
};
export declare function useFloating({ middleware, placement, strategy, }?: Omit<Partial<ComputePositionConfig>, 'platform'>): UseFloatingReturn;
export declare const arrow: (options: {
    element: MutableRefObject<HTMLElement | null> | HTMLElement;
    padding?: number | SideObject;
}) => Middleware;
