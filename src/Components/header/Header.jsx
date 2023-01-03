import React from 'react';
import { useState } from 'react';
import "./Header.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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
    return (
        <div className='header'>
            <div className="wrap">
                <div className="menu">
                    <div className="in"><DateRangeIcon />Check in
                        <KeyboardArrowDownIcon className="icon" /></div>
                    <div className="out"><DateRangeIcon className="icon" />Check Out <KeyboardArrowDownIcon className="icon" /></div>

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
