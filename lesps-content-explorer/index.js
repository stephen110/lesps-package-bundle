

import { Module } from 'framework-core';
import Home from 'framework-home';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class ExperienceModule extends Module {

    initialize() {
        this.path   = 'experience-module';
        this.icon   = 'icon-FPO_square';
        this.title  = 'Experience Module';

        this.routes = {
            '/' : function(){}
        };

        this.render();
        Home.apps.add( this );
    }

    render() {
        ReactDOM.render (
            <div className="experience-module">Experience Module</div>
            , this.element );
    }

}

export default ExperienceModule;