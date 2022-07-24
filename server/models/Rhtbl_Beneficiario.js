const mongoose = require("mongoose");

const Rhtbl_BeneficiariosShema = new mongoose.Schema({
  iVinculacion_fl: Number,
  iEstado_fl: String,
  iConcurrencia: Number,
});

module.exports = mongoose.model("Rhtbl_Beneficiario", Rhtbl_BeneficiariosShema);
