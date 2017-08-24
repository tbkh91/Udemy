const twilio = require('twilio');

const accountSid = 'AC56e75d6e38a444e66b92d007f17d9598';
const authToken = '82269ccee5a3523eb057c0a9b5920192';

module.exports = new twilio.Twilio(accountSid, authToken);
