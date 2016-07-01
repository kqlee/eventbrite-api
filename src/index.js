const request = require('request');
const dotenv = require('dotenv');

dotenv.config();

const baseURL = 'https://www.eventbriteapi.com/v3/';
const URLs = {
  eventSearch: baseURL + 'events/search/?token=' + process.env.EVENTBRITE_PERSONAL_OAUTH_TOKEN,
};

const Eventbrite = {

  SearchEvents: (query, callback) => {
    request({
      url: 'https://www.eventbriteapi.com/v3/events/search',
      headers: {
        Authorization: 'Bearer ' + process.env.EVENTBRITE_PERSONAL_OAUTH_TOKEN,
      },
      qs: {
        q: query.term,
        'venue.city': query.city || 'San Francisco',
      },
      method: 'GET',
    }, (err, res, data) => {
      if (err) {
        callback(err);
      }
      callback(null, data);
    });
  },

};

module.exports = Eventbrite;