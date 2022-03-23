import React, {useEffect, useState} from 'react';
import MultiSelect from "./elements/MultiSelect";
import Select from "./elements/Select";
import Form from "./elements/Form";
import dataSource from "./dataSource";
import MyTypeahead from "./elements/MyTypeahead"
import TKDatePicker from "./elements/TKDatePicker";
import _ from 'lodash'
import moment from 'moment'
import TKCheckBox from "./elements/TKCheckBox";
import Input from "./elements/Input";



const Test = ()=> {

    const [createReq, setCreateReq] = useState({input : 7});

    const schema = [
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
                    placeholder:"Please enter",
                    inputType:'textArea',
                    rows:6

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

    useEffect(()=>{
        //setValues()
    },[])

    const setValues = () =>{
        setTimeout(()=>{
            setCreateReq({ select1: "_0001", select2: "aaaaa" })
        },2000)

    }
    const getItemsList = (refer) => {
        if (refer === 'select2' && dataSource[createReq.select1])
            return dataSource[createReq.select1];
        if (refer === 'select3' && dataSource[createReq.select2])
            return dataSource[createReq.select2];
        if (refer === 'selectM')
            return  [ {'key': "_0001","value":"0001"},
                {'key': "_0002","value":"0002",'vff':'gghghghjg'}]

        return []
    }

    const saveData = () =>{
        console.log(createReq)
        //this.setState({createReq:{}})
    }

    const handleOnChange = (value,refer)=>{
        console.log('hereeeee',value,refer)
        createReq[refer] = value
        setCreateReq({...createReq})
    }

    console.log(createReq.delivered)


        return (

            <div className='row'>
                <div className='col-md-12'>
                    <Form
                        refer='form1'
                        schema = {schema}
                        req={createReq}
                        getItemsList = {getItemsList}
                        />
                    <Input
                        refer='username'
                        handleOnChange={handleOnChange}
                        value={createReq.username}
                        placeholder='Username ...'/>
                    <Select refer='selectCombo'
                            items ={[ {'key': "_0001","value":"0001"},
                                    {'key': "_0002","value":"0002",'vff':'gghghghjg'}]}
                            value={createReq.selectCombo}
                            handleOnChange ={handleOnChange}

                    />
                    <TKDatePicker refer='datePicker'
                                  handleOnChange = {handleOnChange}
                                  value={createReq.datePicker} dateFormat="dd-MM-yyyy"
                                  returnFormat='YYYY-MM-DD'/>

                    <MyTypeahead
                        placeholder='Select supplier'
                        handleOnChange={handleOnChange}
                        refer='supplier'
                        optionValue='name'
                        items={[]}
                        value={createReq.supplier}
                        disabled={true}
                    />

                    {/*<MultiSelect*/}
                        {/*refer='customer'*/}
                        {/*options={[{name: 'Srigar', id: 1},{name: 'Sam', id: 2},*/}
                            {/*{name: 'Abc', id: 3},{name: 'Sddfdsffd', id: 4}]} // Options to display in the dropdown*/}
                        {/*selectedValues={[]} // Preselected value to persist in dropdown*/}
                        {/*// onSelect={this.onSelect.bind(this)} // Function will trigger on select event*/}
                        {/*// onRemove={this.onRemove.bind(this)} // Function will trigger on remove event*/}
                        {/*//displayValue={!!optionValue ? optionValue : 'name' } // Property name to display in the dropdown options*/}
                        {/*//id='multiSelect'*/}
                        {/*onFocus={getItemsList}*/}
                        {/*disabled={true}*/}
                        {/*placeholder="Select customer"*/}
                        {/*// handleOnChange={this.handleOnChange.bind(this)}*/}
                    {/*/>*/}

                    <TKCheckBox refer='delivered'
                                value={createReq.delivered}
                                items={[ {'key': "_0001","value":"0001"},
                                    {'key': "_0002","value":"0002",'vff':'gghghghjg'}]}
                                handleOnChange={handleOnChange}/>

                    <button onClick={saveData}>Save</button>
                </div>
            </div>
        );
}

export default Test
