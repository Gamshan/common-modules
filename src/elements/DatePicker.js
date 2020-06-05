// import React, { Component, Fragment } from 'react'
// import $ from 'jquery'
//
// class DatePicker extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             value:'',
//         };
//         if (props.value)
//             this.state.value = props.value
//
//     }
//
//     componentDidMount() {
//         const now = new Date();
//         const day = ("0" + now.getDate()).slice(-2);
//         const month = ("0" + (now.getMonth() + 1)).slice(-2);
//         const today = now.getFullYear()+"-"+(month)+"-"+(day) ;
//         // this.state.value = today
//         this.props.handleOnChange(today,this.props.refer);
//
//     }
//
//     componentWillReceiveProps(nextProps, nextContext) {
//        if (nextProps.value)
//            this.state.value = nextProps.value;
//         this.forceUpdate()
//
//     }
//
//     handleOnChange (event, refer) {
//       this.state.value = event.target.value;
//       this.props.handleOnChange(event.target.value, refer);
//
//
//         this.forceUpdate()
//     }
//
//     render () {
//         const {refer,label,min,max,placeholder } = this.props
//
//         return (
//             <Fragment>
//                 {label &&
//                     <label htmlFor="sel1" style={{fontSize:'14px'}}>{label}</label>
//                 }
//                 <div onChange={event => this.handleOnChange(event, refer)}>
//                     <input
//                         type='date'
//                         min={min}
//                         max={max}
//                         id={refer}
//                         className="form-control"
//                         placeholder={placeholder}
//                         value={this.state.value}/>
//
//                 </div>
//             </Fragment>
//         )
//     }
// }
//
// export default DatePicker