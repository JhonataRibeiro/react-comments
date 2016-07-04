/**
 * Created by jhonataalmeida on 7/4/16.
 */
import React, { Component, PropType} from "react";

class Comments extends Component{
	render(){
		return(
			<div>
				<h4>{this.props.author}</h4>
				<h4>{this.props.text}</h4>
			</div>)
	}
}

export default Comments;

