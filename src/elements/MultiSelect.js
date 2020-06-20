import React, { Component, Fragment } from 'react'
import { Multiselect } from 'multiselect-react-dropdown';

class MultiSelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: !!props.value ? props.value : [],
            optionKey : !!props.optionKey ? props.optionKey : '_id',
            options:[{name: 'Srigar', id: 1},{name: 'Sam', id: 2},
                {name: 'Abc', id: 3},{name: 'Sddfdsffd', id: 4}]
        };

    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.state.value = nextProps.value ? nextProps.value : []
        this.forceUpdate()

    }

    handleOnChange (event, refer) {


    }

    onSelect(selectedList, selectedItem) {
        this.state.value.push(selectedItem[this.state.optionKey]);
        this.props.handleOnChange(this.state.value,this.props.refer);
    }

    onRemove(selectedList,removedItem) {
        let index = this.state.value.indexOf(removedItem.id)
        if (index > -1)
            this.state.value.splice(index,1);

        this.props.handleOnChange(this.state.value,this.props.refer);
    }
    selectedValues(){
        let array = []
        this.state.value.map(key=>{
            let valueObject =  this.props.items.find(item=> item[this.state.optionKey] === key );
            array.push(valueObject)
            });
    return array;
    }


    render () {
        const { refer,label,placeholder, disabled ,items,optionKey,optionValue} = this.props

        console.log(this.state.value)
        return (
            <Fragment>
                {label &&
                <label htmlFor="sel1" style={{fontSize:'14px'}}>{label}</label>
                }
                <div>
                    <Multiselect
                        options={items} // Options to display in the dropdown
                        selectedValues={this.selectedValues()} // Preselected value to persist in dropdown
                        onSelect={this.onSelect.bind(this)} // Function will trigger on select event
                        onRemove={this.onRemove.bind(this)} // Function will trigger on remove event
                        displayValue={!!optionValue ? optionValue : 'name' } // Property name to display in the dropdown options
                        id='multiSelect'
                        disabled={true}
                        placeholder={placeholder}
                    />
                </div>
            </Fragment>
        )
    }
}

export default MultiSelect