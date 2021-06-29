import React, {useState} from 'react'
import './Createpoll.css'
import axios from 'axios';
import { useHistory } from 'react-router';
function CreatePoll() {
    const history = useHistory();
    const [formData, setFormData] = useState({
        question: '',
        options: ['',''],
      });
    
      const {
        question,
        options,
      } = formData;
    
      const addOption = e => {
        e.preventDefault();
        const newOptions = [...options];
        newOptions.push('');
    
        setFormData({ ...formData, options: newOptions });
        console.log(options.length);
      };
    
      const handleQuestionChange = e => {
        setFormData({
          ...formData,
          question: e.target.value,
        });
      };
    
    const handleOptionChange = (e, index) => {
      const newOptions = [...options];
      newOptions[index] = e.target.value;
    
      setFormData({
        ...formData,
        options: newOptions,
      });
    };
    
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      try {
        const { data } = await axios.post("/api/polls", formData, config);
        console.log(data);
        history.push('/');
      } catch (error) {
        localStorage.removeItem("authToken");
        console.log(error);
      }
    };
    
    return (
      <form className="form1" onSubmit={handleSubmit}>
        <div className="formele">
            <input
            type="text"
            onChange={handleQuestionChange}
            name="question"
            />
             <label htmlFor="email" className="label-name">
                        <span className="content-name">
                            Question
                        </span>
            </label>
        </div>
        {options.map((opt, index) => (
        <div className="formele">
          <input
            value={opt}
            key={`option_${index}`}
            type="text"
            onChange={e => handleOptionChange(e, index)}
            name="options"
          />
           <label htmlFor="option" className="label-name">
                        <span className="content-name">
                            Option
                        </span>
            </label>
        </div>
        ))}
        <input type="button" className="formbtn1" value="Add new option" onClick={addOption} />
        <input type="submit" className="formbtn1" value="Submit" />
      </form>
     );
}

export default CreatePoll;
