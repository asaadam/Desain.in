import React, { Component } from 'react';
import Button from '../../button/ButtonAntd';
import '../../layouts/typography.scss';
import './promoteBannerContest.scss';
import Deco from '../../../assets/images/ads-banner.svg';

class PromoteBanner extends Component {
    render() {
        return(
            <div className="promote-banner">
                <img className="image-bg" src={Deco}/>
                <div className="ads-content">
                    <p className="title-3">
                        Bingung dengan proyek
                        kreatifmu
                    </p>
                    <div className="wrapper">
                        <p className="bigger-body-text">
                            Temukan lebih dari 100.000+ desainer
                            terbaik untuk proyek kreatifmu
                        </p>
                    </div>
                    <Button style="button primary" text="CARI REKOMENDASI"/>
                </div>
            </div>
        )
    }
}

export default PromoteBanner;