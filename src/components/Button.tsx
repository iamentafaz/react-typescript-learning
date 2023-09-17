import React from 'react';

type ButttonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

function Button(props: ButttonProps) {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click button</button>
  )
}

export default Button