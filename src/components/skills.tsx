import React from 'react'

export interface SkillsProps {
    items: skill[]
}

interface skill {
    header: string
    skills: string[]
    key: string
}

export function createBuilder() : skillsBuilder {
    return new skillsBuilder()
}

class skillsBuilder {
    private skills: skill[]

    constructor() {
        this.skills = []
    }

    Add(skill: skill) {
        this.skills.push(skill)
    }

    Build() : SkillsProps {
        return {
            items: this.skills
        }
    }
}

export function createSkill(header: string) : skillBuilder {
    return new skillBuilder(header);
}

class skillBuilder {
    private skill: skill

    constructor(header: string) {
        this.skill = {
            header: header,
            skills: [],
            key: header
        }
    }

    Add(skill: string) {
        this.skill.skills.push(skill)
    }

    Build(): skill {
        return this.skill;
    }
}

export function Skills(props: SkillsProps) {
    return (render(props))
}

function render(props: SkillsProps) {    
    return (<div>            
        {props.items.map((value: skill) => renderSkill(value))}
    </div>)
}

function renderSkill(props: skill) {
    return (
        <div key={props.key} >            
            <h5>{props.header}</h5>
            {props.skills.map((value: string) => (<div key={value}>{value}</div>))}
        </div>
    )
}
