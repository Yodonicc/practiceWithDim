import React from 'react';
import styles from './Table.module.less'
 
class Table extends React.Component{
    render(){
        return(
            <div className={styles.pageroot}>
                <div className={styles.left}>This is Table left!</div>
                <div className={styles.middle}>This is Table middle!</div>
                <div className={styles.right}>This is Table right!</div>
            </div>
        );
    }
}
 
export default Table;