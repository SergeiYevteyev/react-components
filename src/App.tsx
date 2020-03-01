import React, { useEffect, useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/landing';
import * as apiGet from './api/get';
import * as pf from './components/prettyface';
import * as am from './components/aboutme';

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
  
  return (
    <Landing prettyFace = {prettyFace} aboutMe = {aboutMe} />
  );
}

export default App;
