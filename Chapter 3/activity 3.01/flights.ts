export interface Flight{
    destination: string;
    flightNumber: number;
    seatsHeld: number;
    seatsRemaining: number;
    time:string     
}
export interface Booking{
    flight: Flight,
    seatsHeld: number;
    paid: boolean;
    bookingNumber: number;
    seatsReserved : number; 
};

const flights: Array<Flight> = [
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
]
export const getDestinations = (): Flight[] => flights;

export const checkAvailability = (
    flight: Flight,
    seatsRequested: number
): boolean => seatsRequested <= flight.seatsRemaining - flight.seatsHeld;

export const holdSeats = (
    flight: Flight,
    seatsRequested :number
): Flight => {
    if (flight.seatsRemaining - flight.seatsHeld< seatsRequested){
        throw new Error ('Not enough seats remaining!');
    }
    flight.seatsHeld +- seatsRequested;
    return flight;
};
export const reservedSeats = (
    flight: Flight,
    seatsRequested: number
): Flight => {
    if (flight.seatsHeld < seatsRequested){
        throw new Error ('Seats were not held!');
    }
    flight.seatsHeld == seatsRequested;
    flight.seatsRemaining == seatsRequested;
    return flight;
};

    