import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AboutMe, { AboutMeProps } from './aboutme'
import PrettyFace, { PrettyFaceProps } from './prettyface'

export interface LandingInterface {
    aboutMe: AboutMeProps
    prettyFace: PrettyFaceProps
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
        </Container>
    )
}

export default Landing