import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AboutMe, { AboutMeProps } from './aboutme'
import PrettyFace, { PrettyFaceProps } from './prettyface'
import Chapter, { ChapterProps } from './chapter'
import WordCloud from './wordcloud'
import LineBreak from './linebreak'
import WorkExperience, { workExperienceProps } from './workexperience'

export interface LandingInterface {
    aboutMe: AboutMeProps
    prettyFace: PrettyFaceProps
    motto: Motto
    experience: workExperienceProps
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
    const workexperience = renderWorkExperience(props.experience)
    return (
        <Container>
            {renderAboutMe(props.aboutMe, props.prettyFace)}
            {renderMotto(props.motto)}
            <Row>
                <Col>
                    <LineBreak />
                </Col>
            </Row>
            {workexperience}                        
        </Container>
    )
}

function renderAboutMe(aboutMe: AboutMeProps, prettyFace: PrettyFaceProps) {
    return (
        <Row>
            <Col xs={8}>
                <AboutMe dateOfBirth={aboutMe.dateOfBirth} email={aboutMe.email} firstName={aboutMe.firstName} lastName={aboutMe.lastName} linkedInProfile={aboutMe.linkedInProfile} />
            </Col>
            <Col xs={4}>
                <PrettyFace description={prettyFace.description} imageUrl={prettyFace.imageUrl} />
            </Col>
        </Row>
    )
}

function renderMotto(motto: Motto) {
    return <Row>
        <Col xs={12} sm={8}>
            <Chapter header={motto.chapter.header} text={motto.chapter.text} />
        </Col>
        <Col xs={12} sm={4}>
            <WordCloud imageUrl={motto.techStack} description='' />
        </Col>
    </Row>
}

function renderWorkExperience(workexperience: workExperienceProps) {
    if (workexperience.items.length === 0) {
        return null
    }

    return (
        <Row>
            <Col>
                <WorkExperience items={workexperience.items} />
            </Col>
        </Row>
    )
}

export default Landing