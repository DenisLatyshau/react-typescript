import React, { FC, useState } from "react";

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string
    height?: string
    children?: JSX.Element | React.ReactElement
    variant: CardVariant
}

const Card: FC<CardProps> = ({width, height, children, variant}) => {
    const [state, setState] = useState(0)

    return (
        <div style={{width, height, 
            border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : ''
        }}>
            { children }
        </div>
    )
}

export default Card