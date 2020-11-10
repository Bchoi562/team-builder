import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Form from './Form';
import axios from 'axios';


const initialFormValues = {
  name:'',
  email:'',
  role:''
};

function App() {

  const [teamMembers, setTeamMembers] = useState([]);

  const [formValues, setFormValue] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValue({
      ...formValues,
      [inputName]:inputValue,
    });
  }

  const submitForm = () => {
    const newMember = {
      name:formValues.name.trim(),
      email:formValues.email.trim(),
      role:formValues.role,
    }
 

  if (!newMember.name || !newMember.email || !newMember.role){
    return 
    
  }
    
  setTeamMembers([...teamMembers,newMember]);
  // setTeamMembers(teamMembers.concat(newMember));
  setFormValue(initialFormValues);
      
    console.log(teamMembers);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Team Form</h1>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      
      {teamMembers.map(m=>{
        console.log(m.name);
        return (
          <h3>
            Name:{m.name} Email:{m.email} Role:{m.role}
          </h3>
        )
      })}
    </div>
  );
}

export default App;

  // axios
  //   .post('fakeapi.com',newMember)
  //   .then((res)=>{
  //     setTeamMembers([newMember, ...teamMembers]);
  //     setFormValue(initialFormValues);
  //   })
  //   .catch((err)=>{
  //     console.log(err,'something broke');
  //   });