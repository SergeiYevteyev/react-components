import React from 'react';
import WorkExperience, * as we from '../components/workexperience'

export default {
    title: 'workexperience',
    component: WorkExperience,
  };

function retrieveWorkExperience() : we.workExperienceProps{
    var builder = we.createBuilder()
    builder.Add(we.createWorkExperience(
        'Eiusmod do proident id exercitation.',
        'Magna sint veniam culpa sint non laborum labore in.',
        'Ipsum reprehenderit occaecat esse amet nostrud consequat est consequat cillum laborum pariatur reprehenderit reprehenderit dolor. Non anim laborum duis non commodo veniam duis dolor consectetur anim exercitation aute occaecat. Exercitation sint aliqua laborum ullamco velit incididunt. Reprehenderit cillum laboris exercitation elit.',
        `Ipsum laborum culpa cupidatat adipisicing magna voluptate dolore aute velit. Dolor do incididunt incididunt deserunt labore consectetur. Consectetur culpa ipsum deserunt labore reprehenderit sint proident sint excepteur non nulla laboris sunt. Magna proident enim sit voluptate fugiat laboris laboris cillum dolor ullamco tempor Lorem magna reprehenderit.

Duis cupidatat ad commodo aliqua aliquip sint occaecat proident dolor tempor officia exercitation deserunt. Magna est ullamco laboris aliquip ad aliquip sunt pariatur pariatur pariatur. Magna in anim sint velit elit esse non Lorem quis enim fugiat officia. Mollit elit ex enim ullamco. Lorem magna proident et laborum duis aliquip commodo proident aliquip Lorem officia.

Ullamco occaecat et exercitation ad in. Ipsum incididunt proident aute dolor et consectetur. Consequat in magna do est ea esse incididunt fugiat quis elit elit ut sit.`
    ))

    return builder.Build()
}

export const workExperienceComponent = () => <WorkExperience items={retrieveWorkExperience().items} />