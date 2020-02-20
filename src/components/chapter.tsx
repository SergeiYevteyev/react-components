import React from 'react'

export interface ChapterProps {
    header: string
    text: string
}

function Chapter(props: ChapterProps) {
    return (
        <div>
            <h3>{props.header}</h3>
    <span>{props.text}</span>
        </div>
    )
}

export default Chapter