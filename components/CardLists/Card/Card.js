import React, { Component } from "react";
import styles from './Card.module.css';


const Card=(props)=>{
  let landingStatus=null;
  switch(props.launchLanding) {
    case null : landingStatus = '--'; break;
    case false : landingStatus = 'False'; break;
    case true : landingStatus = 'True'; break;
  } 

    
    return (
      <div className={styles.container}>
          <img className={styles.img} 
            src= {props.imageSrc} />

          <section className={styles.section}>
          <h3 style={{margin:"15px 0px 10px 0px" , lineHeight: "normal"}}>{props.missionName}#{props.flightNumber} </h3>
          <b>Mission Ids :</b>
          <ul style={{margin: "0px",  lineHeight: "normal"}}>
            {props.missionId.map((item, index)=>(
              <li key={index}>{item} </li>
            ))}
          </ul>
          <p><b>Launch Year : </b> {props.launchYear} </p> 
          <p><b>Successful Launch: </b>{props.launchSuccess? "True" : "False"}</p>
          <p><b>Successful Landing: </b>{landingStatus}</p>
          
      
          </section>
      </div>
    );

}
export default Card;
