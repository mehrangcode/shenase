import React from 'react';

const clamp = function(n: any) {
    return Math.min(
        Math.max(n, 0),
        // container width - window width
        1110 - 400);
};

export default class FloatBox extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showMainSequence: true,
            isDragging: false,
            xDiff: 0,
            yDiff: 0,
            x: 50,
            y: 50
        };

        this.onDragStart = this.onDragStart.bind(this);

        this.toggleMainSequence = this.toggleMainSequence.bind(this);
    }
    componentDidMount() {
        document.addEventListener('mousemove', this.onDrag.bind(this));
        document.addEventListener('mouseup', this.onDragStop.bind(this));
        this.setState({
            x: this.props.posX,
            y: this.props.posY
        })
    }
    componentDidUpdate(prevProps: any){
        if(!this.state.isDragging && 
            (prevProps.posX !== this.props.posX || prevProps.posY !== this.props.posY)){
            this.setState({
                x: this.props.posX,
                y: this.props.posY
            })
        }
    }
    render() {
        if (this.props.isHidden) {
            return null;
        }

        const style: any = {
            position: 'absolute',
            transform: `translate(${this.state.x}px, ${this.state.y}px)`
        };

        return (
            <div className="floatBox" style={style}>
                <div className="floatBoxTitle"
                     onMouseDown={this.onDragStart}>
                    <div>Editor</div>
                </div>
                <div className="floatBoxBody">
                   {this.props.children}
                </div>
            </div>
        );

    }
    toggleMainSequence(e: any) {
        this.setState({
            showMainSequence: !!e.target.checked
        });
    }

    onDragStart(e: any) {
        this.setState({
            isDragging: true,
            xDiff: e.pageX - this.state.x,
            yDiff: e.pageY - this.state.y
        });
    }
    onDragStop() {
        this.setState({isDragging: false});
    }
    onDrag(e: any) {
        if (this.state.isDragging) {
            this.setState({
                x: clamp(e.pageX - this.state.xDiff),
                y: e.pageY - this.state.yDiff
            });
        }
    }
}

