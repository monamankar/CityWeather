import { useState,useEffect } from "react";
import axios from "axios";
import  Card  from "react-bootstrap/Card";

function WeatherApi(){
    const [city,setCity] = useState()
    const [temp,setTemp] = useState()
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get("https://api.weatherapi.com/v1/current.json?key=07d6fa0a99e342bb9ce191427221211&q=Nagpur&aqi=no").then((response)=>{
            console.log("Response:",response.data)
            
            setCity(response.data.location.name)
            setTemp(response.data.current.temp_c)

            setData({"city":response.data.location.name,"temp":response.data.current.temp_c})
        })
    },[])
    return(
        <>
        This is Weather.
        <Card
          bg={"success"}
          key={"1"}
          text={'dark'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>{data && data.temp}<sup>o</sup></Card.Header>
          <Card.Body>
            <Card.Title>{data.city}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </>

    )
}
export default WeatherApi;