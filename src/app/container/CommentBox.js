/**
 * Created by jhonataalmeida on 6/28/16.
 */
import React, { Component, PropType } from 'react';
import CommentList from "../components/CommentList/CommentList";
import CommentForm from "../components/CommentForm/CommentForm";

class CommentBox extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			data : [
			{id: 1, author: "Jhonata Ribeiro", text: "This is one comment"},
			{id: 2, author: "Jhon Stuart", text: "This is *another* comment"}
			]
		}
		this.handleCommentsSubmit = this.handleCommentsSubmit.bind(this);
	}

	handleCommentsSubmit(comment){
		comment.id = Date.now();
		var comments = this.state.data;
		var newComments = comments.concat([comment]);
		this.setState({data:newComments});
	}
	
	render() {

		return (
			<div>
				<CommentList data={ this.state.data }/>
				<CommentForm onCommentSubmit={ this.handleCommentsSubmit }/>
			</div>
		);
	}
}

export default CommentBox;
