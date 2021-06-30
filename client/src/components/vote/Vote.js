import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';
import './Vote.css'
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
function Vote({match}) {
    const [formData, setFormData] = useState({
        ans: '',
      });
    const history = useHistory();
    const [data, setData] = useState([]);
    const [loading, isLoading] = useState(true);
    const [success, setSuccess] = useState(null);
    useEffect(() => {
        async function fetchData(){
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          };
          try {
            const { data } = await axios.get(`/api/polls/${match.params.id}`, config);
            console.log(data);
            console.log('DATA Question', data.question);
            console.log('DATA.options' , data.options);
            console.log(typeof(data.options));
            setData(data);
            isLoading(false);
            console.log(formData);
          } catch (error) {
            localStorage.removeItem("authToken");
            console.log(error);
          }
        }
        fetchData();
    },[history])
    const submitHandler = async (e)=>{
        e.preventDefault();
        console.log(formData);
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          };
          try {
            const { data } = await axios.post(`/api/polls/vote/${match.params.id}`, formData, config);
            console.log(data);
            if(data.success){
                setSuccess(true);
            }
          } catch (error) {
              console.log(error);
              if(!error.response.data.success){
                  setSuccess(false);
              }
            console.log(error.response.data.success);
          }
    }
    const changeHandler = (e)=>{
        console.log(e.target.value);
        setFormData({
            ans: e.target.value
        });
    }
    return (
        <div>
            {loading && <div>Hi</div>}
            {!loading && 
            <div className="VotePage">
                <div className="formVotePage">
                    <form className="formVoteHandler" onSubmit={submitHandler}>
                        <div className="wrapper">
                            <h3 className="title">{data.question}</h3>
                            <div className="box">
                              {data.options.map((option,i)=>{
                                  return(
                                      <div>
                                      {console.log(option)}
                                      <input type="radio" className="radioInput" id={"radio" + i} name="ans" value={option.option} onChange={changeHandler}/>
                                      <label htmlFor={"radio" + i} className={"radioLabel"}>
                                        <div class="dot"></div>
                                        <div class="text">{option.option}</div>
                                      </label>
                                  </div>
                                  )
                              })}
                            </div>
                        </div>
                        <button className="formbtn1__formbtn" type="submit">Submit</button>
                    </form>
                </div>
            </div>
            }
            {success==true && <div className="finalMessage">
              <h2>You have successfully voted!</h2>
              <div className="btn">
                    <Link to={`/polls/results/${match.params.id}`} className="link">
                    <button className="formbtn1__formbtn">
                      RESULTS
                    </button>
                    </Link>
            </div>
              </div>}
            {success==false && <div className="finalMessage">
              <h2>You have already voted!</h2>
              <div className="btn">

                    <Link to={`/polls/results/${match.params.id}`} >
                    <button className="formbtn1__formbtn">
                      RESULTS
                    </button>
                    </Link>
            </div>
              </div>}
        </div>
    )
}

export default Vote
