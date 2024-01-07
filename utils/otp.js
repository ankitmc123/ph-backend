async function sendOtp(mobile, otp) {
    let res = await fetch("https://www.fast2sms.com/dev/bulkV2", {
        method: "POST",
        headers: {
            authorization: process.env.SMS_KEY,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            route: "otp",
            variables_values: otp,
            numbers: mobile
        })
    });
    let result = await res.json();
    return result;
}

module.exports = sendOtp;
