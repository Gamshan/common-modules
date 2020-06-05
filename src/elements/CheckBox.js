// import React, { Component, PropTypes } from 'react';
//
// class Checkbox extends Component {
//     state = {
//         isChecked: this.props.isChecked,
//     };
//
//     toggleCheckboxChange = () => {
//         const { handleCheckboxChange, label, isChecked } = this.props;
//
//         this.setState(({ isChecked }) => (
//             {
//                 isChecked: !isChecked,
//             }
//         ));
//
//         handleCheckboxChange(label);
//     };
//
//     render() {
//         const { label, isChecked, items } = this.props;
//
//
//         return (
//
//                 <div className='form-check'>
//                     <label className='form-check-label' htmlFor='exampleCheck1'>{label}</label>
//                     {items && items.map(item =>{
//                       return  <div>
//                             <input className='form-check-input'
//                                    type="checkbox"
//                                    ref={item.key}
//                                    checked={this.state.isChecked}
//                                    onChange={this.toggleCheckboxChange}
//                             />
//                             <label className='form-check-label' htmlFor='exampleCheck1'>{item.value}</label>
//
//                         </div>
//                     })
//
//                     }
//
//                 </div>
//         );
//     }
// }
//
// // Checkbox.propTypes = {
// //     label: PropTypes.string.isRequired,
// //     handleCheckboxChange: PropTypes.func.isRequired,
// // };
//
// export default Checkbox;