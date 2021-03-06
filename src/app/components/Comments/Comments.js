/**
 * Created by jhonataalmeida on 7/4/16.
 */
import React, { Component, PropType} from "react";
import Remarkable from "remarkable";

class Comments extends Component{

	constructor(){
		super();
		this.rawMarkup = this.rawMarkup.bind(this);
	}

	rawMarkup() {
		console.log("called rawMarkup")
		const md = new Remarkable();
		const rawMarkup = md.render(this.props.children.toString());
		return { __html: rawMarkup };
	}

	render(){
		return(
			<div>
				<h4>{this.props.author}</h4>
				<span dangerouslySetInnerHTML={this.rawMarkup()} />
			</div>)
	}
}

export default Comments;

