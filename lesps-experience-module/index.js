

import { Module } from 'framework-core';
import Home from 'framework-home';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class ContentExplorer extends Module {

    initialize() {
        this.path   = 'content-explorer';
        this.icon   = 'icon-FPO_square';
        this.title  = 'Content Explorer';

        this.routes = {
            '/' : function(){}
        };

        this.render();
        Home.apps.add( this );
    }

    render() {
        ReactDOM.render (
            <div className="content-explorer">Content Explorer</div>
            , this.element );
    }

}

export default ContentExplorer;