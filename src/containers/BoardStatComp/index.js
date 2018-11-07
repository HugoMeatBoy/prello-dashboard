import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
// ===== Models

// ===== Components / Containers

// ===== Actions

// ===== Others
import './style.css';

const data = {
	labels: [
		'Due date missed',
        'In process',
        'Todo',
        'Done in time',
	],
	datasets: [{
		data: [4, 45, 48, 29],
		backgroundColor: [
		'#FF6384',
		'#c48b56',
        '#6ea0c9',
        '#55a05a'
		]
	}]
};


class BoardStatComp extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <Pie data = {data} 
                      width={38}
                      height={10}
                     />
                </div>
                <div className="col-sm-6">
                    <Doughnut 
                        data = {data} 
                        width={50}
	                    height={10}
                    	options={{
                            maintainAspectRatio: true,
                            circumference: Math.PI,
                            rotation: Math.PI
	                    }}
                    />
                </div>
            </div>
        );
    }
}

BoardStatComp.propTypes = {
};
BoardStatComp.defaultProps = {
};

export default BoardStatComp;
