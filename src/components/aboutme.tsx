import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../style/aboutme.scss'

export interface AboutMeProps {
    linkedInProfile: string
    email: string
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
            <Col><h2><strong>{fullName(props)}</strong></h2></Col>
        </Row>
        <Row>            
            <Col>{props.dateOfBirth}</Col>
        </Row>
        <Row>
            <Col><h6><a href={"mailto: " + props.email}>{props.email}</a></h6></Col>
        </Row>
        <Row>
            <Col><h6><a href={props.linkedInProfile} className="text-fits-its-container">{props.linkedInProfile}</a></h6></Col>
        </Row>
        </Col>
    )
}

export function createInstance(dateOfBirth: string, email: string, firstName: string, linkedInProfile: string, lastName: string) : AboutMeProps {
    return {
        dateOfBirth: dateOfBirth,
        email: email,
        firstName: firstName,
        linkedInProfile: linkedInProfile,
        lastName: lastName
    }
}

export default AboutMe
