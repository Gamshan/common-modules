import React, { Component } from 'react';
import MultiSelect from "./elements/MultiSelect";
import Select from "./elements/Select";
import Form from "./elements/Form";


class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createReq:{subjects:['001']},
            schema : [
                {
                    type: 'SELECT',
                    refer : 'select1',
                },
                {
                    type: 'SELECT',
                    refer : 'select2',
                    className : 'col-3'
                },
                {
                    type: 'INPUT',
                    refer : 'input',
                    placeholder:"Please enter"

                }
                // {
                //     type: 'INPUT',
                //     refer : 'select2',
                //     options : [ {'key': "0001","value":"abc"},
                //         {'key': "0002","value":"xxxxx",'vff':'gghghghjg'}],
                //     isHidden : "req.select1 === '0001' "
                //
                // }
            ]
        };

    }

    getItemsList(refer){

        if(refer === 'select1')
            return  [ {'key': "0001","value":"abc"},
            {'key': "0002","value":"xxxxx",'vff':'gghghghjg'}]

        return [ {'key': "0001","value":"xxxxx"},
            {'key': "0002","value":"xxxxx",'vff':'gghghghjg'}]
    }

    saveData(){
        console.log(this.state.createReq)
    }


    render() {
        let {createReq} = this.state;
        return (

            <div className='row'>
                <div className='col-md-12'>
                    <Form
                        schema = {this.state.schema}
                        req={createReq}
                        getItemsList = {this.getItemsList.bind(this)}
                        />

                    <button onClick={this.saveData.bind(this)}>Save</button>
                </div>
            </div>
        );
    }
}

export default Test