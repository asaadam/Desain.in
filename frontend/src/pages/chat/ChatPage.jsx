import React, { Component } from 'react';
import { Col } from 'antd';
import { Row, ThemeProvider, TextComposer, IconButton, AddIcon, TextInput, SendButton } from '@livechat/ui-kit';

import Navbar from '../../components/layouts/navbar/NavBar';
import AvatarDetail from '../../components/avatar-detail/AvatarDetail';
import StepDesigner from '../../components/layouts/chat-layout/StepperChatDesigner';
import './chatPage.scss';
import '../../components/layouts/typography.scss';
import Axios from 'axios';

class ChatPage extends Component {
    state = {
        errorMessage: null,
        transac: [],
        isLoaded: false
    };

    getAllStep = () => {
        return Axios.get("http://localhost:5000/transaction/detail/2", {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.token
            },
        })
    }

    async componentDidMount() {
        const { data } = await this.getAllStep();
        this.setState({ transac: data.transactionDetail, isLoaded: true });

        await this.RenderEachStep();
    }

    RenderEachStep = () => {
        const step = this.state.transac.step;
        return <StepDesigner step={step} />
    }

    render() {
        return (
            <div>
                <div className="chat-page">
                    <Row gutter={2}>
                        <Col span={16}>
                            <div className="chat-section">
                                <div className="chat-bubble">

                                </div>
                                <ThemeProvider>
                                    <TextComposer>
                                        <Row align="center">
                                            <TextInput fill />
                                            <SendButton fit />
                                        </Row>

                                        <Row verticalAlign="center" justify="right">
                                            <IconButton fit>
                                            </IconButton>
                                        </Row>
                                    </TextComposer>
                                </ThemeProvider>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="step-view">
                                {localStorage.userStatus == 0 ? <p className="sub-title">User Info</p> : <p className="sub-title">Desainer Info</p>}
                                <AvatarDetail title="Tony Hurella" meta="mendapat invitasi" />
                                <p className="bigger-body-text">
                                    Progress Pekerjaan
                                </p>
                                {this.state.isLoaded && this.RenderEachStep()}
                                <p className="bigger-body-text">
                                    Total nilai proyek
                                    <br />
                                    Rp. {this.state.transac.harga}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }

}

export default ChatPage;