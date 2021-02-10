
import validator from 'validator'
import './App.css';
import {useState} from 'react';

function App() {

  const [text, setText] = useState('')

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
           <input type="text" onChange={(e) => setText(e.target.value)}
            />
         </label>
         <label>
           <p>Email</p>
           <input name="email" />
         </label>
         <label>
           <p>Username</p>
           <input name="myusername" />
         </label>
         <label>
           <p>Password</p>
           <input name="password" />
         </label>
         <label>
           <p>Confirm Password</p>
           <input name="match" />
         </label>
         <label>
           <p>Website- Enter Valid URL</p>
           <input name="website" />
         </label>
         <button type="submit">Submit</button>
       </fieldset>
      </form>
    </div>
  )
}

export default App;
