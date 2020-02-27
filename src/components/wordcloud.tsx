import React from 'react'
import Image from 'react-bootstrap/Image'

export interface WordCloudProps {
    imageUrl: string
    description: string
}

function WordCloud(props: WordCloudProps) {
    return <Image alt={props.description} src={props.imageUrl} roundedCircle />
}

export default WordCloud