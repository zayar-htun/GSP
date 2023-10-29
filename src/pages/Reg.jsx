import React, { useState } from 'react';
import { getRegister } from '../apicalls';

function Reg() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleRegister = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('photo', photo);


    formData.forEach((value, key) => {
        console.log(key, value);
    });

    getRegister(formData,name,email,password)
  };

  return (
    <div>
      <h2>User Registration</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Reg;
