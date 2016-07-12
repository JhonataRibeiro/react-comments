/**
 * Created by jhonataalmeida on 6/28/16.
 */
import React, { Component, PropType } from 'react';
import CommentList from "../components/CommentList/CommentList";
import CommentForm from "../components/CommentForm/CommentForm";

class CommentBox extends Component {
	
	constructor(props){
		super(props);
		this.state = {}
	}

	handleCommentsSubmit(comment){
		console.log("handleCommentsSubmit: " + comment);
	}
	
	render() {
		return (
			<div>
				<CommentForm onCommentSubmit={ this.handleCommentsSubmit }/>
				<CommentList data={ this.props.data }/>
			</div>
		);
	}
}

export default CommentBox;
