import React from "react";
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['TotalConfirmed', 'TotalDeaths'],
                datasets: [
                    {
                        label: 'Covid',
                        data: [
                            this.props.confirm,
                            this.props.dead
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)'
                        ]
                    }
                ]
            }
        }
    }


    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    option={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        )
    }
}

export default Chart;