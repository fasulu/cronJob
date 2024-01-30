const { CalculateDays } = require("./calculateDays");
const { SendNotification } = require("../controller/sendNotification");

function ReadFile(paidList) {
    // console.log("Im in ReadFile");

    try {
        for (let recordNum = 0; recordNum < paidList.length; recordNum++) {

            const numDays = CalculateDays(new Date(paidList[recordNum].validUntil));

            const NotifyData = {
                userId: paidList[recordNum].userId,
                email: paidList[recordNum].email,
                plan: paidList[recordNum].plan,
                isAnnual: paidList[recordNum].isAnnual,
                validUntil: paidList[recordNum].validUntil,
                numDays: numDays
            }

            const notificationSent = SendNotification(NotifyData);
            // console.log(`Notification status ${notificationSent} days`)
        }
    } catch (error) {
        console.error('Error while processing paid list:', error);
    }

    return
}
module.exports = { ReadFile }