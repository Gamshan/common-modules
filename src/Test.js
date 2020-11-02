import React, { Component } from 'react';
import MultiSelect from "./elements/MultiSelect";
import Select from "./elements/Select";
import Form from "./elements/Form";
import dataSource from "./dataSource";
import MyTypeahead from "./elements/MyTypeahead"


class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createReq: {},
        };
            this.schema = [
                {
                    type: 'SELECT',
                    refer : 'select1',
                    items : [ {'key': "_0001","value":"0001"},
                        {'key': "_0002","value":"0002",'vff':'gghghghjg'}],
                    dependencies : ['select2'],
                    placeholder : "Select 1"
                },
                {
                    type: 'MULTI_SELECT',
                    refer : 'selectM',
                    optionKey:'key',
                    optionValue:'value',
                    placeholder : "Select 1"
                },
                {
                    type: 'SELECT',
                    refer : 'select2',
                    className : 'col-3',
                    isDynamicOptions : true,
                   // isHidden : "req.select1 === '_0002' "
                    placeholder : "Select 2",
                    dependencies: ['select3'],
                },
                {
                    type: 'SELECT',
                    refer : 'select3',
                    className : 'col-3',
                    isDynamicOptions : true,
                    placeholder : "Select 3"
                },
                {
                    type: 'INPUT',
                    refer : 'input',
                    placeholder:"Please enter"

                },
                {
                    type: 'TYPEAHEAD',
                    refer : 'typeahead',
                    items : [ {'key': "_0001","value":"0001"},
                        {'key': "_0002","value":"0002",'vff':'gghghghjg'}],
                    placeholder : "Typeahead"
                },

                {
                    type: 'RADIO',
                    refer : 'radio',
                    className : 'col-6',
                    label : "Select",
                    inline: true,
                    items : [ {'key': "_0001","value":"0001"},
                        {'key': "_0002","value":"0002",'vff':'gghghghjg'},
                        ],
                }
            ]


    }

    getItemsList(refer) {
        console.log("Ohhh" , refer)

        if (refer === 'select2' && dataSource[this.state.createReq.select1])
            return dataSource[this.state.createReq.select1];
        if (refer === 'select3' && dataSource[this.state.createReq.select2])
            return dataSource[this.state.createReq.select2];
        if (refer === 'selectM')
            return  [ {'key': "_0001","value":"0001"},
                {'key': "_0002","value":"0002",'vff':'gghghghjg'}]

        return []
    }

    saveData(){
        console.log(this.state.createReq)
        this.setState({createReq:{}})
    }

    handleOnChange(value,refer){
        let {createReq} = this.state;
        createReq[refer] = value
        this.setState({createReq})
    }


    render() {
        console.log('sssssss')
        let {createReq} = this.state;
        return (

            <div className='row'>
                <div className='col-md-12'>
                    <Form
                        refer='form1'
                        schema = {this.schema}
                        req={createReq}
                        getItemsList = {this.getItemsList.bind(this)}
                        />
                    {/*<Select refer='select'*/}
                            {/*items ={[ {'key': "_0001","value":"0001"},*/}
                    {/*{'key': "_0002","value":"0002",'vff':'gghghghjg'}]}*/}
                            {/*value={createReq.select}*/}
                            {/*handleOnChange = {this.handleOnChange.bind(this)}*/}

                    {/*/>*/}
                    <button onClick={this.saveData.bind(this)}>Save</button>
                </div>
            </div>
        );
    }
}

export default Test