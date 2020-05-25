import * as React from 'react';
import Select from '../../../../Utils/Select/Select';

interface IProps {
    onChange: (value: string)=> void
}

const BorderEditor = (props: IProps) => {

    const [border, setBorder] = React.useState<string>("1px solid black")

    React.useEffect(()=>{
        props.onChange(border)
    },[border]);
    const modifyBorder = (index: number, value: string) => {
        const borderProp = border.split(" ")
        borderProp[index] = value;

        setBorder(borderProp.join(" "))
    }
    return (
        <React.Fragment>
            <div>
                border:
            </div>
            <div className="row">
                <div className="col-4">
                    <div> size:</div>
                    <div> <Select 
                    initialvalue="1px"
                        onChange={(value: string)=> modifyBorder(0, value)}
                        optionList={[
                            { id: "1px", title: "1px" },
                            { id: "2px", title: "2px" },
                            { id: "3px", title: "3px" },
                            { id: "4px", title: "4px" },
                        ]}
                    /> </div>
                </div>
                <div className="col-4">
                    <div> style:</div>
                    <div> <Select 
                    initialvalue="solid"
                        onChange={(value: string)=> modifyBorder(1, value)}
                        optionList={[
                            { id: "solid", title: "solid" },
                            { id: "dashed", title: "dashed" },
                            { id: "dotted", title: "dotted" },
                        ]}
                    /> </div>
                </div>
                <div className="col-4">
                    <div> color:</div>
                    <div> <Select 
                    initialvalue="black"
                        onChange={(value: string)=> modifyBorder(2, value)}
                        optionList={[
                            { id: "black", title: "black" },
                            { id: "red", title: "red" },
                            { id: "blue", title: "blue" },
                            { id: "green", title: "green" },
                        ]}
                    /> </div>

                </div>
            </div>

        </React.Fragment>
    )
}

export default BorderEditor