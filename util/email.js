const sendEmail = (email, data, error=null) => {
    const payload = {
        from: 'tiagohpf@gmail.com',
        to: email || 'admin@admin.com',
        subject: '[NOTIFICATION] Data Ingested Status',
        body: `Dear admin,\ Here's the status of the last data ingestion:\n\nBooks ingested: ${data.length};\nErrors: ${error}\n\nBest Regards,\nTiago Faria`
    }

    console.log(payload);
}

module.exports = {
    sendEmail
}
