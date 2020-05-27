import * as React from 'react';


const PaddingBox = (props: { onChange: (event: any) => void; padding: string }) => {



    return (
        <div className="col-6">
            <div className="row">
                <div className="col-2">
                    Padding:
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
                    <input type="text" name="padding" value={props.padding} onChange={(e)=> props.onChange(e)} />    
                </div>
                <div className="col-9">
                    <input type="range" name="padding" id="padding" value={props.padding} min="0" max="1000"
                        onChange={(e) => {
                            props.onChange(e);
                        }} />
                </div>
            </div>
        </div>
    )
}

export default PaddingBox