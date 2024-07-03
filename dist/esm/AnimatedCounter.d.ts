import React, { CSSProperties } from "react";
import './styles.css';
export interface AnimatedCounterProps {
    value?: number;
    fontSize?: string;
    color?: string;
    duration?: number;
    containerStyles?: CSSProperties;
    digitStyles?: CSSProperties;
}
export interface NumberColumnProps {
    digit: string;
    delta: string | null;
    fontSize: string;
    color: string;
    duration: number;
    digitStyles: CSSProperties;
}
export interface DecimalColumnProps {
    fontSize: string;
    color: string;
    isComma: boolean;
    digitStyles: CSSProperties;
}
declare const AnimatedCounter: ({ value, fontSize, color, duration, containerStyles, digitStyles, }: AnimatedCounterProps) => React.JSX.Element;
export default AnimatedCounter;
