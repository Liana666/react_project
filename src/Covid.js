import React from "react";
import Chart from './Chart'



class Covid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            input: '',
            submit: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    componentDidMount() {
        fetch('https://api.covid19api.com/summary')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    isLoaded: true,
                    items: data.Countries
                });
                console.log(this.state.items)
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )

    }

    getValue() {
        this.setState({
            submit: this.state.input
        });
    }


    handleChange(e) {
        this.setState({
            input: e.target.value.toLowerCase()
        })
    }


    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>Error</p>
        }
        else if (!isLoaded) {
            return <p>Loading...</p>
        }
        else {
            return (
                <>
                    <div>
                        Enter country name (for example, russia)
                    </div>
                    <input onChange={this.handleChange} value={this.state.input} />
                    {/* <h2>{this.renderEl(this.state.submit)}</h2> */}
                    <button onClick={this.getValue} className="btn">Push</button>

                    <ul>
                        {items.map(item => (
                            item.Slug == this.state.submit ? <Chart confirm={item.TotalConfirmed} dead={item.TotalDeaths} /> : null
                        ))
                        }
                    </ul>
                </>
            )
        }
    }
}

export default Covid;