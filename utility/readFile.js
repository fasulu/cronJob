const { CalculateDays } = require("./calculateDays");
const { SendNotification } = require("../controller/sendNotification");

function ReadFile(paidList) {
    console.log("Im in ReadFile");

    try {
        for (let recordNum = 0; recordNum < paidList.length; recordNum++) {
            // const numDays = CalculateDays(new Date(paidList[recordNum].lastBillingDate));
            const lastBillingDate = new Date(paidList[recordNum].lastBillingDate);
            const validUntil = new Date(new Date(paidList[recordNum].lastBillingDate).setFullYear(new Date(paidList[recordNum].lastBillingDate).getFullYear()+1))
            console.log(validUntil, lastBillingDate); 
            // const numDays = CalculateDays(new Date(paidList[recordNum].lastBillingDate));
            const numDays = CalculateDays(validUntil, lastBillingDate);

            const NotifyData = {
                userId: paidList[recordNum].userId,
                email: paidList[recordNum].email,
                plan: paidList[recordNum].plan,
                isAnnual: paidList[recordNum].isAnnual,
                lastBillingDate: paidList[recordNum].lastBillingDate,
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