import React from "react";
import Feature from "./Feature.js";
import './FeatureList.css';

const FeatureList = () => (
    <div className='FeatureList'>
        <Feature img='/images/icon1.png' title='Declarative' description='React makes it painless to create interative UIs'/>
        <Feature img='/images/icon2.png' title='Components' description='Build encapsuled components that manage their state.'/>
        <Feature img='/images/icon3.png' title='Single-Way' description="A set of immutable values are passed to the component's."/>
        <Feature img='/images/icon4.png' title='JSX' description='Statically-typed designed to run on modern browers'/>
    </div>
)

export default FeatureList;