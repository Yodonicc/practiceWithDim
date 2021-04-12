import React from 'react';
import styles from './Grid.module.less'
 
class Grid extends React.Component{
    render(){
        return(
            <div className={styles.pageroot}>
                <div>This is Grid left!</div>
                <div>This is Grid middle!</div>
                <div>This is Grid right!</div>
            </div>
        );
    }
}
 
export default Grid;