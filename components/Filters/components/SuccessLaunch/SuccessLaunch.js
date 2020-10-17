import React, { Component } from 'react';
import Button from '../../../Button/Button';
import styles from './SuccessLaunch.module.css'

class SuccesLaunch extends Component {
    state={
        active: null
    }

    onClickHandler = ( bool )=>{
        if(bool===this.state.active) {
            this.setState({active: null});
            this.props.SuccessHandler(null);
        }
        else {
            this.setState({active : bool})
            this.props.SuccessHandler(bool);
        }
    }
    render(){

        return(
            <div className ={styles.container}>
                <span className= {styles.header}> 
                    Successful Launch
                    <div className={styles.borderBottom}></div> 
                </span> 

                <Button name="True" onClicked={()=>this.onClickHandler(true)} style={this.state.active} />
                <Button name="False" onClicked={()=>this.onClickHandler(false)} style={this.state.active === false } />
            </div>
        );
    }
    
}

export default SuccesLaunch;