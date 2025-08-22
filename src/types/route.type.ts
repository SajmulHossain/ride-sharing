import type { ComponentType } from "react";

export interface INavLinks {
    path: string;
    label: string;
    Component: ComponentType
}