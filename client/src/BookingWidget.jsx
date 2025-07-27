import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext.jsx";
import { differenceInCalendarDays } from "date-fns";
import DatePicker from "react-datepicker";
// Import local CSS file instead of the problematic package CSS
import "./datepicker.css";

export default function BookingWidget({ place }) {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [redirect, setRedirect] = useState('');
  const [disabledDates, setDisabledDates] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }

    // Fetch existing bookings for this place to disable dates
    const fetchBookings = async () => {
      try {
        const res = await axios.get(`/bookings/place/${place._id}`);
        const allDates = [];
        res.data.forEach(booking => {
          let current = new Date(booking.checkIn);
          const end = new Date(booking.checkOut);
          // Include all dates from check-in to check-out (inclusive)
          while (current < end) {
            allDates.push(new Date(current));
            current.setDate(current.getDate() + 1);
          }
        });
        setDisabledDates(allDates);
      } catch (error) {
        console.error('Failed to fetch bookings:', error);
      }
    };

    fetchBookings();
  }, [user, place._id]);

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(checkOut, checkIn);
  }

  async function bookThisPlace() {
    if (!checkIn || !checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }
    if (!name || !phone) {
      alert('Please fill in your name and phone number');
      return;
    }
    if (numberOfNights <= 0) {
      alert('Check-out date must be after check-in date');
      return;
    }
    if (!user) {
      alert('Please log in to make a booking');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('/bookings', {
        checkIn: checkIn.toISOString(),
        checkOut: checkOut.toISOString(),
        numberOfGuests: parseInt(numberOfGuests),
        name,
        phone,
        place: place._id,
        price: numberOfNights * place.price,
      });

      const bookingId = response.data._id;
      setRedirect(`/account/bookings/${bookingId}`);
    } catch (error) {
      if (error.response) {
        alert(`Booking failed: ${error.response.data.error || 'Unknown error'}`);
      } else {
        alert('Booking failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-2xl text-center">
        Price: Rs.{place.price} / per night
      </div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-3 px-4 flex-1">
            <label className="block text-sm font-medium">Check in:</label>
            <DatePicker
              selected={checkIn}
              onChange={date => setCheckIn(date)}
              minDate={new Date()}
              excludeDates={disabledDates}
              placeholderText="Select check-in"
              className="w-full border rounded px-2 py-1"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="py-3 px-4 flex-1 border-l">
            <label className="block text-sm font-medium">Check out:</label>
            <DatePicker
              selected={checkOut}
              onChange={date => setCheckOut(date)}
              minDate={checkIn ? new Date(checkIn.getTime() + 24 * 60 * 60 * 1000) : new Date()}
              excludeDates={disabledDates}
              placeholderText="Select check-out"
              className="w-full border rounded px-2 py-1"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
        <div className="py-3 px-4 border-t">
          <label className="block text-sm font-medium">Number of guests:</label>
          <input
            type="number"
            value={numberOfGuests}
            onChange={ev => setNumberOfGuests(ev.target.value)}
            min="1"
            max={place.maxGuests || 10}
            className="w-full border rounded px-2 py-1"
          />
        </div>
        {numberOfNights > 0 && (
          <div className="py-3 px-4 border-t">
            <label className="block text-sm font-medium">Your full name:</label>
            <input
              type="text"
              value={name}
              onChange={ev => setName(ev.target.value)}
              placeholder="Enter your full name"
              className="w-full border rounded px-2 py-1 mb-2"
            />
            <label className="block text-sm font-medium">Phone number:</label>
            <input
              type="tel"
              value={phone}
              onChange={ev => setPhone(ev.target.value)}
              placeholder="Enter your phone number"
              className="w-full border rounded px-2 py-1"
            />
          </div>
        )}
      </div>
      <button 
        onClick={bookThisPlace} 
        className="primary mt-4 w-full py-2 px-4 bg-primary text-white rounded-2xl disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Booking...' : 'Book this place'}
        {numberOfNights > 0 && !loading && (
          <span> Rs.{numberOfNights * place.price}</span>
        )}
      </button>
    </div>
  );
}