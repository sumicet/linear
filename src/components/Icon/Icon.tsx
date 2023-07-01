import { IconProps as ChakraIconProps } from '@chakra-ui/react';
import {
    CashAppLogo,
    DescriptLogo,
    Logo,
    LoomLogo,
    RampLogo,
    RaycastLogo,
    VercelLogo,
    MercuryLogo,
    RetoolLogo,
    AlanLogo,
    ArcLogo,
    OpenSeaLogo,
    PitchLogo,
    Twitter,
    GitHub,
    Slack,
    LogoSmall,
    Assign,
    Status,
    Priority,
    Label,
} from './icons';

const icons = {
    logo: Logo,
    logoSmall: LogoSmall,
    rampLogo: RampLogo,
    loomLogo: LoomLogo,
    vercelLogo: VercelLogo,
    descriptLogo: DescriptLogo,
    cashAppLogo: CashAppLogo,
    raycastLogo: RaycastLogo,
    mercuryLogo: MercuryLogo,
    retoolLogo: RetoolLogo,
    alanLogo: AlanLogo,
    arcLogo: ArcLogo,
    openSeaLogo: OpenSeaLogo,
    pitchLogo: PitchLogo,
    twitter: Twitter,
    gitHub: GitHub,
    slack: Slack,
    assign: Assign,
    status: Status,
    priority: Priority,
    label: Label,
} as const;

export interface IconProps extends ChakraIconProps {
    type: keyof typeof icons;
}

export function Icon(props: IconProps) {
    const { type, ...other } = props;
    const Component = icons[type];

    /**
     * Setting the height and width to auto prevents safari from assigning a
     * default number.
     * @see https://stackoverflow.com/a/26105445/19391114
     */
    return <Component height='auto' width='auto' {...other} />;
}
