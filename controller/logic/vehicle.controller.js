/** Dto */
const vehicleDto = require("../../model/dto/vehicle.dto");
const config = require("config");

exports.createVehicle = (req, res, next) => {
    let vehicle = {
        plate: req.body.plate,
        name: req.body.name,
        color: req.body.color,
        brand: req.body.brand,
    };
    vehicleDto.create(vehicle, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        
    })
};

exports.updateVehicle = (req, res, next) => {
    let vehicle = {
        plate: req.body.plate,
        name: req.body.name,
        color: req.body.color,
        brand: req.body.brand,
    };
    vehicleDto.update({ _id: req.body.id }, vehicle, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        
        res.status(201).json(
            {
                info: data
            });
    

    })
};

exports.getAll = (req, res, next) => {
    vehicleDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }


        res.status(200).json(
            {
                info: data
            });


    })
};

exports.getByPlate = (req, res, next) => {
    vehicleDto.getByplate({ plate: req.params.plate }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }


        res.status(200).json(
            {
                info: data
            });


    })
};

exports.deleteVehicle = () => {
    vehicleDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }


        res.status(204).json();


    })
};