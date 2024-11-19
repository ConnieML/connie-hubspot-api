/*
* Receives a phone number, queries HUBSPOT and returns the customer record.
* If the CRM has a duplicate number, the function returns the first record (usually the oldest)
*/

exports.handler=(context, event, callback) => {
  const axios = require('axios');
  let result = {};
  let from = event.from;
  
  //if the string from contains a whatsapp prefix we need to remove it
  from = from.replace('whatsapp:','');

  const url=`https://api.hubapi.com/contacts/v1/search/query?q=${from}`;
  axios({
      method: 'get',
      crossdomain: true,
      url: url,
      headers: {Authorization: `Bearer ${context.HUBSPOT_TOKEN}`, 'content-type': 'application/x-www-form-urlencoded;charset=utf-8'}
  })
      .then((response) => {
          // handle success - first record found
          let contact=response.data.contacts[0];
          console.log(contact.vid);

          result.crmid=`${contact.vid}`;
          result.firstname=`${contact.properties.firstname.value}`;
          result.lastname=`${contact.properties.lastname.value}`;

          callback(null, result);
  })
  .catch((error) => {
    // handle error
      console.log(`Error: ${error}`);
      callback(null, error);
  });
};