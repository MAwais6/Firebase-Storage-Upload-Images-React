import './App.css';
import { useState } from 'react';
import { storage } from './firebase'
import { ref, uploadBytes } from 'firebase/storage'

function App() {
  
  const [ imageUpload , setImageUpload ] = useState(null)

  const uploadImage = async e =>{
    
    if (imageUpload === null) return alert("Please select an image to upload")

    const files = imageUpload 
    const file = files[0]
    const imageRef = ref( storage , `images/${file.name}` )
    uploadBytes(imageRef , file)
    .then( () => alert("Image uploaded successfully") )
    .catch( (error) => alert(error.message) )
    
  }

  
  return (

    <div className="App">
      <label> Upload Images </label>
      <input type="file"  onChange={(event) => { setImageUpload(event.target.files) } } />
      <br></br>
      <br></br>
      <button onClick={uploadImage} > Upload </button>
    </div>

  );
}

export default App;
