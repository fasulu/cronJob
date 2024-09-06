
function CalculateDays(validity,lastBillingDate) {
    console.log("Im in CalculateDays", validity, lastBillingDate)
    
    try {
        const toDay = Date.now();

        // const diffTime = (validity / (1000 * 60 * 60 * 24) - toDay / (1000 * 60 * 60 * 24));
        // const diffTime = (validity - toDay / (1000 * 60 * 60 * 24));
        const diffTime = (validity - lastBillingDate);
        console.log(diffTime/ (1000 * 60 * 60 * 24));
        // console.log(validity - toDay);

        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        // console.log(diffTime + " milliseconds");    // in milliseconds
        // console.log(diffDays + " days");    // gives number of day
        return diffDays
    } catch (error) {
        console.error('Error on checking days:', error);

    }

}
module.exports = { CalculateDays }
