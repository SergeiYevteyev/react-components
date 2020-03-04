import React from 'react';
import WorkExperience, * as we from '../components/workexperience'

export default {
    title: 'workexperience',
    component: WorkExperience,
  };

function retrieveWorkExperience() : we.workExperienceProps{
    var builder = we.createBuilder()
    builder.Add(we.createWorkExperience(
        'key',
        'Eiusmod do proident id exercitation.',
        'Magna sint veniam culpa sint non laborum labore in.',
        'Ipsum reprehenderit occaecat esse amet nostrud consequat est consequat cillum laborum pariatur reprehenderit reprehenderit dolor. Non anim laborum duis non commodo veniam duis dolor consectetur anim exercitation aute occaecat. Exercitation sint aliqua laborum ullamco velit incididunt. Reprehenderit cillum laboris exercitation elit.',
        `Ipsum laborum culpa cupidatat adipisicing magna voluptate dolore aute velit. Dolor do incididunt incididunt deserunt labore consectetur. Consectetur culpa ipsum deserunt labore reprehenderit sint proident sint excepteur non nulla laboris sunt. Magna proident enim sit voluptate fugiat laboris laboris cillum dolor ullamco tempor Lorem magna reprehenderit.

Duis cupidatat ad commodo aliqua aliquip sint occaecat proident dolor tempor officia exercitation deserunt. Magna est ullamco laboris aliquip ad aliquip sunt pariatur pariatur pariatur. Magna in anim sint velit elit esse non Lorem quis enim fugiat officia. Mollit elit ex enim ullamco. Lorem magna proident et laborum duis aliquip commodo proident aliquip Lorem officia.

Ullamco occaecat et exercitation ad in. Ipsum incididunt proident aute dolor et consectetur. Consequat in magna do est ea esse incididunt fugiat quis elit elit ut sit.`
    ))

    builder.Add(we.createWorkExperience(
        'key2',
        'Mollit nulla in eiusmod est.',
        'Nostrud dolor consequat deserunt duis.',
        'Fugiat eu pariatur quis mollit cupidatat commodo do sint aute ipsum. Dolor proident incididunt nulla aliquip exercitation cupidatat. Eiusmod sunt adipisicing deserunt eiusmod consequat deserunt nostrud. In reprehenderit cupidatat enim laboris id ea aliquip est proident cupidatat aliquip voluptate. Ullamco ex minim cillum in irure dolore amet et minim ex. Do irure aute magna duis commodo ipsum esse. Ipsum non irure reprehenderit incididunt ex.',
        `Ad ut ex incididunt consequat ea. Consequat non officia eu fugiat labore dolor enim commodo aliquip amet tempor adipisicing. In id culpa magna excepteur fugiat eu esse.

Pariatur labore laborum sunt fugiat qui enim. Incididunt non ex do nulla ipsum Lorem. Consectetur est incididunt cupidatat quis occaecat. Do ex duis officia est. Amet ex sunt cupidatat eu adipisicing laboris commodo deserunt nisi in sunt aliqua. Quis nostrud dolor consequat aute. Quis eu id consequat nisi cillum amet commodo excepteur proident nostrud eu.

Velit deserunt id aute labore nulla voluptate amet reprehenderit laborum reprehenderit. Sint fugiat ipsum aliqua laboris. Incididunt aute commodo eiusmod pariatur aliquip officia adipisicing. Lorem eu labore sunt ipsum ut sunt velit ea do mollit eu mollit. Consectetur do quis aliquip aliquip ullamco do mollit incididunt nisi.`
    ))

    return builder.Build()
}

export const workExperienceComponent = () => <WorkExperience items={retrieveWorkExperience().items} />