import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const RcSlider = () => {
    
    const [range, setRange] = useState([0, 400]);
    const onchangeRange = (newRange) => {
        setRange(newRange)
    }

    return (
        <div>
            <Slider range
                min={0}
                max={1000}
                defaultValue={range}
                onChange={onchangeRange} />
            <div>
                <input type="number" value={range[0]} readOnly /> $
                -
                <input type="number" value={range[1]} readOnly /> $
            </div>
        </div>
    );
}

export default RcSlider;
