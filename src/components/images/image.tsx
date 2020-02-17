import React from 'react'
import imageprop from './imageprop'

function image(props: imageprop) {
    return(
    <img alt={props.description} src={props.filelocation}></img>)
}

export default image