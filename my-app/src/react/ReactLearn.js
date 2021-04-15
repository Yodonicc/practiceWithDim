import React from 'react';
import styles from './ReactLearn.module.less'

class ReactLearn extends React.Component{
    bikeHandler(){
        //alert("bikeHandler");
        document.getElementById('bikecheckbox').parentNode.parentNode.childNodes[10].style.display="block";
        // document.getElementById('biketext2').style.display="block"
    }
    render(){
        return(
            <div className={styles.pageroot}>
                <div className={styles.left}>This is ReactLearn left!</div>
                <div className={styles.middle}>This is ReactLearn center!</div>
                <div className={styles.right}>This is ReactLearn right!</div>
                

            </div>
        );
    }
}
 
export default ReactLearn;