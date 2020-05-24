import * as React from 'react';

interface IProps {
    rate: number
}
const CircleRate = (props: IProps)=> {

    const rateRander = () => {
        const rates = [];
        for (let i = 0; i < props.rate; i++) {
            
            rates.push(<div className="circleRate"></div>)
        }
        return <div className="rate">
            {rates.map(el => el)}
        </div>
    }

    return rateRander()


}

export default CircleRate