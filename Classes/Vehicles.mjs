export class VehicleDirector {
    constructor(builder) {
        this.builder = builder;

        this.constructVehicle = function (year, color, mpg, cost) {
            return this.builder
                .vehicleYear(year)
                .pickColor(color)
                .vehicleMPG(mpg)
                .msrpCost(cost)
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
    }

        vehicleYear(year)  {
            this.year = year;
            return this;
        };

        pickColor(color)  {
            this.color = color;
            return this;
        };

        vehicleMPG(mpg) {
            this.mpg = mpg;
            return this;
        };

        msrpCost(cost) {
            this.cost = cost;
            return this;
        };

        buildVehicle = function ()  {
            return new Vehicle(this.brand, this.model, this.year, this.mpg, this.color, this.cost);
        };

    }






