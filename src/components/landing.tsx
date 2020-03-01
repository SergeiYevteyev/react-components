import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AboutMe, { AboutMeProps } from './aboutme'
import PrettyFace, { PrettyFaceProps } from './prettyface'
import Chapter, { ChapterProps } from './chapter'
import WordCloud from './wordcloud'
import LineBreak from './linebreak'
import Chapters, { ChaptersProps } from './chapters'

export interface LandingInterface {
    aboutMe: AboutMeProps
    prettyFace: PrettyFaceProps
    motto: Motto
    experience: ChapterProps[]
}

export interface Motto {
    chapter: ChapterProps
    techStack: string
}

export function createMotto(chapter: ChapterProps, techStack: string) : Motto {
    return {
        chapter: chapter,
        techStack: techStack
    }
}

function Landing(props: LandingInterface) {
    return (
        <Container>
            <Row>
                <Col xs={8}>
                <AboutMe dateOfBirth={props.aboutMe.dateOfBirth} email={props.aboutMe.email} firstName={props.aboutMe.firstName} lastName={props.aboutMe.lastName} linkedInProfile={props.aboutMe.linkedInProfile} />
                </Col>
                <Col xs={4}>
                    <PrettyFace description={props.prettyFace.description} imageUrl={props.prettyFace.imageUrl} />
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={8}>
                    <Chapter header={props.motto.chapter.header} text={props.motto.chapter.text} />
                </Col>
                <Col xs={12} sm={4}>
                    <WordCloud imageUrl={props.motto.techStack} description='' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <LineBreak />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Chapters Chapter={props.experience} />
                </Col>
            </Row>
        </Container>
    )
}

export default Landing