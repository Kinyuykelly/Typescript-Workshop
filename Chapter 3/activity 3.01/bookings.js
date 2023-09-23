"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeBooking = exports.processPayment = exports.startBooking = void 0;
var flights_1 = require("./flights");
var bookingsFactory = function (bookingNumber) {
    return function (flight, seatsHeld) { return ({
        bookingNumber: bookingNumber++,
        flight: flight,
        paid: false,
        seatsHeld: seatsHeld,
        seatsReserved: 0,
    }); };
};
var createBooking = bookingsFactory(1);
var startBooking = function (flight, seatsRequested) {
    if ((0, flights_1.checkAvailability)(flight, seatsRequested)) {
        (0, flights_1.holdSeats)(flight, seatsRequested);
        return createBooking(flight, seatsRequested);
    }
    throw new Error("Booking not available");
};
exports.startBooking = startBooking;
var processPayment = function (booking) {
    booking.paid = true;
    return booking;
};
exports.processPayment = processPayment;
var completeBooking = function (booking) {
    (0, flights_1.reservedSeats)(booking.flight, booking.seatsHeld);
    booking.seatsHeld = 0;
    return booking;
};
exports.completeBooking = completeBooking;
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
