/*Create a form with an input field in React. Display the value of the input field dynamically as the user types in it. */

/*import React, { useState } from 'react';
import './CompleteForm.css'; // Import the CSS

function InputForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev,[name]: value}));
  };
 const [data, setData] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data,formData]);
         setFormData({ ...formData,name:"",email:"", });
    }
  

  return (
    <div className="form-container">
      <h2>React Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
              type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
       <h2>User Manage</h2>
       <table border="1" style={{ marginTop: '20px', width: '100%' }}>
               
                    <thead className="thead-dark"> 
                        <tr className='d-flex m-3'>
                             
                            <th>Name</th>
                            <th>Email</th>
                            
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {
                            data.map((value, index, entarr) => {

                                return (
                                    <tr key={index} className="hover:bg-gray-100">
                                      <td className="p-2 border">{value.name}</td>  
                                      <td className="p-2 border">{value.email}</td>  
                                    </tr> 
                                )
                            })
                        }
                  </tbody>
        </table>
            
    </div>
  );
}

export default InputForm;   */
import React, { useState } from 'react';

function InputForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Type Something:</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text here"
      />
      <p>You typed: <strong>{inputValue}</strong></p>
    </div>
  );
}

export default InputForm;


