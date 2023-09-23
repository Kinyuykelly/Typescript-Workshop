import {
  Flight,
  checkAvailability,
  holdSeats,
  reservedSeats,
  Booking,
} from "./flights";

const bookingsFactory =
  (bookingNumber: number) =>
  (flight: Flight, seatsHeld: number): Booking => ({
    bookingNumber: bookingNumber++,
    flight,
    paid: false,
    seatsHeld,
    seatsReserved: 0,
  });
const createBooking = bookingsFactory(1);

export const startBooking = (
  flight: Flight,
  seatsRequested: number
): Booking => {
  if (checkAvailability(flight, seatsRequested)) {
    holdSeats(flight, seatsRequested);
    return createBooking(flight, seatsRequested);
  }
  throw new Error("Booking not available");
};
export const processPayment = (booking: Booking): Booking => {
  booking.paid = true;
  return booking;
};
export const completeBooking = (booking: Booking) => {
  reservedSeats(booking.flight, booking.seatsHeld);
  booking.seatsHeld = 0;
  return booking;
};
// console.log(startBooking( {
//     destination: 'Bambili',
//     flightNumber: 1,
//     seatsHeld: 2,
//     seatsRemaining: 10,
//     time: '2:00',
// }, 3));
// console.log(startBooking({
//     destination: 'Mankon',
//     flightNumber: 2,
//     seatsHeld: 2,
//     seatsRemaining: 8,
//     time: '5:00',
// },6));
