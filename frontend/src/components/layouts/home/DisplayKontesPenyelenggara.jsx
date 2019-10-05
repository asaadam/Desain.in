import React, { Component } from 'react';
import PortofolioCard from '../../card/PortofolioCardIdentitas';
import Button from '../../button/Button';
import '../../layouts/typography.scss';
import './display.scss';

class DisplayKontesPenyelenggara extends Component {
    render() {
        return (
            <div className="display">
                <p className="title-3">
                    Kontes desain logo pertamini
                    </p>
                <p className="bigger-body-text">
                    oleh <span className="link">PT. Bahu Membahu</span>
                </p>
                <br/>
                <p className="bigger-body-text">
                    Sebuah kontes merancang logo pertamini, dimana kami semua berharap logo yang dirancang dapat mewakili seluruh visi dan misi perusahaan kami. Karena menurut kamu logo adalah cerminan pertama sebuah perusahaan                    </p>
                <br />
                <br />
                <p className="bigger-body-text">
                    Hadiah <span className="harga">Rp. 10.000.000</span>
                </p>
                <br />
                <span className="button-beetwen">
                <Button style="button primary" text="LIHAT LEBIH BANYAK" />
                <Button style="button secondary" text="LIHAT LEBIH BANYAK" />                
                </span>
                <br />
                <br />
                <br />
                <br />
                <br />
                <p className="title-3 title-display">
                    Cek karya yang sudah masuk ya
                </p>
                <div class="card-wrapper">
                    <PortofolioCard judul="Judul Portfolio" userName="Gilang Nur A'idi" likeCount="200" viewCount="200" />
                    <PortofolioCard judul="Judul Portfolio" userName="Gilang Nur A'idi" likeCount="200" viewCount="200" />
                    <PortofolioCard judul="Judul Portfolio" userName="Gilang Nur A'idi" likeCount="200" viewCount="200" />
                    <PortofolioCard judul="Judul Portfolio" userName="Gilang Nur A'idi" likeCount="200" viewCount="200" />
                </div>
                <div className="btn-wrap">
                    <Button style="button primary" text="LIHAT LEBIH BANYAK" />
                </div>
            </div>
        )
    }
}

export default DisplayKontesPenyelenggara;
