
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';

const PLUGIN_NAME = 'HubspotFlex1Plugin';

export default class HubspotFlex1Plugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  async init(flex, manager) {
    this.registerReducers(manager);

    const options = { sortOrder: -1 };

      //If there is a task and the task has a crm ID, screenpop customer record. Otherwise show the list of contacts
      flex.CRMContainer.defaultProps.uriCallback = (task) => {
        if(task && task.attributes.crmid)
          return `https://app-eu1.hubspot.com/contacts/26128285/contact/${task.attributes.crmid}`
        else 
          return 'https://app-eu1.hubspot.com/contacts/26128285/contacts/list/view/all/';
      }
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint-disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }
  }
}
