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
                    type: 'select',
                    refer : 'select1',
                    options : [ {'key': "0001","value":"abc"},
                        {'key': "0002","value":"xxxxx",'vff':'gghghghjg'}]

                },
                {
                    type: 'select',
                    refer : 'select2',
                    options : [ {'key': "0001","value":"abc"},
                        {'key': "0002","value":"xxxxx",'vff':'gghghghjg'}],
                    dependency : {key : 'select1', value : '0001' }

                }
            ]
        };

    }

    handleOnChange(createReq){

        this.setState({createReq})

        console.log('createReq',createReq)

    }
    render() {
        let {createReq} = this.state;
        return (

            <div className='row'>
                <div className='col-md-4'>
                    <Form
                        schema = {this.state.schema}
                        req={createReq}
                        handleOnChange={this.handleOnChange.bind(this)}
                        />

                    {/*<Element*/}
                        {/*type='select'*/}
                        {/*req={createReq}*/}
                        {/*refer = 'select2'*/}
                        {/*options={[{'key': "001","value":"abc"},{'key': "002","value":"xxxxx",'vff':'gghghghjg'}]}*/}
                        {/*handleOnChange={this.handleOnChange.bind(this)}*/}
                        {/*isHidden = {createReq.select1 === '0001'}*/}
                        {/*/>*/}
                </div>
            </div>
        );
    }
}

export default Test