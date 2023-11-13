# Assignment 1

**Flight Information System**
This Flight Information System module provides various functions to retrieve information about flights, search for available flights, find airport times, locate flights operated by specific airlines, and obtain a list of unique destinations.

# Instructions
Step 1: Create an app.js file in vs code
Step 2: Put this code in app.js file const **flightInformationSystem = require("./flightInformationSystem.js");**
Step 3: Console.log functions to use functions for example **console.log('Flight Information:', flightInformationSystem.getFlightInformation("ABC123"));**

**Sample Flight Data**
For demonstration purposes, sample flight data is included in the module:
 // Sample flight data (for demonstration purposes)
    flights: [
        // Flight details including flight number, origin, destination, departure, arrival, and airline
        { flightNumber: 'ABC123', origin: 'Indonesia', destination: 'Singapore', departureTime: '08:00', arrivalTime: '11:00', airline: 'Batik Air' },
        { flightNumber: 'XYZ789', origin: 'Malaysia', destination: 'Singapore', departureTime: '12:00', arrivalTime: '15:00', airline: 'AirAsia X' },
        { flightNumber: '5AHFR9', origin: 'Singapore', destination: 'Malaysia', departureTime: '16:00', arrivalTime: '20:00', airline: 'Singapore Airlines' },
        { flightNumber: 'X2YZ7C', origin: 'Singapore', destination: 'China', departureTime: '02:00', arrivalTime: '12:00', airline: 'Singapore Airlines' },
        // Add more flight data as needed
    ],
    
# Functions Descriptions And How To Use These Function    
**Get Flight Information**
Retrieve detailed information about a specific flight using its flight number.
The datatype written in the function must be type **String**
Example code:
**console.log('Flight Information:', flightInformationSystem.getFlightInformation("ABC123"));**
Expected Ouput:
Flight Information: {
  flightNumber: 'ABC123',
  origin: 'Indonesia',
  destination: 'Singapore',
  departureTime: '08:00',
  arrivalTime: '11:00',
  airline: 'Batik Air'
}

**Search Available Flights**
Search for available flights between two locations (origin and destination).
The datatype written in the function must be type **String**,**String**
Example code:
**console.log('Avaliable Specific Flight Information:', flightInformationSystem.searchAvailableFlights("Malaysia", "Singapore"));**
Expected Ouput:
Avaliable Specific Flight Information: {
  flightNumber: 'XYZ789',
  origin: 'Malaysia',
  destination: 'Singapore',
  departureTime: '12:00',
  arrivalTime: '15:00',
  airline: 'AirAsia X'
}

**Search Airport Times**
Search for arrival and departure times for a specific airport location.
The datatype written in the function must be type **String**
Example code:
**console.log('Airport Flight Times:', flightInformationSystem.searchAirportTimes("Indonesia"));**
Expected Ouput:
Airport Flight Times: {
  arrivalTimes: [],
  departureTimes: [ { flightNumber: 'ABC123', departureTime: '08:00' } ]
}

**Find Flights by Airline**
Find flights operated by a specific airline.
The datatype written in the function must be type **String**
Example code:
**console.log('Flights Operated By Specific Airlines:', flightInformationSystem.findFlightsByAirline("Singapore Airlines"));**
Expected Ouput:
Flights Operated By Specific Airlines: [
  {
    flightNumber: '5AHFR9',
    origin: 'Singapore',
    destination: 'Malaysia',
    departureTime: '16:00',
    arrivalTime: '20:00',
    airline: 'Singapore Airlines'
  },
  {
    flightNumber: 'X2YZ7C',
    origin: 'Singapore',
    destination: 'China',
    departureTime: '02:00',
    arrivalTime: '12:00',
    airline: 'Singapore Airlines'
  }
]

**Get All Destinations**
Retrieve a list of all unique destinations.
The datatype written in the function is not **needed**
Example code:
**console.log('All Destinations:', flightInformationSystem.getAllDestinations());**
Expected Ouput:
All Destinations: [ 'Singapore', 'Malaysia', 'China' ]

# Note
The sample flight data provided is for demonstration purposes. You can add more flight data as needed.
Ensure to replace function calls with the actual name of the module object if you're not using the provided sample.
