import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export interface AboutMeProps {
    dateOfBirth: string
    firstName: string
    lastName: string    
}

function fullName(props: AboutMeProps) {
    return props.firstName + " " + props.lastName
}

function AboutMe(props: AboutMeProps) {
    return (
        <Col>
        <Row>
            <Col>{fullName(props)}</Col>
        </Row>
        <Row>
            <Col>{props.dateOfBirth}</Col>
        </Row>
        </Col>
    )
}

export default AboutMe
