"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// running unit tests on bookings in activity 3.01
var bookings_1 = require(".././activity 3.01/bookings");
var flights_1 = require("../activity 3.01/flights");
var destinations = (0, flights_1.getDestinations)();
describe('bookings tests', function () {
    test('create a booking', function () {
        var booking = (0, bookings_1.startBooking)(destinations[0], 3);
        expect(booking).toEqual({
            bookingNumber: 1,
            flight: destinations[0],
            paid: false,
            seatsHeld: 3,
            seatsReserved: 0,
        });
    });
    test('pay for a booking', function () {
        var booking = (0, bookings_1.startBooking)(destinations[0], 3);
        booking = (0, bookings_1.processPayment)(booking);
        expect(booking.paid).toBe(true);
    });
    test('complete a booking', function () {
        var booking = (0, bookings_1.startBooking)(destinations[0], 3);
        booking = (0, bookings_1.processPayment)(booking);
        booking = (0, bookings_1.completeBooking)(booking);
        expect(booking.paid).toBe(true);
        expect(booking.seatsReserved).toBe(3);
    });
});
describe('error scenarios', function () {
    test('booking must have availability', function () {
        expect.assertions(1);
        try {
            (0, bookings_1.startBooking)(destinations[6], 8);
        }
        catch (e) {
            expect(e.message).toBe('Booking not available!');
        }
    });
});
