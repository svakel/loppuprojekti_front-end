// TÄÄ EI VIELÄ SKULAA

import React, { Component } from "react";
import ig from '../img/ig.png';

class Instagram extends Component {

    render() {
        return (
            <div>
                <div className="instagram">
                    <div className="ig_img"><img src={ig} alt="instagram"  /></div>
                </div>
            </div>  
        );
    }
}

export default Instagram;