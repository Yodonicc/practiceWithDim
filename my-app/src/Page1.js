import React from 'react';
import styles from './Page1.module.less'
 
class Page1 extends React.Component{
render(){
    console.log(styles.page1class)
return(
<div>
<div className={styles.page1class}>This is Page1!</div>
</div>
);
}
}
 
export default Page1;