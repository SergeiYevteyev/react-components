import axios from 'axios'

export interface prettyFaceResult {
    url: string
}

export function getPrettyFace() : Promise<prettyFaceResult> {
    return new Promise<prettyFaceResult>((resolve, reject) => {
    axios.get('prettyface.json')
  .then(function (response) {
    // handle success    
    return resolve({
        url: response.data.url
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    return reject(error)
  })
});
}

export interface aboutMeResult {
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    email: string,
    linkedInProfile: string
}

export function getAboutMe() : Promise<aboutMeResult> {
    return new Promise<aboutMeResult>((resolve, reject) => {
        axios.get('aboutme.json')
      .then(function (response) {
        // handle success        
        return resolve({
            dateOfBirth: response.data.dateOfBirth,
            email: response.data.email,
            firstName: response.data.firstName,
            lastName:  response.data.lastName,
            linkedInProfile: response.data.linkedInProfile
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        return reject(error)
      })
    }); 
}

export interface mottoResult {
  header: string,
  text: string,
  techStack: string
}

export function getMotto() : Promise<mottoResult> {
  return new Promise<mottoResult>((resolve, reject) => {
      axios.get('motto.json')
    .then(function (response) {
      // handle success        
      return resolve({
          header: response.data.header,
          techStack: response.data.techstack,
          text: response.data.text
      })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return reject(error)
    })
  }); 
}