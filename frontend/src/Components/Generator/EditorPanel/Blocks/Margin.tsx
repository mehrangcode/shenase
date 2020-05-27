import * as React from 'react';


const MarginBox = (props: { onChange: (event: any) => void; margin: string }) => {


    return (
        <div className="col-6">
            <div className="row">
                <div className="col-12">
                    Margin:
                </div>
                <div className="col-11">
                    <div className="row">
                        <div className="col-3">top</div>
                        <div className="col-3">top</div>
                        <div className="col-3">top</div>
                        <div className="col-3">top</div>
                    </div>
                </div>
                <div className="col-2">
                    <input type="text" name="margin" value={props.margin} onChange={(e)=> props.onChange(e)} />    
                </div>
                <div className="col-9">
                    <input type="range" name="margin" id="margin" value={props.margin} min="0" max="800"
                        onChange={(e) => {
                            props.onChange(e);
                        }} />
                </div>
            </div>
        </div>
    )
}

export default MarginBox