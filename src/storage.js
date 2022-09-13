import Browser from "webextension-polyfill";
import { cloneDeep } from "lodash";

class Storage {
  constructor()
  {
    
  }

  /**
   * 
   * @param {string} keys 
   * @returns {Promise<any>}
   */
  async get(key)
  {
    return await Browser.storage.sync.get(key);
  }

  /**
   * 
   * @param {null | string[]} keys 
   * @returns {Promise<any>}
   */
  async getMultiple(keys=null)
  {
    return await Browser.storage.sync.get(keys);
  }

  /**
   * 
   * @param {[key: string]: any} objects 
   * @returns {Promise<void>}
   */
  async set(objects)
  {
    await Browser.storage.sync.set(objects);
  }

  /**
   * 나중에 remove 구현할 수도...?
   */
}

export default new Storage();