import React from 'react'
import Image from 'react-bootstrap/Image'

export interface PrettyFaceProps {
    imageUrl: string
    description: string
}

function PrettyFace(props: PrettyFaceProps) {
    return <Image alt={props.description} src={props.imageUrl} roundedCircle className="img-fluid" />
}

export function createInstance(description: string, imageUrl: string) : PrettyFaceProps {
    return {
        description: description,
        imageUrl: imageUrl
    }
}

export default PrettyFace