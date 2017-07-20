import React from 'react';
import './style.scss'
import img from './flower.jpg'
export default class ExampleComponent extends React.Component{
    render(){
        return <div>
            Hello Talent UI
            <img src={img} />
            </div>
    }
}