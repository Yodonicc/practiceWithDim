import React from 'react';
import styles from './JDinterview.module.less'
 
class JDinterview extends React.Component{
    render(){
        return(
            <div className={styles.pageroot}>
                <div className={styles.left}>This is Flex left!</div>
                <div className={styles.middle}>This is Flex center!</div>
                <div className={styles.right}>This is Flex right!</div>
            </div>
        );
    }
}
 
export default JDinterview;