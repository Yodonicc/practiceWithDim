import React from 'react';
import styles from './Float.module.less'
 
class Float extends React.Component{
    render(){
        return(
            <div className={styles.pageroot}>
                <div className={styles.left}>This is Float left!</div>
                <div className={styles.middle}>This is Float middle!</div>
                <div className={styles.right}>This is Float right!</div>
            </div>
        );
    }
}
 
export default Float;