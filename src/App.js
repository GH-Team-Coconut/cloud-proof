import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import React, {useState} from 'react';
import {Image, Video} from 'cloudinary-react';

function App() {

  const [mediaSelected, setMediaSelected] = useState('');
  const [secureUrl, setSecureUrl] = useState('');

  const uploadMedia = () =>  {
    const formData = new FormData();
    formData.append('file', mediaSelected);
    formData.append('upload_preset', 'jdjof0vs');
    Axios.post('https://api.cloudinary.com/v1_1/rotoflo/video/upload', formData).then((response)=>{
      setSecureUrl(response.data.secure_url)
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cloud Storage Proof of Concept
        </p>
        <input type='file' onChange={(event) =>{setMediaSelected(event.target.files[0])}} />
        <button onClick={uploadMedia}>Upload Media</button>
        <Video cloudName='rotoflo' publicId={secureUrl} />
      {console.log('SECUREURL', secureUrl)}
      </header>
    </div>
  );
}

export default App;

