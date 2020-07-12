import React, { Component, Fragment } from 'react'
import $ from 'jquery'
import Select from "./Select";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
          req : props.req
        };
    }

    componentDidMount() {
        // $('#mySelect').selectpicker();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.req)
            this.setState({req:nextProps.req})

        // if (nextProps.isHidden){
        //     let {req} = this.state
        //     delete req[nextProps.refer]
        //     this.setState({req})
        // }

    }

    handleOnChange (e , value, refer) {
        let {req} = this.state;
        req[refer] = value;

        let currentSchemeObj = this.props.schema.find(e=>e.dependency
            &&  e.dependency.key === refer
            && e.dependency.value !== value)
        if (!!currentSchemeObj){
            delete req[currentSchemeObj.refer]
        }

        this.setState({req})



        this.props.handleOnChange(req)

    }

    render () {
        const {schema,req} = this.props;

        return (
            <div>
                {schema.map(e=>{
                         return <Fragment>
                            {e.type === 'select' && (!e.dependency || e.dependency && req[e.dependency.key] === e.dependency.value) &&
                                <Select
                                    refer={e.refer}
                                    handleOnChange = {this.handleOnChange.bind(this,e)}
                                    items = {e.options}
                                    value = {req[e.refer]}
                                />
                            }
                </Fragment>
            })}

            </div>

        )
    }
}

export default Form