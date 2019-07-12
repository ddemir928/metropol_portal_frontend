import React, { Component } from 'react'


class AddSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
                        data:[],
                        _id : props._id,
                        name:props.name,
                        handleChange:props.onchange
                     };

      }
    render() {
        const {data} = this.props;
        const {name} = this.props;

        var selectElement = [];
        selectElement.push(<option key="-1" value="-1">Seçiniz</option>)
        for (let index = 0; index < data.length; index++) {
            selectElement.push(<option key={data[index]._id} value={data[index]._id}>{data[index].name}</option>);
}
        return (
            <select className="form-control" name={this.state.name} id={this.state._id} onChange={this.props.onchange}>
                {selectElement}
            </select>
        )
    }
}

export default AddSelect;
