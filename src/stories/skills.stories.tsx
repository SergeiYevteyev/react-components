import React from 'react';
import * as skills from '../components/skills'

export default {
    title: 'Skills',
    component: skills,
  };

  function retrieveSkills() : skills.SkillsProps {
      let skillsBuilder = skills.createBuilder()
      let skill = skills.createSkill('Header')
      skill.Add('skill 1')
      skill.Add('skill 2')
      skill.Add('skill 3')
      skillsBuilder.Add(skill.Build())
      return skillsBuilder.Build()
  }

export const skillsComponent = () => <skills.Skills items={retrieveSkills().items} />