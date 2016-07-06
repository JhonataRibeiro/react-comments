import React from 'react';
import {render} from 'react-dom';
import CommentBox from './container/CommentBox'; // Our custom react component

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render

const data = [
	{id: 1, author: "Jhonata Ribeiro", text: "This is one comment"},
	{id: 2, author: "Jhon Stuart", text: "This is *another* comment"}
];

render(<CommentBox data = { data } />, document.getElementById('app'));