import React from 'react';

type RandomNumber = {
    value: string
}

type PositiveNumber = RandomNumber & {
    isPositive: boolean,
    isNegative?: never,
    isZero?: never,

}

type NegativeNumber = RandomNumber & {
    isNegative: boolean,
    isPositive?: never,
    isZero?: never,
    
}
type Zero = RandomNumber & {
    isZero: boolean,
    isPositive?: never,
    isNegative?: never,
}

type RandomNumbersProps = PositiveNumber | NegativeNumber | Zero;

const RandomNumbers = ({
    value,
    isPositive,
    isNegative,
    isZero,
}: RandomNumbersProps) => {
  return (
    <div>
        {value} {isPositive && 'postive'} {isNegative && 'negative'} {' '}
        {isZero && 'zero'}
    </div>
  )
}

export default RandomNumbers