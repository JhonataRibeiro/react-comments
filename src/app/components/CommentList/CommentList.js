/**
 * Created by jhonataalmeida on 7/4/16.
 */
import React,{ Component, PropType } from 'react';
import Comments from '../Comments/Comments';

class CommentList extends Component{
	render(){

		var commentNodes = this.props.data.map((comment) => {
			return(
				<Comments author={comment.author} key={comment.id} text={comment.text}>
					lala
				</Comments>
			);
		})

		return(
			<div>
				{ commentNodes }
			</div>
		)
	}
}

export default CommentList;
