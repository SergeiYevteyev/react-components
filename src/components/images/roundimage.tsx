import React from 'react'
import Image, { ImageProps } from './image'

function RoundImage(props: ImageProps) {
    return (
        <div className="form-circle">
            <Image description = {props.description} filelocation={props.filelocation} />
        </div>
    )
}

export default RoundImage