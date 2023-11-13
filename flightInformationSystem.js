// Exporting an object with flight-related functions and data
module.exports = {
    // Sample flight data (for demonstration purposes)
    flights: [
        // Flight details including flight number, origin, destination, departure, arrival, and airline
        { flightNumber: 'ABC123', origin: 'Indonesia', destination: 'Singapore', departureTime: '08:00', arrivalTime: '11:00', airline: 'Batik Air' },
        { flightNumber: 'XYZ789', origin: 'Malaysia', destination: 'Singapore', departureTime: '12:00', arrivalTime: '15:00', airline: 'AirAsia X' },
        { flightNumber: '5AHFR9', origin: 'Singapore', destination: 'Malaysia', departureTime: '16:00', arrivalTime: '20:00', airline: 'Singapore Airlines' },
        { flightNumber: 'X2YZ7C', origin: 'Singapore', destination: 'China', departureTime: '02:00', arrivalTime: '12:00', airline: 'Singapore Airlines' },
        // Add more flight data as needed
    ],

    // Function to retrieve detailed information about a specific flight
    getFlightInformation(flightNumber) {
        // Find a flight with the specified flight number
        const foundFlight = this.flights.find(flights => flights.flightNumber === flightNumber);

        // If the flight is found, return its information; otherwise, return a message
        if (foundFlight) {
            return foundFlight;
        } else {
            return 'Flight not found.';
        }
    },

    // Function to search for available flights between two locations
    searchAvailableFlights(origin, destination) {
        // Find a flight that matches the specified origin and destination
        const availableFlight = this.flights.find(
            flights => flights.origin === origin && flights.destination === destination
        );

        // If an available flight is found, return its information; otherwise, return a message
        if (availableFlight) {
            return availableFlight;
        } else {
            return 'No available flights found.';
        }
    },

    // Function to search for arrival and departure times for a specific airport
    searchAirportTimes(airportLocation) {
        // Arrays to store arrival and departure times
        const arrivalTimes = [];
        const departureTimes = [];

        // Loop through each flight in the flights array
        for (let i = 0; i < this.flights.length; i++) {
            const flight = this.flights[i];

            // Check if the flight's destination matches the specified airport location
            if (flight.destination === airportLocation) {
                // If yes, add its arrival time to the arrivalTimes array
                arrivalTimes.push({ flightNumber: flight.flightNumber, arrivalTime: flight.arrivalTime });
            } else if (flight.origin === airportLocation) {
                // If no, check if the flight's origin matches the specified airport location
                // If yes, add its departure time to the departureTimes array
                departureTimes.push({ flightNumber: flight.flightNumber, departureTime: flight.departureTime });
            }
        }

        // If both arrivalTimes and departureTimes are empty, return an error message
        if (arrivalTimes.length === 0 && departureTimes.length === 0) {
            return 'Invalid airport location. Please check and try again.';
        }

        // Otherwise, return an object containing arrival and departure times
        return { arrivalTimes, departureTimes };
    },

    // Function to find flights operated by a specific airline
    findFlightsByAirline(airlineName) {
        // Initialize an array to store matching flights
        const matchingFlights = [];

        // Loop through each flight in the flights array
        for (let i = 0; i < this.flights.length; i++) {
            const flight = this.flights[i];

            // Check if the current flight matches the specified airline
            if (flight.airline === airlineName) {
                // If yes, add it to the list of matching flights
                matchingFlights.push(flight);
            }
        }

        // Check if any matching flights were found
        if (matchingFlights.length > 0) {
            // If yes, return the list of matching flights
            return matchingFlights;
        } else {
            // If no matching flights were found, return a message
            return 'No flights found for the specified airline.';
        }
    },

    // Function to get all unique destinations
    getAllDestinations() {
        // Array to store unique destinations
        const uniqueDestinations = [];

        // Loop through each flight
        for (let i = 0; i < this.flights.length; i++) {
            const flight = this.flights[i];

            // Check if the destination is not already in the array
            if (!uniqueDestinations.includes(flight.destination)) {
                // If not, add it to the array
                uniqueDestinations.push(flight.destination);
            }
        }

        // Return the array of unique destinations
        return uniqueDestinations;
    },
};
