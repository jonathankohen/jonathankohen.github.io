const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    name: { type:String, required: true },
    date: { type:String, required: true },
}, {
    timestamps: true,
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;