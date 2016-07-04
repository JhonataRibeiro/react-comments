/**
 * Created by jhonataalmeida on 6/28/16.
 */
import React, { Component, PropType } from 'react';
import CommentList from "../components/CommentList/CommentList";
import CommentForm from "../components/CommentForm/CommentForm";

class CommentBox extends Component {
	render() {
		console.log("state: " + this.props)
		return (
			<div>Comments
				<CommentForm/>
				<CommentList data={ this.props.data }/>
			</div>
		);
	}
}

export default CommentBox;
