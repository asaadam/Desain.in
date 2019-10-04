import React, { Component, Fragment } from 'react';
import { Menu, A } from 'antd';
import Button from '../../button/Button';
import { Link } from 'react-router-dom';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

class RightMenu extends Component {


    constructor(props) {
        super(props);
        this.state = {
            logged: false
        }
    }

    componentWillMount() {
        if (localStorage.token) {
            this.setState({ logged: true });
        }
    }



    render() {
        return (
            <Menu mode={this.props.mode}>
                <MenuItem key="beranda">
                    <a href="/#">BERANDA</a>
                </MenuItem>
                <MenuItem key="kontes">
                    <a href="kontes">KONTES</a>
                </MenuItem>
                <SubMenu title={<span>LAYANAN</span>}>
                    <MenuItem>
                        <a href="/#">PESAN DESAIN</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="/create-contest">BUAT KONTES</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="/#">CARI REKOMENDASI</a>
                    </MenuItem>
                </SubMenu>
                {this.state.logged ?
                    <MenuItem className="button-nav">
                        <Link to="login" onClick={() => {
                            localStorage.clear();
                        }}>
                            <Button style="button primary" text="Logout" ></Button>
                        </Link>
                    </MenuItem> :
                    <Fragment>
                        <MenuItem className="button-nav">
                            <Link to="/login">
                                <Button style="button primary" text="Masuk" ></Button>
                            </Link>
                        </MenuItem>
                        <MenuItem className="button-nav">
                            <Link to="/register">
                                <Button style="button secondary" text="Daftar"></Button>
                            </Link>
                        </MenuItem>
                        </Fragment>
                }

            </Menu>
        );
    }
}

export default RightMenu;