import React, { Component } from 'react';
import {InfoConsumer, InfoCosumer} from '../context';
import Info from '../Info';


export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <InfoCosumer>
                        {data => {
                            return data.info.map(item => {
                                return <Info key={item.id} item={item} />
                            })
                        }}
                    </InfoCosumer>
                </div>
            </div>





        )
    }
}
