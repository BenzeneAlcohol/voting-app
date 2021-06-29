import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';
import './Vote.css'
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
                        <div>
                            <h3>{data.question}</h3>
                            {data.options.map((option)=>{
                                return(
                                    <div>
                                    {console.log(option)}
                                    <input type="radio" className="radioInput" name="ans" value={option.option} onChange={changeHandler}/>
                                    <label>{option.option}</label>
                                </div>
                                )
                            })}
                        </div>
                        <button className="btn__btn" type="submit">Submit</button>
                    </form>
                </div>
            </div>
            }
            {success==true && <div>You have successfully voted!</div>}
            {success==false && <div>You have already voted!</div>}
        </div>
    )
}

export default Vote
