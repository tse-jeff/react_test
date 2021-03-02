import React from 'react';
import ReactDOM from 'react-dom';

const intro = (
    <div>
        <h1>Hello World?</h1>
        <p>
            This is just a simple test with the basics of React 
            and JSX. Need to figure out how to render/test/deploy this?
        </p>
        <br />
        <p>This is just a JSX component?</p>
    </div>
)

class ComponentStuff extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>
                    Learned how to create React components and how they
                    nested within another component.
                </p>
                <br />
                <p>Everything needs to return only one element.</p>
            </div>
        )
    }
}

class Component extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>A React Component</h2>
                <ComponentStuff />
            </div>
        )
    }
}

// should render the intro element if there is the root id
ReactDOM.render(intro, document.getElementById('root'));

// New component to add to the ReactDOM
ReactDOM.render(<Component />, document.getElementById('component'));