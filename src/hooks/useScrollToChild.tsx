import { useCallback, useRef } from 'react';

export function useScrollToChild() {
    const ref = useRef<HTMLDivElement>(null);

    const scrollToChild = useCallback((index: number) => {
        const element = ref.current;
        const child = element?.children[index] as HTMLDivElement | undefined;

        // The displayed width of the HStack, not the width of the scrolling area
        const elementWidth = element?.offsetWidth || 0;
        // Distance from the left of the HStack to the left of the button
        const childOffsetLeft = child?.offsetLeft || 0;
        const childWidth = child?.offsetWidth || 0;
        const scrollDistance =
            // Go back to center the button
            childOffsetLeft +
            childWidth / 2 -
            // Go to the center of the HStack
            elementWidth / 2;

        element?.scroll({
            left: scrollDistance,
            behavior: 'smooth',
        });
    }, []);

    return [ref, scrollToChild] as const;
}
