import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { renderIntoDocument } from 'react-dom/test-utils'

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
            <Col><span><strong>{fullName(props)}</strong></span></Col>
        </Row>
        <Row>            
            <Col>{props.dateOfBirth}</Col>
        </Row>
        <Row>
            <Col><a href={"mailto: " + props.email}>{props.email}</a></Col>
        </Row>
        <Row>
            <Col><a href={props.linkedInProfile}>{props.linkedInProfile}</a></Col>
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
