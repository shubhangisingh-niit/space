import React, { Component } from 'react';
import Card from './Card/Card';
import styles from './CardList.module.css';

const CardList = (props) => {
    let programs = props.data.map((item, index) => <Card
        key={index}
        flightNumber={item.flight_number}
        missionName={item.mission_name}
        missionId={item.mission_id}
        launchYear={item.launch_year}
        launchSuccess={item.launch_success}
        imageSrc={item.links.mission_patch}
        launchLanding={props.successLanding} />)
    return (<div className={styles.container}>
        {programs}
    </div>);
}
export default CardList;