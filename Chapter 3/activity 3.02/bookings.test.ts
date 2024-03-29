// running unit tests on bookings in activity 3.01
import {
  completeBooking,
  processPayment,
  startBooking,
} from ".././activity 3.01/bookings";
import { getDestinations } from "../activity 3.01/flights";

const destinations = getDestinations();

describe('bookings tests', () => {
  test('create a booking', () => {
    const booking = startBooking(destinations[0], 3);
    expect(booking).toEqual({
      bookingNumber: 1,
      flight: destinations[0],
      paid: false,
      seatsHeld: 3,
      seatsReserved: 0,
    });
  });
  test('pay for a booking', () => {
    let booking = startBooking(destinations[0], 3);
    booking = processPayment(booking);
    expect(booking.paid).toBe(true);
  });
  test('complete a booking', () => {
    let booking = startBooking(destinations[0], 3);
    booking = processPayment(booking);
    booking = completeBooking(booking);
    expect(booking.paid).toBe(true);
    expect(booking.seatsReserved).toBe(3);
  });
});

describe('error scenarios', () => {
  test('booking must have availability', () => {
    expect.assertions(1);
    try {
      startBooking(destinations[6], 8);
    } catch (e) {
      expect((e as Error).message).toBe('Booking not available!');
    }
  });
});