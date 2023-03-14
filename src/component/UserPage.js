import React from 'react'
import { Link } from 'react-router-dom'

const UserPage = () => {
  return (
    <div>
      <header>
      <div>
        <div>
          <Link className='Logo' to="/">InviteGo</Link>
        </div>

        <div>
         <Link to="/Calendar">Calendar</Link><br/>
         <Link to="/Contacts">Contacts</Link><br/>
         <Link to="/Calendar">Coolness Tracker</Link><br/>
         <Link to="/Calendar">Upcoming Events</Link><br/>
         <Link to="/Calendar">My Social Media</Link><br/>
         <Link to="/Calendar">Past Events</Link><br/>
         <Link to="/User_Info">My Info</Link><br/>
         <Link to="/Sign_in">Log out</Link><br/>
        </div>



      </div>
      </header>

      <div>

      </div>



      <footer>

      </footer>
    </div>
  )
}

export default UserPage