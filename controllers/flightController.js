const { v4: uuidv4 } = require("uuid");
const { flightModel } = require("../models/Flight");

exports.addFlight = (req, res) => {
  try {
    const newFlight = {
      id: uuidv4(),
      title: req.body.title,
      time: req.body.time,
      price: req.body.price,
      date: req.body.date,
    };
    flightModel.push(newFlight);
    return res
      .status(201)
      .json({ message: "Flight booked successfully", newFlight });
  } catch (error) {
    console.log(error);
    return res.status(500).json("An error occured");
  }
};

exports.getAllFlight = (req, res) => {
  try {
    return res.status(200).json(flightModel);
  } catch (error) {
    console.log(error);
    return res.status(500).json("An error occured");
  }
};

exports.getSingleFlight = (req, res) => {
  try {
    const id = req.params.id;
    const findFlight = flightModel.find((flight) => flight.id === id);
    if (findFlight) {
      return res.status(200).json(findFlight);
    } else {
      return res.status(404).json("Flight not found");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("An error occured");
  }
};

exports.updateFlight = (req, res) => {
    try {
        const id = req.params.id;
        const findFlight = flightModel.find((flight) => flight.id === id);
        if (findFlight) {
            if (req.body.title) {
                findFlight.title = req.body.title;
            }
            if (req.body.time) {
                findFlight.time = req.body.time;
            }
            if (req.body.price) {
                findFlight.price = req.body.price;
            }
            if (req.body.date) {
                findFlight.date = req.body.date;
            }
            return res.status(200).json({message: "flight updated", findFlight});
        } else {
            return res.status(404).json("Flight not found");
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json("An error occured");
    }
}

exports.deleteFlight = (req, res) => {
    try {
        const id = req.params.id;
        const findFlight = flightModel.unshift((flight) => flight.id === id);
        if (findFlight) {
            return res.status(200).json({message: "flight deleted", findFlight});
        } else {
            return res.status(404).json("Flight not found");}
    } catch (error) {
            console.log(error)
            return res.status(500).json("An error occured");
    }
}