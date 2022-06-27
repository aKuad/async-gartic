/**
 * @file DelayedClick.js
 * @brief Click interrupt occurs in delayed 3 seconds
 * @author aKuad
 */

class DelayedClick {
  /**
   * @fn
   * @brief Constructor
   * @param {HTMLElement} ele Target button element
   * @param {Function} call Target calling function
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
   * @fn
   * @brief Start call count (Not for used from outside of class)
   */
  startCount = () => {
    this.ele.removeEventListener("click", this.startCount);
    this.ele.addEventListener("click", this.stopCount);
    this.itv_id = setInterval(this.triggerInterval, 1000);
    this.value_org = this.ele.value;
    this.ele.value = this.count;
  }

  /**
   * @fn
   * @brief Stop call count
   */
  stopCount = () => {
    this.ele.removeEventListener("click", this.stopCount);
    this.ele.addEventListener("click", this.startCount);
    clearInterval(this.itv_id);
    this.ele.value = this.value_org;
    this.count = 3;
  }

  /**
   * @fn
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
