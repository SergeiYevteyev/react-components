import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export interface AboutMeProps {
    linkedInProfile: ReactNode
    email: ReactNode
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
            <Col><span><strong>{fullName(props)}</strong></span></Col>
        </Row>
        <Row>            
            <Col>{props.dateOfBirth}</Col>
        </Row>
        <Row>
            <Col><a href = "mailto: {props.email}">{props.email}</a></Col>
        </Row>
        <Row>
            <Col><a href = "{props.linkedInProfile}">{props.linkedInProfile}</a></Col>
        </Row>
        </Col>
    )
}

export default AboutMe
