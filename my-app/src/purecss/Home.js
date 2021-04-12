import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.less'
 
class Home extends React.Component{
    render(){
        return(
            <div className={styles.pageroot}>
                <div className={styles.left}>
                    <Link to="/Page1/" style={{color:'black'}}>
                        <div>点击跳转到Page1</div>
                    </Link>
                    <Link to="/Page2/" style={{color:'black'}}>
                        <div>点击跳转到Page2</div>
                    </Link>
                    <Link to="/Page3/" style={{color:'black'}}>
                        <div>点击跳转到Page3</div>
                    </Link>
                </div>
                <div className={styles.middle}>This is middle!</div>
                <div className={styles.right}>This is right!</div>
            </div>
        );
    }
}
 
export default Home;