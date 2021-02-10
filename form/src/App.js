
import validator from 'validator'
import './App.css';
import {useState} from 'react';

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [matchPassword, setMatch] = useState('')
  const [website, setWebsite] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <div className="wrapper">
      <h1>Profile Form - All fields required</h1>
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>Name</p>
           <input type="text" name="name" onChange={(e) => setName(e.target.value)}
            />
         </label>
         <label>
           <p>Email</p>
           <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}
            />
         </label>
         <label>
           <p>Username</p>
           <input type="text" name="myusername" onChange={(e) => setUser(e.target.value)}
            />
         </label>
         <label>
           <p>Password</p>
           <input type="text" name="password" onChange={(e) => setPassword(e.target.value)}
            />
         </label>
         <label>
           <p>Confirm Password</p>
           <input type="text" name="match" onChange={(e) => setMatch(e.target.value)}
            />
         </label>
         <label>
           <p>Website- Enter Valid URL</p>
           <input type="text" name="website" onChange={(e) => setsetWebsite(e.target.value)}
            />
         </label>
         <button type="submit">Submit</button>
       </fieldset>
      </form>
    </div>
  )
}

export default App;
