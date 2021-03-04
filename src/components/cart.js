

import React, { Component } from "react";
class Card extends Component {
    constructor(props){
        super(props);
        this.state = {post:{}};
    }
    render() {
        return (<div className="card" style={{width:"18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.post.title}</h5>
                    <p className="card-text">{this.props.post.content}</p>
                    
                </div>
  </div>)
  }
}

export default Card;
