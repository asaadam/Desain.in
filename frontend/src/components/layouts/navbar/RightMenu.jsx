import React, { Component } from 'react';
import { Menu, A } from 'antd';
import Button from '../../button/ButtonAntd';
import { Link } from 'react-router-dom';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

class RightMenu extends Component {
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
            </Menu>
        );
    }
}

export default RightMenu;