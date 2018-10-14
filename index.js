let store  = {drivers: [], passengers: [], trips: []}


let driverId = 0

class Driver{
  constructor(name){
    this.name = name
    this.id = ++driverId;
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(
      function(trip){
        return trip.driverId  == this.id;
      }.bind(this)
    )
  }

  passengers(){
    let passengerIds = this.trips().map(trip => trip.passengerId)
    return store.passengers.filter(passenger => passengerIds.includes(passenger.id))
  }
}

let passengerId = 0;
class Passenger{
  constructor(name){
    this.name = name
    this.id = ++passengerId;
    store.passengers.push(this)
  }
  trips(){
    return store.trips.filter(
      function(trip){
        return trip.passengerId  == this.id;
      }.bind(this)
    )
  }
  drivers(){
    let driverIds = this.trips().map(trip => trip.driverId)
    return store.drivers.filter(driver => driverIds.includes(driver.id))
  }
}

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;

    if (driver){
      this.driverId = driver.id
    }
    if (passenger){
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }

   passenger(){
    return store.passengers.find(
      function(passenger){
        return passenger.id == this.passengerId
    }.bind(this))
  }

  driver(){
    return store.drivers.find(
      function(driver) {
        return driver.id == this.driverId;
      }.bind(this))
  }
}
