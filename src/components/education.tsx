import React from 'react'
import '../style/education.scss'

export interface educationProps {
    items: education[]
}

interface education {
    id: string,    
    where: string,
    degree: string,
    yearsofstudy: string
}

export function createEducation(
    id: string,    
    where: string,
    degree: string,
    yearsofstudy: string) : education {
        return {
            id: id,    
            where: where,
            degree: degree,
            yearsofstudy: yearsofstudy
        }
    }

export function createBuilder() : educationBuilder {
    return new educationBuilder();
}

class educationBuilder {
    private education: education[]

    /**
     *
     */
    constructor() {
        this.education = []
    }

    Add(education: education) {
        this.education.push(education)
    }

    Build() : educationProps {
        return {
            items: this.education
        }
    }
}

function Education(props: educationProps) {
    const section = rendereducationSection(props.items)
    return (<div>{section}</div>)
}

function rendereducationSection(items: education[]) {
    const components: JSX.Element[] = []

    for (var i = 0; i < items.length; ++i) {
        components.push(rendereducation(items[i]));
    }

    return components
}

function rendereducation(education: education) {
    return (
        <div className="wrap-new-line" key={education.id}>
            <h3>{education.where}</h3>
            <h4>{education.degree}</h4>
            <span>{education.yearsofstudy}</span>
        </div>
    )
}


export default Education;