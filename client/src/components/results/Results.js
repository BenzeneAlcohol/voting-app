import React,  {useState, useEffect}  from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';
import {Pie, defaults} from 'react-chartjs-3';
import './Results.css'

defaults.global.legend.position = 'bottom'


function Results({match}) {
    const history = useHistory();
    const [data, setData] = useState([]);
    const [loading, isLoading] = useState(true);
    const [options, setOptions] = useState([]);
    const [votes, setVotes] = useState([]);
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
            data.options.map((option)=>{
                console.log(option.option);
                setOptions(oldOptions => [...oldOptions, option.option]);
                setVotes(oldVotes => [...oldVotes, option.votes]);
            })
            setData(data);
            isLoading(false);
          } catch (error) {
            localStorage.removeItem("authToken");
            console.log(error);
          }
        }
        fetchData();
    },[history])
    return (
        <div>
            {loading && <div>Loading</div>}
            {!loading &&
            <div>
                <h2 className="heading">Poll results</h2>
                <h3 className="heading">{data.question}</h3>
                <Pie
        data={{
          labels: options,
          datasets: [
            {
              label: 'Number of votes',
              data: votes,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={50}
        width={100}
        options={{
          responsive:true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
                gridLines: {
                    display: false,
                 }
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 20,
            },
          },
        }}
      />
            </div>}
        </div>
    )
}

export default Results
