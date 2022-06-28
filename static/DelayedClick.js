/**
 * @file DelayedClick.js
 * @brief Click interrupt occurs in delayed 3 seconds
 * @author aKuad
 */

class DelayedClick {
  /**
   * @constructor
   * @brief Construct with target button element and callback function
   * @param {HTMLElement} ele Target button element
   * @param {Function} call Click callback function
   */
  constructor(ele, call) {
    this.ele = ele;
    this.call = call;
    this.value_org = "";
    this.count = 3;
    this.itv_id = 0;
    ele.addEventListener("click", this.startCount);
  }

  /**
   * @method startCount
   * @brief Start call count
   */
  startCount = () => {
    this.ele.removeEventListener("click", this.startCount);
    this.ele.addEventListener("click", this.stopCount);
    this.itv_id = setInterval(this.triggerInterval, 1000);
    this.value_org = this.ele.value;
    this.ele.value = this.count;
  }

  /**
   * @method stopCount
   * @brief Stop call count (It works as button resetting too)
   */
  stopCount = () => {
    this.ele.removeEventListener("click", this.stopCount);
    this.ele.addEventListener("click", this.startCount);
    clearInterval(this.itv_id);
    this.ele.value = this.value_org;
    this.count = 3;
  }

  /**
   * @method triggerInterval
   * @brief Countdown timer-interrupt callback (Not for used from outside of class)
   */
  triggerInterval = () => {
    this.count -= 1;
    this.ele.value = this.count;
    if(this.count <= 0) {
      clearInterval(this.itv_id);
      this.ele.value = "...";
      this.call();
    } 
  }
}
