import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

import wa from '../img/icon/WhatsApp.png'
import tele from '../img/icon/Telegram.jpg'
import gmail from '../img/icon/gmail.png'

import style from '../css/MyCircle.module.css'

export default class MyCircle extends Component {   
    render() {
        return (
            <div className={style.bg}>
            <div className={'container'}>       
                <h1 className={'center'}> Get To Know me better</h1>
                <Row>
                    <Col m={4} s={12}>
                        <a href={'https://t.me/junaedifahmi'}> <img src={tele} width={230} alt={'Telegram'} /> </a>
                    </Col>

                    <Col m={4} s={12}>
                        <a href="https://wa.me/6281317856756/Hi Juunnn"> <img src={wa} width={230} alt='Whatsapp' /> </a>
                    </Col>

                    <Col m={4} s={12}>
                        <a href={'mailto:junaedi.fahmi15081@student.unsika.ac.id?subject=Hi Juunnn!'}> <img src={gmail} width={230} alt='gmail'/> </a>
                    </Col>

                </Row>

                <Row>
                <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="junaedifahmi"><a class="LI-simple-link" href='https://id.linkedin.com/in/junaedifahmi?trk=profile-badge'>Junaedi Fahmi</a></div>
                </Row>
            </div>
            </div>
        )
    }
}
