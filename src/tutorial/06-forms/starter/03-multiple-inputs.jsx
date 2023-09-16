import {useState} from 'react'

const MultipleInputs = () => {
  //setting the state to a obj so that we can access multiple input fields dynamically
  
  const [user, setUser] = useState({
    name:'',
    email:'',
    password:'',
  })

  const handleChange = (e) => {
setUser({...user,[e.target.name]:e.target.value})
}
  
const handleSubmit =(e) => {
e.preventDefault()
console.log(user);
}



//!MUST!! You have to add the name attribute to the input element with this particular setup  
//!MUST!! name should be assigned to the key of value exp: value = {user.name} >> name = 'name'   
  return (
    <div>
    
    <form className='form' onSubmit={handleSubmit} >
        <h4>Multiple Inputs</h4>
        
        <div className='form-row'>
          <label htmlFor='hello' className='form-label'>
            name
          </label>
          <input type='text' value={user.name} onChange={handleChange} name ='name' className='form-input' id='name' />
        </div>
        
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' value={user.email} onChange={handleChange}  name ='email' className='form-input' id='email' />
        </div>
        
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password'value={user.password}  onChange={handleChange}  name ='password' className='form-input' id='password' />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
