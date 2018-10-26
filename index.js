

store = {drivers: [], passengers: [], trips: []}

let idD = 0;
class Driver {

    constructor(name){
        this.name = name;
        this.id = ++idD;
        store.drivers.push(this);
    }

    trips(){
        return store.trips.filter(trip => trip.driverId === this.id);
    }

    passengers(){
        return this.trips().map(trip => {return trip.passenger()})
    }


}

idP = 0;
class Passenger{

    constructor(name){
        this.id = ++idP;
        this.name = name;
        store.passengers.push(this);

    }

    trips(){
        return store.trips.filter(trip => trip.passengerId === this.id);
    }

    drivers(){
        return this.trips().map(trip => {return trip.driver()});
    }

}


idT = 0;
class Trip {

    constructor(driver,passenger){
        this.id = ++idP;
        this.driverId = driver.id;
        this.passengerId = passenger.id;

        store.trips.push(this);
    }

    passenger(){
        return store.passengers.find(pass => pass.id === this.passengerId);
    }

    driver(){
        return store.drivers.find(driver => driver.id === this.driverId);
    }


}
