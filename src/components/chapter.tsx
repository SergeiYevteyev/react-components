import React from 'react'

export interface ChapterProps {
    header: string
    text: string    
}

export function createChapter(header: string, text: string) : ChapterProps{
    return {
        header: header,
        text: text     
    }
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