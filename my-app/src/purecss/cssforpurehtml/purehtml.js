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
                <div>
                    <input type="checkbox" name="vehicle" value="Car"></input>
                    <span>I have a Car</span>
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
                <div className={styles.mytransition}>鼠标移过来，我有过渡效果！</div>
                <div className={styles.myanimation}>我是一行动画效果！</div>
                <ul>
                    <li>各种字体属性</li>
                    <li id={styles.fontcolor}>color</li>
                    <li id={styles.fontdirectionltr}>direction: ltr</li>
                    <li id={styles.fontdirectionrtl}>direction: rtl</li>
                    <li id={styles.fontletterspacing1}>letter-spacing: 10px</li>
                    <li id={styles.fontletterspacing2}>letter-spacing: normal</li>
                    <li id={styles.lineheight1}>line-height: 10px</li>
                    <li id={styles.lineheight2}>line-height: 30px</li>
                    <li id={styles.lineheight3}>line-height: 150%</li>
                    <li id={styles.textalign1}>text-align: center</li>
                    <li id={styles.textalign2}>text-align: right</li>
                    <li id={styles.textalign3}>text-align: justify每一行的宽度都相等</li>
                    <li id={styles.textdecoration1}>text-decoration: overline</li>
                    <li id={styles.textdecoration2}>text-decoration: line-through</li>
                    <li id={styles.textdecoration3}>text-decoration: underline</li>
                    <li id={styles.textindent}>text-indent: 50px</li>
                    <li id={styles.texttransform1}>text-transform: capitalize</li>
                    <li id={styles.texttransform2}>text-transform: uppercase</li>
                    <li id={styles.texttransform3}>text-transform: lowercase</li>
                    <li id={styles.wordspacing}>word-spacing: 20px</li>
                    <li id={styles.verticalalign1}>vertical-align: baseline</li>
                    <li id={styles.verticalalign2}>vertical-align: 20px</li>
                    <li id={styles.verticalalign3}>vertical-align: bottom</li>
                    <li id={styles.whitespace1}>white-space: nowrap</li>
                    <li id={styles.whitespace2}>white-space: pre</li>
                    <li id={styles.whitespace3}>white-space: pre-line</li>
                    <li id={styles.whitespace4}>white-space: pre-wrap</li>
                </ul>

            </div>
        );
    }
}
 
export default Purehtml;