import { FlexPlugin } from '@twilio/flex-plugin';
import React from 'react';
import PhoneNumberInput from './PhoneNumberInput'; // Adjust the path if needed

const PLUGIN_NAME = 'HubspotPlugin';

export default class HubspotPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  async init(flex, manager) {
    // Add the PhoneNumberInput component to AgentDesktopView
    flex.AgentDesktopView.Panel2.Content.add(<PhoneNumberInput key="phone-number-input" />, {
      sortOrder: -1,
    });
    // Set up CRM Container for HubSpot CRM
    flex.CRMContainer.defaultProps.uriCallback = (task) => {
      if (task && task.attributes.crmid) {
        return `https://app.hubspot.com/contacts/46308290/contact/${task.attributes.crmid}`;
      } else {
        return 'https://app.hubspot.com/contacts/46308290/contacts/list/view/all/';
        //return 'https://v1.connie.plus';
      }
    };

    
  }
}
