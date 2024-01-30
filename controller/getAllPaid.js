const express = require('express');
const router = express.Router();
const { SaveToFile } = require('../utility/saveToFile.js');
const { VerifyData } = require('../utility/verifyData.js');

const paymentModel = require('../models/payment.js');
const getAllPaid = (async (req, res) => {

    // console.log("Im in getAllPaid");

    try {

        const paidList = await paymentModel.find().select(
            {
                id: 1,
                userId: 1,
                email: 1,
                plan: 1,
                validUntil: 1,
                isAnnual: 1,
                // paymentAmt: 1,
                // lastBillingDate: 1,
            },
        ).lean()

        // console.dir(paidList)

        if ((paidList.length) > 0) {

            const saved = SaveToFile(paidList);
            const verifiedData = VerifyData();

            // res.json()
        } else {
            console.log("No paid list found")
            res.status(200).json({
                message: "No paid list found in DBase"
            })
        }

        res.json({ paidList })

    } catch (error) {

        res.status(400).json({
            message: "Error fetching data",
            error
        })
    }
})

module.exports = {
    getAllPaid,
}
