/**
 * Created by jhonataalmeida on 7/4/16.
 */

import React, { Component, PropType } from 'react';

class CommentForm extends Component{
	constructor(){
		super();
		this.state = {author:'', text:''}
	}

	handleAuthorState(e){
		this.setState({author:e.target.value});
	}

	handleTextState(e){
		this.setState({text:e.target.value});
	}

	handleSubmit(e){
		console.log("submit called")
		e.preventDefault();
		var author = this.state.author.trim();
		var text = this.state.text.trim();
		this.props.onCommentSubmit({author:author,text:text})
		if(!text || !author){
			this.setState({author:'',text:''})
		}
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<input type="text"
				       placeholder="your-name"
				       value={this.state.author}
				       onChange={this.handleAuthorState}
					/>
				<input type="text"
				       placeholder="say something"
				       value={this.state.text}
				       onChange={this.handleTextState}
					/>
				<input type="submit" value="Send"></input>
			</form>
		)
	}
}

export default CommentForm;
