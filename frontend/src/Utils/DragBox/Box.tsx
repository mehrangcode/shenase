import React from 'react';

const clamp = function(n: any) {
    return Math.min(
        Math.max(n, 0),
        // container width - window width
        1110 - 400);
};

export default class Window extends React.Component<any, any> {
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
                    <div>Panel</div>
                    <div style={{cursor: "pointer"}} onClick={() => this.props.onClose()}>X</div>
                    
                </div>
                <div className="floatBoxBody">
                    <div className="hr-diagram">
                        Box
                    </div>
                    
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
                y: clamp(e.pageY - this.state.yDiff)
            });
        }
    }
}

