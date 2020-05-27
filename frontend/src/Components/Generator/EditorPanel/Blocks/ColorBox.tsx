import * as React from 'react';
import { TwitterPicker, CirclePicker, BlockPicker, SketchPicker } from 'react-color';

interface IProps {
    boxType?: "sketch" | "circle" | "block"
    color: string;
    onChange: (value: string) => void
}

const ColorBox = (props: IProps) => {

    const [bgColor, setColor] = React.useState<any>(props.color)
    const [colorPolet, showColorPolet] = React.useState<boolean>(false)

    return (
        <span className="colorBoxContainer">
            <span className="colorPlaceHolder" style={{ backgroundColor: bgColor }}
                onClick={() => showColorPolet(!colorPolet)}
            >
            </span>
                {colorPolet && props.boxType === "sketch" && <span className="colorBox">
                    <SketchPicker color={bgColor}
                    disableAlpha={true}
                    presetColors ={['#000000', '#FF6900', '#FCB900', '#7BDCB5', 
                    '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', 
                    '#EB144C', '#F78DA7', '#9900EF',
                    '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', 
                    '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB']}
                        onChange={(value: any, event: any) => {
                            props.onChange(value.hex)
                            setColor(value.hex)
                        }} />
                </span>}
                {colorPolet  && props.boxType === "block" && <span className="colorBox">
                    <BlockPicker color={bgColor}
                        colors={['#000000', '#D9E3F0', '#F47373', '#697689', 
                        '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', 
                        '#ba68c8']}
                        onChange={(value: any, event: any) => {
                            props.onChange(value.hex)
                            setColor(value.hex)
                        }} />
                </span>}
                {colorPolet  && props.boxType === "circle" && <span className="colorBox">
                    <CirclePicker color={bgColor}
                        colors={['#000000', "#f44336", "#e91e63", "#9c27b0", "#673ab7", 
                        "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", 
                        "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", 
                        "#795548", "#607d8b"]}
                        onChange={(value: any, event: any) => {
                            props.onChange(value.hex)
                            setColor(value.hex)
                        }} />
                </span>}
                {colorPolet && !props.boxType && <span className="colorBox">
                    <TwitterPicker color={bgColor}
                        colors={['#000000', '#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8']}
                        onChange={(value: any, event: any) => {
                            props.onChange(value.hex)
                            setColor(value.hex)
                        }} />
                </span>}
        </span>
    )
}

export default ColorBox