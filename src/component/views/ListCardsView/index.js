import React from 'react';
import {Pie, Bar} from 'react-chartjs-2';

// ===== Others
import './style.css';

// ==================================

const ListCardsView = props =>(
    <div className="col-sm-6 dataType">
        <div className="dataValues">
            <Pie data = {props.data} 
                options={{
                    title: {
                        display: true,
                        text: 'Cards per list',
                        fontSize: 20
                    },
                    maintainAspectRatio: true,
                }}
            />
        </div>
    </div>
)

export default ListCardsView