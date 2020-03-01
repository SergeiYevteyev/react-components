import React from 'react'
import Chapter, { ChapterProps } from './chapter'

export interface ChaptersProps {
    Chapter: ChapterProps[]
}

export class ChaptersPropsBuilder {
    chapters: ChaptersProps;

    /**
     *
     */
    constructor() {
        this.chapters = {Chapter: []}
    }

    Add(chapter: ChapterProps) : ChaptersPropsBuilder {
        this.chapters.Chapter.push(chapter);
        return this;
    }

    Build() : ChaptersProps {
        return this.chapters;
    }
}

export function buildChapters() : ChaptersPropsBuilder {
    return new ChaptersPropsBuilder()
}

function Chapters(props: ChaptersProps) {
    return (<div>
        props.Chapter.forEach((value: ChapterProps) => renderChapter(value)))
        </div>)
}

function renderChapter(chapter: ChapterProps) {
    return (<Chapter header={chapter.header} text={chapter.text} />)
}

export default Chapters;