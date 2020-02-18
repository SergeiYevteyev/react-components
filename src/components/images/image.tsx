import React from 'react'

export interface ImageProps { description: string; filelocation: string; }

export function Image(props: ImageProps) {
    return(
    <img alt={props.description} src={props.filelocation}></img>)
}