import React from 'react';
import {render} from 'react-dom';
import CommentBox from './container/CommentBox'; // Our custom react component

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render

render(<CommentBox/>, document.getElementById('app'));
