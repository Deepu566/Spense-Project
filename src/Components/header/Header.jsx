import React from 'react';
import { useState } from 'react';
import "./Header.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Calendar from 'react-calendar'
import { dateFormatter } from '../../utils/dateFormatter'

const Header = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [room, setRoom] = useState(1);
    const [adult, setAdult] = useState(1);
    const [child, setChild] = useState(0);
    const [isSubmitted, setIsSubmittes] = useState(false);
    const [roomVal, SetRoomVal] = useState(1);
    const [childVal, SetChildVal] = useState(0);
    const [adultVal, SetAdultVal] = useState(1);

    const submit = () => {
        SetRoomVal(room);
        SetAdultVal(adult);
        SetChildVal(child);
        setIsFilterOpen(false)
    }

    const [isCheckIn, setIsCheckIn] = useState(false)
    const [isCheckOut, setIsCheckOut] = useState(false)

    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')

    const handleDateChange = (value, type) => {
        if (type === 'checkIn') {
            setCheckIn(dateFormatter(value));
            setIsCheckIn(false);
            console.log('hello')
        }
        if (type === 'checkOut') {
            console.log('first')
            setCheckOut(dateFormatter(value));
            setIsCheckOut(false);
        }
    }

    return (
        <div className='header'>
            <div className="wrap">
                <div className="menu">
                    <div className="in" onClick={() => setIsCheckIn(true)}>
                        {
                            checkIn ? (
                                <>
                                    <CalendarMonthIcon />
                                    <label htmlFor="checkin">{checkIn}</label>
                                    <KeyboardArrowDownIcon />
                                </>
                            ) : (
                                <>
                                    <CalendarMonthIcon />
                                    <label htmlFor="checkin">Check In</label>
                                    <KeyboardArrowDownIcon />
                                </>
                            )
                        }
                        {
                            isCheckIn &&
                            (
                                <Calendar className="inCalendar" onChange={(value) => handleDateChange(value, 'checkIn')} />
                            )
                        }
                    </div>
                    <div className="out" onClick={() => setIsCheckOut(true)}>
                        {
                            checkOut ? (
                                <>
                                    <CalendarMonthIcon />
                                    <label>{checkOut}</label>
                                    <KeyboardArrowDownIcon />
                                </>
                            ) : (
                                <>
                                    <CalendarMonthIcon />
                                    <label>Check Out</label>
                                    <KeyboardArrowDownIcon />
                                </>
                            )
                        }
                        {
                            isCheckOut &&
                            (

                                <Calendar className="inCalendar" onChange={(value) => handleDateChange(value, 'checkOut')} />
                            )
                        }
                    </div>


                    <div className="filter">
                        <div className="adults">
                            <span className="adult">{adultVal}</span>adults
                        </div>
                        <span className='dot'></span>
                        <div className="children">
                            <span className="child">{childVal}</span>children
                        </div>
                        <span className='dot'></span>
                        <div className="rooms">
                            <span className="room">{roomVal}</span>rooms
                        </div>
                        {!isFilterOpen ?
                            <KeyboardArrowDownIcon className="icon" onClick={() => setIsFilterOpen(true)} /> :
                            <KeyboardArrowUpIcon className="icon" onClick={() => setIsFilterOpen(false)} />
                        }
                    </div>
                </div>
                <button className='btn'>Check Avilability</button>
            </div>
            {isFilterOpen &&
                <div className="filterMenu">
                    <h1>Maxium 8 guests per room</h1>
                    <div className="selectRooms select">
                        <div className="left">
                            <h2>Rooms</h2>
                            <div className='caption'>(Max: 8 total guests/room)</div>
                        </div>
                        <div className="right">
                            <RemoveCircleOutlineIcon className="icon" onClick={() => room !== 1 && setRoom(room - 1)} />
                            <span>{room}</span>
                            <AddCircleIcon className="icon" onClick={() => setRoom(room + 1)} />
                        </div>
                    </div>
                    <div className="selectadults select">
                        <div className="left">
                            <h2>Adults</h2>
                            <div className='caption'>(Max: 8 total guests/room)</div>
                        </div>
                        <div className="right">
                            <RemoveCircleOutlineIcon className="icon" onClick={() => adult !== 1 && setAdult(adult - 1)} />
                            <span>{adult}</span>
                            <AddCircleIcon className="icon" onClick={() => setAdult(adult + 1)} />
                        </div>
                    </div>
                    <div className="selectchild select">
                        <div className="left">
                            <h2>Children</h2>
                            <div className='caption'>(Max: 8 total guests/room)</div>
                        </div>
                        <div className="right">
                            <RemoveCircleOutlineIcon className="icon" onClick={() => child !== 0 && setChild(child - 1)} />
                            <span>{child}</span>
                            <AddCircleIcon className="icon" onClick={() => setChild(child + 1)} />
                        </div>
                    </div>
                    <div className="doneBtn">
                        <button className='done' onClick={submit} >Done</button>
                    </div>
                </div>
            }


        </div >
    )
}

export default Header
