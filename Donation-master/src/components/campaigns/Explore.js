import React from 'react';
import Header from "../headers/light.js";
import Images from './campaignparts/Images';
import Fields from './campaignparts/Fields';
import List from './campaignparts/List';
import Campaigns from './campaignparts/Campaigns';

const Campaign = () => {
    return (
        <>
        <Header />
        <Images/>
        <Fields/>
        <List/>
        <Campaigns />
       </>
    )
}

export default Campaign
