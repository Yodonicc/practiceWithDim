import React from 'react';
import styles from './ReactLearn.module.less'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class ReactPlay extends React.Component{
    // this.state = {
    //     collapsed: false,
    // };
    
    // onCollapse = collapsed => {
    // console.log(collapsed);
    // this.setState({ collapsed });
    // };
    render(){
        return(
            <div>
                <div>现在目标就是做一个中台的左侧菜单，快点去做！</div>
            </div>
            
        );
    }
}
 
export default ReactPlay;