import React from 'react'

export interface HeaderProps {
    description: string
}

function Header(props: HeaderProps) {
return <h2>{props.description}</h2>
}

export default Header