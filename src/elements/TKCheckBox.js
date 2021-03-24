import React, {} from 'react';
import _ from 'lodash'
import './css/TKCheckBox.css'

const TKCheckBox = (props) => {

    const { handleOnChange, label, items , value, refer,inline ,name} = props;

   const toggleCheckboxChange = (selectedKey) => {

       const checkedArray = _.xor(value ? value : [],[selectedKey])
       console.log(checkedArray,selectedKey)
       handleOnChange(checkedArray,refer);
    };

    console.log(value,'value')

        return (

                <div className='form-check'>
                    {label &&
                        <label className='form-check-label' htmlFor='exampleCheck1'>{label}</label>
                    }
                        {items && items.map(item =>{
                          return  <div className={inline ? 'row form-check-inline':'row form-check'} >
                                    <input className='form-check-input'
                                           type="checkbox"
                                           name={name ? name : refer}
                                           checked={_.includes(value,item.key)}
                                           onChange={e=>toggleCheckboxChange(item.key)}
                                    />
                                <label className='form-check-label' htmlFor='exampleCheck1'>{item.value}</label>
                            </div>
                        })
                    }

                </div>
        );
}

export default TKCheckBox;