import React, { Component, Fragment } from 'react';
import { Drawer, Menu, Icon } from 'antd';
import RightMenu from './RightMenu';
import Logo from '../../../assets/images/logo-2.svg';
import './nav.css';
import { Link } from 'react-router-dom';
import Button from '../../button/Button';


const { Item: MenuItem, SubMenu } = Menu;

class NavBar extends Component {
    state = {
        visible: false,
        logged: false,
        render:false,
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };


    componentWillMount() {
        if (localStorage.token) {
            this.setState({ logged: true });
        }
        else{
            this.setState({logged:false});
        }
        let location = window.location.pathname
        if(location !== '/register' && location !== '/login'){
            console.log('disini');
            this.setState({render:true})
          }
        
          else{
            this.setState({render:false})
          }
    }

    render() {
        if (this.state.render){
            return (

                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" inlineCollapsed={false}>
                    <Menu.Item key="Logo">
                        <img style={{ width: '10vw', height: 'auto', paddingBottom: '1vw', paddingTop: '1vw' }} src={Logo} alt="Design.in"></img>
                    </Menu.Item>
                    <Menu.Item key="beranda" >
                        BERANDA
                    </Menu.Item>
                    <Menu.Item key="app" >
                        KONTES
                    </Menu.Item>
                    <SubMenu
                        title={
                            <li className={'ant-menu-item'}>
                                LAYANAN
                     </li>
                        }
                    >
                        <Menu.Item key="setting:1">PESAN DESAIN</Menu.Item>
                        <Menu.Item key="setting:2">BUAT KONTES</Menu.Item>
                        <Menu.Item key="setting:3">CARI REKOMENDASI</Menu.Item>
                    </SubMenu>
                    {this.state.logged ? 
                    <div style={{ display: 'flex', flexDirection: 'row', float: 'right', justifyContent: 'center' }}>
    
                            <MenuItem style={{ paddingLeft: '20px' }} onClick={()=>{
                                localStorage.clear();
                                window.location.replace('/');
                            }}>
                                <Button style="button primary" text="Logout"></Button>
                            </MenuItem>
                        
                    </div> : 
                    <div style={{ display: 'flex', flexDirection: 'row', float: 'right', justifyContent: 'center' }}>
    
                                <MenuItem style={{ paddingLeft: '20px' }} onClick={()=>{window.location.replace('/login')}}>
                                    <Button style="button primary" text="Login"></Button>
                                </MenuItem>
    
                                <MenuItem style={{ paddingLeft: '20px' }} onClick={()=>{window.location.replace('/register')}}>
                                    <Button style="button primary" text="Daftar"></Button>
                                </MenuItem>
    
                        </div>}
    
                </Menu>
            );
        }
        else{
            return (
                <Fragment/>
            )
        }
       
    }
}

export default NavBar;