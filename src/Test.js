import React, { Component } from 'react';
import MultiSelect from "./elements/MultiSelect";


class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createReq:{subjects:['001']}
        };
    }

    handleOnChange(value,refer){
        let {createReq} = this.state;
        createReq[refer]=value
        this.setState({createReq})

    }
    render() {
        let {createReq} = this.state;
        return (
            <div>
                <MultiSelect
                    refer='subjects'
                    items={[{'id': "001","name":"abc"},{'id': "002","name":"xxxxx",'vff':'gghghghjg'}]}
                    label='Subjects'
                    handleOnChange={this.handleOnChange.bind(this)}
                    value ={createReq.subjects}
                    optionValue='name'
                    optionKey = 'id'
                    placeholder='Select subjects'/>
            </div>
        );
    }
}

export default Test