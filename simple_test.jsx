import React from 'react';
import ReactDOM from 'react-dom';

const intro = (
    <div>
        <h1>Hello World?</h1>
        <p>
            This is just a simple test with the basics of React 
            and JSX. Need to figure out how to render/test/deploy this?
        </p>
    </div>
)

// should render the intro element if there is the root id
ReactDOM.render(intro, document.getElementById('root'));