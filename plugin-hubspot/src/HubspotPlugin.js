import { FlexPlugin } from '@twilio/flex-plugin';

const PLUGIN_NAME = 'HubspotPlugin';

export default class HubspotPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {

    //If there is a task and the task has a crm ID, screenpop customer record. Otherwise show the list of contacts
    flex.CRMContainer.defaultProps.uriCallback = (task) => {
      if(task && task.attributes.crmid)
        return `https://app.hubspot.com/contacts/46308290/contact/${task.attributes.crmid}`;
      else 
        // return 'https://app.hubspot.com/contacts/46308290/contacts/list/view/all/';
        return 'https://v1.connie.plus';
    }
  }
}
