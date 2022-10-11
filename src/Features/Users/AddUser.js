import React from 'react';
import Button from '../../Components/Buttons';
import TextField from '../../Components/TextField';

const AddUser = () => {
  return (
    <div className='mt-10 max-w-xl mx-auto'>
      <TextField 
      label="Name"
      inputProps={{type: 'text', placeholder: 'Shamim'}}
      />
      <br />
      <TextField 
      label="Email"
      inputProps={{type: 'email', placeholder: 'shamim@gmail.com'}}
      />
      <Button>Submit</Button>
    </div>
  );
};

export default AddUser;