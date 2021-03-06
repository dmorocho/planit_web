import React, {useState} from 'react'
import './datepicker.css'
import {DateRangePicker} from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DatePicker = () => {

    const [startDate,setStartDate] = useState(new Date())
    const [endDate,setEndDate] = useState(new Date())

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    return(
        <div className='datepicker_div'>
            <DateRangePicker 
            ranges={[selectionRange]} onChange = {handleSelect}/>
        </div>
    )
}

export default DatePicker