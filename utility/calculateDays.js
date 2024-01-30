
function CalculateDays(validity) {
    // console.log("Im in CalculateDays", validity)
    
    try {
        const toDay = new Date()
        const diffTime = (validity - toDay);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        // console.log(diffTime + " milliseconds");    // in milliseconds
        // console.log(diffDays + " days");    // gives number of day
        return diffDays
    } catch (error) {
        console.error('Error on checking days:', error);

    }

}
module.exports = { CalculateDays }
