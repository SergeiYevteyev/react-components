import React from 'react'

export interface SkillsProps {
    items: skill[]
}

interface skill {
    header: string
    skills: string[]
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
        this.skills.push()
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
            skills: []
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
    return (<div>'something'</div>)
}

