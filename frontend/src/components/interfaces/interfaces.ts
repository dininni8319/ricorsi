import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface FormProps {
    title: string,
    formArr: any,
    subMitBtn: string,
    /*onSubmit: any,
    redirect: any */
};

export interface PropsInput {
    typeIn: string,
    label: string,
    name: string,
};

export interface PropsIcons {
    fontIcon: IconProp,
    href: string
};

export interface LogoProps {
    imageUrl: string | undefined;
    w: string,
    h: string
};