import React, {Component} from 'react';

export class Header extends Component {
    render() {
        return (
            <header style={{display: 'flex', justifyContent: 'space-between'}}>
                {this.props.left}
                {this.props.right}
            </header>
        );
    }
}

export class App extends Component {
    render() {
        return (
            <Header
                left={<Logo src={'http://google.com/img.jpg'}/>}
                right={<MainMenu menuList={['...']}/>}
            />
        );
    }
}