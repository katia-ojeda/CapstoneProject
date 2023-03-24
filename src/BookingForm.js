import React, { useState } from 'react';
import './App.css';

const BookingForm=({availableTimes,
    dispatchOnDateChange, submitForm})=> {

    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [time, setTime] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form submitted!");

        const formData = {
            date,
            time,
            guests
          };
          submitForm(formData);
    };

    const handleDate = (e) => {
        setDate(e.target.value);
        dispatchOnDateChange(e.target.value);
    }

    const listItems = availableTimes.map((hour)=>
        <option key={hour.toString()}>{hour}</option>
    );

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    name="date"
                    value={date}
                    onChange ={handleDate}
                />
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    name="time"
                    value={time}
                    onChange={(e)=> setTime(e.target.value)}
                >
                    {listItems};
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    name="guests"
                    value={guests}
                    onChange={(e)=> setGuests(e.target.value)}
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={occasion}
                    onChange={(e)=> setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                </select>
                <input
                    type="submit"
                    value="Make Your reservation"
                />
            </form>
        </div>
    );
  }

  export default BookingForm;