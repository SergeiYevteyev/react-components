import React, { useEffect, useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing, { createMotto } from './components/landing';
import * as apiGet from './api/get';
import * as pf from './components/prettyface';
import * as am from './components/aboutme';
import * as ch from './components/chapter';
import * as we from './components/workexperience';
import * as ed from './components/education';
import * as sk from './components/skills';

function App() {
  const [prettyFace, setPrettyFace] = useState(pf.createInstance('',''))

  useEffect(
    function fetchData() {
    apiGet.getPrettyFace()
    .then((value: apiGet.prettyFaceResult) => {
    setPrettyFace(pf.createInstance('',value.url))
    })
    .catch((reason: any) => {console.log(reason)});
    }, [])

  const [aboutMe, setAboutMe] = useState(am.createInstance('','', '', '', ''))

  useEffect(
    function fetchData() {
    apiGet.getAboutMe()
    .then((value: apiGet.aboutMeResult) => {
    setAboutMe(am.createInstance(value.dateOfBirth, value.email, value.firstName, value.linkedInProfile, value.lastName))
    })
    .catch((reason: any) => {console.log(reason)});
    }, [])

    const [motto, setMotto] = useState(createMotto(ch.createChapter('',''),''))

    useEffect(
      function fetchData() {
      apiGet.getMotto()
      .then((value: apiGet.mottoResult) => {
      setMotto(createMotto(ch.createChapter(value.header, value.text), value.techStack))
      })
      .catch((reason: any) => {console.log(reason)});
      }, [])

    const [experience, setExperience] = useState(we.createBuilder().Build())

    useEffect(
      function fetchData() {
      apiGet.getExperience()
      .then((value: apiGet.experienceResult) => {
        var builder = we.createBuilder()
        
        for(;value.items.length > 0;) {
          var item = value.items.pop();
          builder.Add(we.createWorkExperience(item!.id, item!.position, item!.where, item!.techStack, item!.shortStory, item!.yearsworked));
        }

      setExperience(builder.Build())
      })
      .catch((reason: any) => {console.log(reason)});
      }, [])

      const [education, setEducation] = useState(ed.createBuilder().Build())

    useEffect(
      function fetchData() {
      apiGet.getEducation()
      .then((value: apiGet.educationResult) => {
        var builder = ed.createBuilder()
        
        for(;value.items.length > 0;) {
          var item = value.items.pop();
          builder.Add(ed.createEducation(item!.id, item!.where, item!.degree, item!.yearsofstudy));
        }

      setEducation(builder.Build())
      })
      .catch((reason: any) => {console.log(reason)});
      }, [])
  
      const [skills, setSkills] = useState(sk.createBuilder().Build())

      useEffect(
        function fetchData() {
        apiGet.getSkills()
        .then((value: apiGet.skillsResult) => {
          let builder = sk.createBuilder()
          
          value.items.forEach((value: apiGet.skillsItem) => {
            let skill = sk.createSkill(value.header)
            value.skills.forEach((value: string) => skill.Add(value))
            builder.Add(skill.Build())
          })
  
        setSkills(builder.Build())
        })
        .catch((reason: any) => {console.log(reason)});
        }, [])

  return (
    <Landing prettyFace = {prettyFace} aboutMe = {aboutMe} motto = {motto} experience={experience} education={education} skills={skills} />
  );
}

export default App;
