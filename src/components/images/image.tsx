import React from 'react'

export interface ImageProps { description: string; filelocation: string; }

function Image(props: ImageProps) {
    return(
    <img alt={props.description} src={props.filelocation}></img>)
}

export default Image