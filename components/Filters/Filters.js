import React, { Component } from 'react';
import styles from './Filters.module.css';
import LaunchYears from './components/LaunchYears/LaunchYears';
import SuccessLaunch from './components/SuccessLaunch/SuccessLaunch';
import SuccessLanding from './components/SuccessLanding/SuccessLanding';

class Filters extends Component {

    render() {
        return (
        <div className= {styles.container}>    
            <h4 className={styles.header}>Filters</h4>
            <LaunchYears yearHandler={this.props.launchYear}/>
            <SuccessLaunch  SuccessHandler={this.props.launchSuccess} />
            <SuccessLanding landHandler={this.props.landSuccess} disable={this.props.disable}/>
        </div>);
    }
}

export default Filters;