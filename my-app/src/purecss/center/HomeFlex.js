import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeFlex.module.less';

class HomeFlex extends React.Component {
    render() {
        return (
            <div className={styles.pageroot}>
                <div className={styles.left}>
                    <div>默认Flex居中</div>
                    <Link to="/center/JDinterview" style={{ color: 'black' }}>
                        <div>京东CSS面试题 - 左上右下 - 点击跳转</div>
                    </Link>
                    <Link to="/shengbeiLayout/Float" style={{ color: 'black' }}>
                        <div>absolute + 负margin - 点击跳转</div>
                    </Link>
                    <Link to="/shengbeiLayout/Absolute" style={{ color: 'black' }}>
                        <div>圣杯布局absolute - 点击跳转</div>
                    </Link>
                    <Link to="/shengbeiLayout/Table" style={{ color: 'black' }}>
                        <div>圣杯布局Table - 点击跳转</div>
                    </Link>
                    <Link to="/" style={{ color: 'black' }}>
                        <div>返回首页 - 点击跳转</div>
                    </Link>
                </div>
                <div className={styles.middle}>
          This is Flex
                    {' '}
                    <strong>center</strong>
          !
                </div>
                <div className={styles.right}>This is Flex right!</div>
            </div>
        );
    }
}

export default HomeFlex;
