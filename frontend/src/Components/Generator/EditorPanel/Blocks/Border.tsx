import * as React from 'react';
import Select from '../../../../Utils/Select/Select';
import ColorBox from './ColorBox';

interface IProps {
    border: string
    onChange: (value: string) => void
}

const BorderEditor = (props: IProps) => {

    const [border, setBorder] = React.useState<string>(props.border)

    React.useEffect(() => {
        props.onChange(border)
    }, [border]);
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
                        initialvalue={border.split(" ")[0] ? border.split(" ")[0] : ""}
                        onChange={(value: string) => modifyBorder(0, value)}
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
                        initialvalue={border.split(" ")[1] ? border.split(" ")[1] : ""}
                        onChange={(value: string) => modifyBorder(1, value)}
                        optionList={[
                            { id: "solid", title: "solid" },
                            { id: "dashed", title: "dashed" },
                            { id: "dotted", title: "dotted" },
                        ]}
                    /> </div>
                </div>

                <div className="col-4">
                    <div> color:  </div>
                    <div>
                        <ColorBox color={border.split(" ")[2] ? border.split(" ")[2] : "#000"}
                            onChange={(value: string) => modifyBorder(2, value)} />
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default BorderEditor