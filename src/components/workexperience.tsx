import React from 'react'
import '../style/workexperience.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export interface workExperienceProps {
    items: workExperience[]
}

interface workExperience {
    id: string,
    position: string,
    where: string,
    techStack: string,
    shortStory: string,
    yearsworked: string
}

export function createWorkExperience(
    id: string,
    position: string,
    where: string,
    techStack: string,
    shortStory: string,
    yearsworked: string) : workExperience {
        return {
            id: id,
            position: position,
            shortStory: shortStory,
            techStack: techStack,
            where: where,
            yearsworked: yearsworked
        }
    }

export function createBuilder() : workExperienceBuilder {
    return new workExperienceBuilder();
}

class workExperienceBuilder {
    private experience: workExperience[]

    /**
     *
     */
    constructor() {
        this.experience = []
    }

    Add(workExperience: workExperience) {
        this.experience.push(workExperience)
    }

    Build() : workExperienceProps {
        return {
            items: this.experience
        }
    }
}

function WorkExperience(props: workExperienceProps) {
    const section = renderWorkExperienceSection(props.items)
    return (<div>{section}</div>)
}

function renderWorkExperienceSection(items: workExperience[]) {
    const components: JSX.Element[] = []

    for (var i = 0; i < items.length; ++i) {
        components.push(renderWorkExperience(items[i]));
    }

    return components
}

function renderWorkExperience(workExperience: workExperience) {
    return (
        <div className="wrap-new-line component" key={workExperience.id}>
            <Row>
                <Col>
                    <h3>{workExperience.position}</h3>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <Row>
                        <Col>
                            <h5>{workExperience.where}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span>{workExperience.yearsworked}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span>{workExperience.shortStory}</span>
                        </Col>
                    </Row>
                </Col>
                <Col xs={4}>
                    <h6>{workExperience.techStack}</h6>
                </Col>
            </Row>
        </div>
    )
}


export default WorkExperience;