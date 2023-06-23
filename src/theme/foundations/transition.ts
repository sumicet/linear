const transitionProperty = {
    common: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    dimensions: 'width, height',
    position: 'left, right, top, bottom',
    background: 'background-color, background-image, background-position',
};

const transitionTimingFunction = {
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
};

const transitionDuration = {
    quick: '0.1s',
    regular: '0.25s',
};

// CHAKRA-BUG: Write each property separately
// Eg transitionDuration: 'ultra-fast', transitionEasing: 'ease-in'
// Writing something like transition 'colors ultra-fast ease-in' won't work
export const transition = {
    property: transitionProperty,
    easing: transitionTimingFunction,
    duration: transitionDuration,
};
