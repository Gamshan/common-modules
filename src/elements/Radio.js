import React, { Component, Fragment } from 'react'
import './css/Radio.css'

class Radio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value:'',
            disabled : props.disabled ? props.disabled : false,
            options:props.items ? props.items : []
        };
        if (props.value)
            this.state.value = props.value

    }

    componentWillReceiveProps(nextProps, nextContext) {
       if (nextProps.value)
           this.state.value = nextProps.value;
       if (nextProps.items)
           this.state.options = nextProps.items
        this.forceUpdate()

    }

    handleOnChange (event, refer) {
        this.state.value = event.target.value;
        this.props.handleOnChange(event.target.value, refer);
        this.forceUpdate()
    }

    render () {
        const { refer, items, label ,name,inline } = this.props

        return (
            <Fragment>
                {label &&
                    <div className="row">
                        <label className='col-md-12' htmlFor="sel1" style={{fontSize:'14px'}}>{label}</label>
                    </div>

                }
                {
                        this.state.options.map(item => {

                                return (
                                    <div className={inline ? 'row form-check-inline':'row form-check'} onChange={event => this.handleOnChange(event, refer)}>
                                        <div className="col-sm-12">
                                            <input type="radio"
                                                   value={item.key}
                                                   disabled={this.state.disabled}
                                                   name={name ? name : refer}
                                                   checked={this.state.value === item.key}/>
                                            <span> &nbsp;&nbsp;{item.value}</span>
                                        </div>
                                    </div>

                                )
                        })
                    }

            </Fragment>
        )
    }
}

export default Radio