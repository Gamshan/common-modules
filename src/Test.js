import React, {useEffect, useState} from 'react';
import MultiSelect from "./elements/MultiSelect";
import Select from "./elements/Select";
import Form from "./elements/Form";
import dataSource from "./dataSource";
import MyTypeahead from "./elements/MyTypeahead"
import DatePicker from "./elements/TKDatePicker";
import _ from 'lodash'
import moment from 'moment'


const Test = ()=> {

    const [createReq, setCreateReq] = useState({input : 7,datePicker:"2020-03-22"});

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
                    inputType:'number'

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

        return (

            <div className='row'>
                <div className='col-md-12'>
                    <Form
                        refer='form1'
                        schema = {schema}
                        req={createReq}
                        getItemsList = {getItemsList}
                        />
                    <Select refer='selectCombo'
                            items ={[ {'key': "_0001","value":"0001"},
                                    {'key': "_0002","value":"0002",'vff':'gghghghjg'}]}
                            value={createReq.selectCombo}
                            handleOnChange ={handleOnChange}

                    />
                    <DatePicker refer='datePicker' handleOnChange = {handleOnChange} value={createReq.datePicker} dareFormat="yyyy-MM-dd"
                                returnFormat='YYYY-MM-DD'/>
                    <button onClick={saveData}>Save</button>
                </div>
            </div>
        );
}

export default Test