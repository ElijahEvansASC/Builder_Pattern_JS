export class VehicleDirector {
    constructor(builder) {
        this.builder = builder;

        this.constructVehicle = function () {
            return this.builder
                .vehicleYear()
                .pickColor()
                .msrpCost()
                .buildVehicle();
        };
    }
}

export class Vehicle {
    constructor(brand, model, year, mpg, color, cost) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.mpg = mpg;
        this.color = color;
        this.cost = cost;

    }
}

export class VehicleBuilder {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.year = undefined;
        this.mpg = undefined;
        this.color = undefined;
        this.cost = undefined;

        this.vehicleYear = function (year) {
            this.year = year;
            return this;
        };

        this.pickColor = function (color) {
            this.color = color;
            return this;
        };

        this.msrpCost = function (cost) {
            this.cost = cost;
            return this;
        };

        this.buildVehicle = function () {
            return new Vehicle(this.brand, this.model, this.year, this.mpg, this.color, this.cost);
        };

    }
}




