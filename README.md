<a  href="https://www.connieconnect.com">
<img  src="https://i.postimg.cc/MGd7M6Cp/connie-logo-white-thin-deja-Vu-Sans.png"  alt="Connie SaaS For Nonprofits"  width="250"  />
</a>

# 🗄️ Connie HubSpot API

A boilerplat serverless function and accompanying plugin to integrate Hubspot into the CRMcontainer via IFrame. 

It uses the following components:

1. a Twilio function that invokes a Hubspot API to fetch a customer record, and returns firstname, lastname and crmid. Can be extended to return more information such as email address or any information returned by Hubspot API.
2. Two Studio flows that invoke the function mentioned above and pass the results to flex. One flow is used by incoming calls and the other flow is for incoming conversations (SMS / WhatsApp).
3. a Flex plugin that embeds Hubspot within Flex as an Iframe. It will present the contacts page during inactivity or if the caller is not identified or will screen pop the customer record if it is identified using the phone number.

# Set Up

    Note: You will need to have at least node --version 18 installed as well as the lates version of Twilio Cli.
    Note: If you encounder a compatibility error on install, run the following Twilio plugin update script:

    1. Deploy the serverless function, Studio FLOW, connect phone number
    2. Download the repo and cd into ... /plugin-hubspot
    3. In /public cp appConfig.example.js => appConfig.js
    4. Update HubspotPlugins.js (lines 21 & 23) with your HubSpot private app credentials
    5. Install dependencies ... npm install

# Run Locally

    6. Test on local host ... twilio flex:plugins:start

# Publish

    7. Deploy ... twilio flex:plugins:deploy

Example when it identifies the caller:

![Screenshot 2024-07-22](https://i.postimg.cc/Kz6BW5TP/connie-voice-hubspot-integration-800x375.jpg)

Example during inactivity:

![Screenshot 2022-08-05 at 16 23 05](https://i.postimg.cc/j2YncSVv/connie-voice-hubspot-integration-no-task.jpg)

# connie-hubspot-api
