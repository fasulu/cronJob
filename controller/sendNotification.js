
function SendNotification(data) {
    // console.log(`Im in sendnotification`);

    userId = data.userId;
    email = data.email;
    plan = data.plan;
    isAnnual = data.isAnnual;
    validUntil = data.validUntil;
    numDays = data.numDays

    try {

        switch (plan) {
            case "Free": 
                console.log(`Your current subscription plan type is "${plan}".\nChange your plan type to 'Gold' or 'Platinum' to enjoy more options. Please follow the link`)
                break;
            case "Gold": 
                if (numDays <= 31) {
                    console.log(`Your current subscription plan type is "${plan}".\nIt is ending on ${new Date(validUntil).toLocaleDateString()}, (in ${numDays} days).\nTo renew your subscription please follow the link`)
                    break;
                }
            case "Platinum": 
                if (numDays <= 31) {
                    console.log(`Your current subscription plan type is "${plan}".\nIt is ending on ${new Date(validUntil).toLocaleDateString()}, (in ${numDays} days).\nTo renew your subscription please follow the link`)
                    break;
                }
            default:
                break;
        }

    } catch (error) {
        console.error('Error while sending notification:', error);

    }
    return (userId,
        email,
        plan,
        isAnnual,
        numDays)

    // TODO write event handler logic to send notification to auth service
}
module.exports = { SendNotification }
