import React from 'react'

export interface HeaderProps {
    description: string
}

function Header(props: HeaderProps) {
return <h1>{props.description}</h1>
}

export default Header