import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

const list = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

const Component = () => {
    //7월로 setting
    const [index, setIndex] = useState(6);

    //한 달 전으로 이동
    const changeIndex_minus = () => {
        setIndex(index-1);
    }

    //한 달 후로 이동
    const changeIndex_plus = () => {
        setIndex(index+1);
    }

    return(
    <SwipeableViews enableMouseEvents index={index}>
        {list.map((el, index) =>
        <>
            <div className="month_list">
                <div className="month_before">
                    <div id="year">2021<br/></div>
                    <button 
                        className="month_btn_left"
                        onClick={changeIndex_minus}
                    >
                        {list[index-1]}
                    </button>
                </div>
                <div className="month_current">
                    <div id="year">2021<br/></div>
                    {el}
                </div>
                <div className="month_after">
                    <div id="year">2021<br/></div>
                    <button 
                        className="month_btn_right"
                        onClick={changeIndex_plus}
                    >
                        {list[index+1]}
                    </button>
                </div>
            </div>
        </>
        )}
    </SwipeableViews>
    );
}

export default Component;