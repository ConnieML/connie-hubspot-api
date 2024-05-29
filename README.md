# hubspot_twilio
A sample integration of Flex with Hubspot running inside it as an Iframe. 

It uses the following components:

1. a Twilio function that invokes a Hubspot API to fetch a customer record, and returns firstname, lastname and crmid. Can be extended to return more information such as email address or any information returned by Hubspot API.
2. Two Studio flows that invoke the function mentioned above and pass the results to flex. One flow is used by incoming calls and the other flow is for incoming conversations (SMS / WhatsApp).
3. a Flex plugin that embeds Hubspot within Flex as an Iframe. It will present the contacts page during inactivity or if the caller is not identified or will screen pop the customer record if it is identified using the phone number.

This repository includes 2 plugins:
1. plugin-hubspot is for Flex UI v2
2. plugin-hubspot-flex1 is for flex UI v1

Example when it identifies the caller:

![Screenshot 2022-08-05 at 16 42 54](https://user-images.githubusercontent.com/98812531/183442049-b0feaad6-4125-402d-85c6-29100684a83a.png)


Example during inactivity:

![Screenshot 2022-08-05 at 16 23 05](https://user-images.githubusercontent.com/98812531/183442019-08ad91f5-3bd5-4678-ba38-76da6b455366.png)
# connie-hubspot-api
