import React, { ReactElement } from 'react';
import './App.css';
import Example from './library/Example';



interface Home {
    render(): ReactElement;
    setup(): ReactElement;
}

class App extends React.Component implements Home {

    constructor(props: any) {
        super(props);
    }

    setup(): ReactElement {
        return <Example />;
    }

    render(): ReactElement {
        return (
            <div className="wrap">
                {this.setup()}
            </div>
        );
    }

}


export default App;
