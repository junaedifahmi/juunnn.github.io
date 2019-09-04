import React, { Component, Fragment } from 'react'
import style from "./css/Landing.module.css"
import Heading from "./components/Heading"
import {Carousel} from 'react-materialize'


export default class Landing extends Component {

    autoplay(){
        setTimeout(4300)
    }

    render() {
        return (
            <Fragment>
            <Heading />
            <div className={style.bg}>
                <Carousel options={{fullWidth: false,indicators: true,noWrap:true, dist:500,interval:10}} className={style.carousel}>
                    <p>
                    &lt; a &gt;<br/>
                        Siapa
                    <br/>&lt; /a &gt;
                    </p>

                    <p>
                    &lt; a &gt;<br/>
                        dua
                    <br/>&lt; /a &gt;
                    </p>

                    <p>
                    &lt; a &gt;<br/>
                        tiga
                    <br/>&lt; /a &gt;
                    </p>

                    <p>
                    &lt; a &gt;<br/>
                        empat
                    <br/>&lt; /a &gt;
                    </p>

                    <p>
                    &lt; a &gt;<br/>
                        lima
                    <br/>&lt; /a &gt;
                    </p>
                </Carousel>
            </div>
            </Fragment>
        )
    }
}
