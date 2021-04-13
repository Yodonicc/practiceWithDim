import React from 'react';
import styles from './purehtml.module.less'

class Purehtml extends React.Component{
    bikeHandler(){
        //alert("bikeHandler");
        document.getElementById('bikecheckbox').parentNode.parentNode.childNodes[10].style.display="block";
        // document.getElementById('biketext2').style.display="block"
    }
    render(){
        return(
            <div className={styles.pageroot}>
                <div className={styles.left}>This is Purehtml left!</div>
                <div className={styles.middle}>This is Purehtml center!</div>
                <div className={styles.right}>This is Purehtml right!</div>
                <div>
                    <input id="bikecheckbox" onClick={this.bikeHandler} className={styles.checkbox} type="checkbox" name="vehicle" value="Bike"></input>
                    <span className={styles.myspan}>我是bike复选框，点我！</span>
                    <div className={styles.code}>我是bike控制的文本！</div>
                </div>
                <div onClick={this.bikeHandler}>
                    <input onClick={this.bikeHandler} type="checkbox" name="vehicle" value="Car"></input>
                    <span onClick={this.bikeHandler}>I have a Car</span>
                </div>
                <div>
                    <input type="checkbox" name="vehicle" value="Bus"></input>
                    <span>I have a Bus</span>
                </div>
                <input type="radio"></input>
                <input type="image"></input>
                <input type="file"></input>
                {/* <input type="submit" className={styles.checkbox}></input> */}
                <select></select>
                <div className={styles.code} id="biketext2">我是bike控制的文本！</div>
                <div>我是car控制的文本！</div>
                <div>我是bus控制的文本！</div>
            </div>
        );
    }
}
 
export default Purehtml;