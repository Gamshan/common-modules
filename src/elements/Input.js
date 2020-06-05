// import React, { Component, Fragment } from 'react'
//
// class Input extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             value:'',
//         };
//
//         if (props.value)
//             this.state.value = props.value
//
//     }
//
//     componentWillReceiveProps(nextProps, nextContext) {
//         this.state.value = nextProps.value ? nextProps.value : ''
//         this.forceUpdate()
//
//     }
//
//     handleOnChange (event, refer) {
//         if(event.target.type ==='number'){
//             this.state.value = parseInt(event.target.value);
//             this.props.handleOnChange((event.target.value), refer);
//         }else{
//             this.state.value = event.target.value;
//             this.props.handleOnChange(event.target.value, refer);
//         }
//
//         this.forceUpdate()
//     }
//     imposeMinMax(el){
//         if(el.target.value !== "" && el.target.type === 'number'){
//             if(el.target.min && parseInt(el.value) < parseInt(el.target.min)){
//                 el.target.value = el.target.min;
//             }
//             if(el.target.max && parseInt(el.target.value) > parseInt(el.target.max)){
//                 el.target.value = el.target.max;
//             }
//         }
//     }
//     render () {
//         const { refer,label,type,min,max,step,placeholder, disabled } = this.props
//
//         return (
//             <Fragment>
//                 {label &&
//                     <label htmlFor="sel1" style={{fontSize:'14px'}}>{label}</label>
//                 }
//                 <div onChange={event => this.handleOnChange(event, refer)}>
//                     {type !== 'textArea' &&
//                     <input
//                         type={type ? type : 'text'}
//                         step={step}
//                         min={min}
//                         max={max}
//                         className="form-control"
//                         onKeyUp={event => this.imposeMinMax(event)}
//                         placeholder={placeholder}
//                         disabled = {disabled}
//                         value={this.state.value}/>
//                     }
//
//                     {type === 'textArea' &&
//                     <textarea
//                         className="form-control"
//                         placeholder={placeholder}
//                         disabled = {disabled}
//                         value={this.state.value}/>
//                     }
//                 </div>
//             </Fragment>
//         )
//     }
// }
//
// export default Input