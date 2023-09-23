"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// running unit tests on flights in activity 3.01
var flights_1 = require(".././activity 3.01/flights");
describe('flights tests', function () {
    var destinations = (0, flights_1.getDestinations)();
    var flight = destinations[0];
    test('get destinations', function () {
        expect(destinations).toHaveLength(7);
    });
    test('checking availability', function () {
        var destinations = (0, flights_1.getDestinations)();
        expect((0, flights_1.checkAvailability)(destinations[0], 3)).toBeTruthy();
        expect((0, flights_1.checkAvailability)(destinations[1], 5)).toBeFalsy();
        expect((0, flights_1.checkAvailability)(destinations[2], 300)).toBeFalsy();
        expect((0, flights_1.checkAvailability)(destinations[3], 3)).toBeTruthy();
    });
    test('hold seats', function () {
        expect.assertions(3);
        flight = (0, flights_1.holdSeats)(flight, 3);
        expect(flight.seatsHeld).toBe(3);
        flight = (0, flights_1.holdSeats)(flight, 13);
        expect(flight.seatsHeld).toBe(16);
        try {
            (0, flights_1.holdSeats)(flight, 15);
        }
        catch (e) {
            expect(e.message).toBe('Not enough seats remaining!');
        }
    });
    test('reserve seats', function () {
        expect.assertions(3);
        flight = (0, flights_1.reservedSeats)(flight, 3);
        expect(flight.seatsRemaining).toBe(27);
        flight = (0, flights_1.reservedSeats)(flight, 13);
        expect(flight.seatsRemaining).toBe(14);
        try {
            (0, flights_1.reservedSeats)(flight, 1);
        }
        catch (e) {
            expect(e.message).toBe('Seats were not held!');
        }
    });
});
