import React from "react";

class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            comment: []
        }
        this.myRef = React.createRef();
    }

    handler = () => {
        let current = this.state.count;
        current++;
        this.setState({
            count: current
        });

    }

    addComment = () => {
        let comment = this.myRef.current.value;
        let commentsRef = this.state.comment;
        commentsRef.push(comment);
        this.setState({
            'comment': commentsRef
        });
        this.myRef.current.value = "";
    }

    render() {
        return (
            <>
                <h1>Hello</h1>
                <button onClick={this.handler}>Change state</button>
                <div>
                    {this.state.count}
                </div>
                <textarea ref={this.myRef}></textarea>
                <div>
                    <button onClick={this.addComment}>Add commit</button>
                </div>
                <div>
                    <ul>
                        {this.state.comment.map(item => <li>{item}</li>)}
                    </ul>
                </div>
            </>
        )
    }
}

export default Main;