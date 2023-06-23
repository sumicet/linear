import { ThemeConfig } from '@chakra-ui/theme';
import { components } from './components';
import { foundations } from './foundations';

const config: ThemeConfig = {
    useSystemColorMode: true,
    // TODO: Change to `system` after fully configuring the dark theme (needs
    // design input).
    initialColorMode: 'dark',
    // The prefix for all CSS custom properties (CSS variables).
    cssVarPrefix: 'linear',
};

/**
 * No point in using `extendBaseTheme` as suggested in the documentation cus we
 * don't want any predefined styles.
 * @see https://chakra-ui.com/getting-started#chakrabaseprovider
 *
 * Longer explanation:
 * `extendBaseTheme` merges our custom theme with Chakra's `baseTheme`, which
 * contains the following objects we don't need: `semanticTokens`, `styles`, and `config`.
 * @see https://github.com/chakra-ui/chakra-ui/blob/2456a7090439ebd1a1d1cdee36daa472d12ce6f7/packages/components/theme/src/index.ts#L31
 * @see https://github.com/chakra-ui/chakra-ui/blob/2456a7090439ebd1a1d1cdee36daa472d12ce6f7/packages/utilities/theme-utils/src/extend-theme.ts#L119
 */
export const theme = {
    components,
    ...foundations,
    config,
};
