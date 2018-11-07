import React from 'react';
import {Doughnut} from 'react-chartjs-2';
// ===== Models

// ===== Components / Containers

// ===== Actions

// ===== Others
import './style.css';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};


class BoardStatComp extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Doughnut data = {data} />
            </div>

        );
    }
}

BoardStatComp.propTypes = {
};
BoardStatComp.defaultProps = {
};

export default BoardStatComp;
