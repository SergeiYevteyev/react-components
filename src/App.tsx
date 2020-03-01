import React, { useEffect, useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing, { createMotto } from './components/landing';
import * as apiGet from './api/get';
import * as pf from './components/prettyface';
import * as am from './components/aboutme';
import * as ch from './components/chapter';
import { buildChapters } from './components/chapters';

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

      const [experience, setExperience] = useState(buildChapters().Build())

    useEffect(
      function fetchData() {
      apiGet.getExperience()
      .then((value: apiGet.experienceResult) => {
      setExperience(createMotto(ch.createChapter(value.header, value.text), value.techStack))
      })
      .catch((reason: any) => {console.log(reason)});
      }, [])
  
  return (
    <Landing prettyFace = {prettyFace} aboutMe = {aboutMe} motto = {motto} experience={experience} />
  );
}

export default App;
