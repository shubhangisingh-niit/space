import React, { Component } from 'react';
import Button from '../../../Button/Button'
import styles from './SuccessLanding.module.css'

class SuccesLand extends Component {
    state={
        active: null
    }
    onClickHandler = (bool)=>{
        if(bool===this.state.active) {
            this.setState({active: null});
            this.props.landHandler(null);
        }
        else {
            this.setState({active : bool})
            this.props.landHandler(bool);
        }
    }

    render(){

        return(
            <div className={styles.container}>
                 <span className= {styles.header}> 
                    Successful Landing
                    <div className={styles.borderBottom}></div> 
                </span> 

                <Button name="True" onClicked={()=>this.onClickHandler(true)} style={this.state.active} disabled={this.props.disable} />
                <Button name="False" onClicked={()=>this.onClickHandler(false)} style={this.state.active === false } disabled={this.props.disable}/>
            </div>
        );
    }
    
}

export default SuccesLand;