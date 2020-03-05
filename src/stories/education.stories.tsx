import React from 'react';
import Education, * as we from '../components/education'

export default {
    title: 'education',
    component: Education,
  };

function retrieveEducation() : we.educationProps{
    var builder = we.createBuilder()
    builder.Add(we.createEducation(
        'ed1',
        'Rigas Tehniska Universitate',
        'Bachelor\'s degree, automation and computer engineering - computer control systems',
        '2008-2010'))

    builder.Add(we.createEducation(
            'ed2',
            'Rigas Tehniska Universitate',
            'Master\'s degree, automation and computer engineering - computer control systems',
            '2008-2010'))

    return builder.Build()
}

export const educationComponent = () => <Education items={retrieveEducation().items} />