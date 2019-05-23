import React, { Component, ReactElement } from 'react';
import { Ext } from './Ext';

interface CustomInputProps {
    title?: string;
}
interface CustomState {
    welcome: string;
    title: string | null;
    data?: object
}

class Example extends Component<CustomInputProps, CustomState> {

    constructor(props: CustomInputProps) {
        super(props);

        this.state = {
            title: props.title || "Hellowwww",
            welcome: "Welcome"
        };
    }

    changeTitle(title: string): void {
        const data = { nama: "ukung" };
        this.setState({ title, data });
    }

    render() {
        return (
            <div>
                <h1>Hello React TS</h1>
                <Ext />
                <div>{this.state.title}</div>
                <button onClick={() => {
                    this.changeTitle("Halo Ganteng");
                }}>{this.state.welcome}</button>
            </div>
        );
    }

}

export default Example;