import React from 'react'
import '../style/workexperience.scss'

export interface workExperienceProps {
    items: workExperience[]
}

interface workExperience {
    id: string,
    position: string,
    where: string,
    techStack: string,
    shortStory: string
}

export function createWorkExperience(
    id: string,
    position: string,
    where: string,
    techStack: string,
    shortStory: string) : workExperience {
        return {
            id: id,
            position: position,
            shortStory: shortStory,
            techStack: techStack,
            where: where
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
        <div className="wrap-new-line" key={workExperience.id}>
            <h3>{workExperience.position}</h3>
            <h4>{workExperience.where}</h4>
            <h5>{workExperience.techStack}</h5>
            <span>{workExperience.shortStory}</span>
        </div>
    )
}


export default WorkExperience;