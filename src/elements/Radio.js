import React, { Component, Fragment } from 'react'

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
        const { refer, items, label ,value,inline } = this.props

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
                                        <div className="col-sm-1">
                                            <input type="radio"
                                                   value={item.key}
                                                   disabled={this.state.disabled}
                                                   name={refer}
                                                   checked={this.state.value === item.key}/>
                                        </div>
                                        <div className="col-sm-8">
                                            &nbsp;{item.value}
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