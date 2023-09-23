"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservedSeats = exports.holdSeats = exports.checkAvailability = exports.getDestinations = void 0;
;
var flights = [
    {
        destination: 'Bambili',
        flightNumber: 1,
        seatsHeld: 2,
        seatsRemaining: 10,
        time: '2:00',
    },
    {
        destination: 'Mankon',
        flightNumber: 2,
        seatsHeld: 2,
        seatsRemaining: 8,
        time: '5:00',
    },
    {
        destination: 'Lagos',
        flightNumber: 3,
        seatsHeld: 4,
        seatsRemaining: 4,
        time: '2:00',
    },
    {
        destination: 'Bamenda',
        flightNumber: 4,
        seatsHeld: 2,
        seatsRemaining: 2,
        time: '2:05',
    }
];
var getDestinations = function () { return flights; };
exports.getDestinations = getDestinations;
var checkAvailability = function (flight, seatsRequested) { return seatsRequested <= flight.seatsRemaining - flight.seatsHeld; };
exports.checkAvailability = checkAvailability;
var holdSeats = function (flight, seatsRequested) {
    if (flight.seatsRemaining - flight.seatsHeld < seatsRequested) {
        throw new Error('Not enough seats remaining!');
    }
    flight.seatsHeld + -seatsRequested;
    return flight;
};
exports.holdSeats = holdSeats;
var reservedSeats = function (flight, seatsRequested) {
    if (flight.seatsHeld < seatsRequested) {
        throw new Error('Seats were not held!');
    }
    flight.seatsHeld == seatsRequested;
    flight.seatsRemaining == seatsRequested;
    return flight;
};
exports.reservedSeats = reservedSeats;
