/**
 * Created by jhonataalmeida on 7/4/16.
 */

import React, { Component, PropType } from 'react';

class CommentForm extends Component{
	constructor(){
		super();
		this.state = {author:'', text:''};
		this.onChangeAuthorState = this.onChangeAuthorState.bind(this);
		this.onChangeTextState = this.onChangeTextState.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onChangeAuthorState(e){
		this.setState({author:e.target.value});
	}

	onChangeTextState(e){
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
				       place    holder="your-name"
				       value={this.state.author}
				       onChange={this.onChangeAuthorState}
					/>
				<input type="text"
				       placeholder="say something"
				       value={this.state.text}
				       onChange={this.onChangeTextState}
					/>
				<input type="submit" value="Send"></input>
			</form>
		)
	}
}

export default CommentForm;
