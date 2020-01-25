const router = require("express").Router();
let Reservation = require("../models/reservation.model");

router.route("/").get((req, res) => {
    Reservation.find()
        .then(reservations => res.json(reservations))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const name = req.body.name;
    const date = req.body.date;

    const newReservation = new Reservation ({
        name,
        date,
    });

    newReservation.save()
    .then(() => res.json("Reservation added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Reservation.findById(req.params.id)
        .then(reservation => res.json(reservation))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    Reservation.findByIdAndDelete(req.params.id)
        .then(reservation => res.json("Exercise deleted."))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Reservation.findById(req.params.id)
        .then(reservation => {
            reservation.name = req.body.name;
            reservation.date = req.body.date;

            reservation.save()
                .then(() => res.json("Reservation updated!"))
                .catch(err => res.status(400).json("Errir: " + err));
        })
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;