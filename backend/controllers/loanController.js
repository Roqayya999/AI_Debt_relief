const Loan = require("../models/Loan");

// Save or Update Loan
const saveLoan = async (req, res) => {
  try {
    const { userId, totalDebt, monthlyEMI, creditScore } = req.body;

    let loan = await Loan.findOne({ userId });

    if (loan) {
      loan.totalDebt = totalDebt;
      loan.monthlyEMI = monthlyEMI;
      loan.creditScore = creditScore;
      await loan.save();
    } else {
      loan = await Loan.create({
        userId,
        totalDebt,
        monthlyEMI,
        creditScore,
      });
    }

    res.status(200).json({
      message: "Loan Saved Successfully",
      loan,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Loan
const getLoan = async (req, res) => {
  try {
    const { userId } = req.params;

    const loan = await Loan.findOne({ userId });

    if (!loan) {
      return res.status(404).json({
        message: "Loan not found",
      });
    }

    res.status(200).json(loan);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  saveLoan,
  getLoan,
};