import React from 'react';
import styles from './Absolute.module.less'
 
class Absolute extends React.Component{
    render(){
        return(
            <div className={styles.pageroot}>
                <div className={styles.left}>This is Absolute left!</div>
                <div className={styles.middle}>This is Absolute middle!</div>
                <div className={styles.right}>This is Absolute right!</div>
            </div>
        );
    }
}
 
export default Absolute;