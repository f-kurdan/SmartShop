import React from 'react'
import { CheckBox } from '@mui/icons-material'
import { FormControl } from '@mui/base'
import { Checkbox, FormControlLabel, FormGroup, FormLabel } from '@mui/material'

const UnboundedFont = { "fontFamily": "Unbounded" };
const checkboxStyle = 'mr-2 scale-125 hover:cursor-pointer';

const PhonesFilter = () => {
  return (
    <>
      <div>
        <h2 className='font-bold mb-2'>Бренд</h2>
        <div className='ml-2'>
          <input className={checkboxStyle} type="checkbox" id='apple' value={1} />
          <label htmlFor="apple">Apple</label>
        </div>
        <div className='ml-2'>
          <input className={checkboxStyle} type="checkbox" id='samsung' value={2} />
          <label htmlFor="samsung">Samsung</label>
        </div>
        <div className='ml-2'>
          <input className={checkboxStyle} type="checkbox" id='xiaomi' value={3} />
          <label htmlFor="xiaomi">Xiaomi</label>
        </div>
      </div>
    </>
  )
}

export default PhonesFilter