import * as React from 'react';

const SizeAmount = (props: { onChange: (value: number) => void; width: number }) => {
     const [rateIndex, setIndex] = React.useState(0)
     const rateHandler = (index: number) => {
         setIndex(index)
         props.onChange(index)
     }

    return (
        <div className="colSizeboxes" onMouseLeave={() => rateHandler(props.width)}>
            <div className={rateIndex >= 1 ? "colSizeActive" : "colSize"}
                onClick={() => props.onChange(1)}
                onMouseOver={() => { rateHandler(1) }}></div>
            <div className={rateIndex >= 2 ? "colSizeActive" : "colSize"}
                onClick={() => props.onChange(2)}
                onMouseOver={() => { rateHandler(2) }}></div>
            <div className={rateIndex >= 3 ? "colSizeActive" : "colSize"}
                onClick={() => props.onChange(3)}
                onMouseOver={() => { rateHandler(3) }}></div>
            <div className={rateIndex >= 4 ? "colSizeActive" : "colSize"}
                onClick={() => props.onChange(4)}
                onMouseOver={() => { rateHandler(4) }}></div>
            <div className={rateIndex >= 5 ? "colSizeActive" : "colSize"}
                onClick={() => props.onChange(5)}
                onMouseOver={() => { rateHandler(5) }}></div>
            <div className={rateIndex >= 6 ? "colSizeActive" : "colSize"}
                onClick={() => props.onChange(6)}
                onMouseOver={() => { rateHandler(6) }}></div>
            <div className={rateIndex >= 7 ? "colSizeActive" : "colSize"}
                onClick={() => props.onChange(7)}
                onMouseOver={() => { rateHandler(7) }}></div>
            <div className={rateIndex >= 8 ? "colSizeActive" : "colSize"}
                onClick={() => props.onChange(8)}
                onMouseOver={() => { rateHandler(8) }}></div>
            <div className={rateIndex >= 9 ? "colSizeActive" : "colSize"}
                onClick={() => props.onChange(9)}
                onMouseOver={() => { rateHandler(9) }}></div>
            <div className={rateIndex >= 10 ? "colSizeActive" : "colSize"}
                onClick={() => props.onChange(10)}
                onMouseOver={() => { rateHandler(10) }}></div>
            <div className={rateIndex >= 11 ? "colSizeActive" : "colSize"}
                onClick={() => props.onChange(11)}
                onMouseOver={() => { rateHandler(11) }}></div>
            <div className={rateIndex >= 12 ? "colSizeActive" : "colSize"}
                onClick={() => props.onChange(12)}
                onMouseOver={() => { rateHandler(12) }}></div>
        </div>

    )
}

export default SizeAmount;