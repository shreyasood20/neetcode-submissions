class Observer {
    /**
     * @param {string} itemName
     */
    notify(itemName) {
        throw new Error("Method 'notify()' must be implemented.");
    }
}

class Customer extends Observer {
    /**
     * @param {string} name
     */
    constructor(name) {
        super();
        this.name = name;
        this.notifications = 0;
    }

    /**
     * @param {string} itemName
     */
    notify(itemName) {
        this.notifications += 1;
    }

    /**
     * @return {number}
     */
    countNotifications() {
        return this.notifications;
    }
}

class OnlineStoreItem {
    /**
     * @param {string} itemName
     * @param {number} stock
     */
    constructor(itemName, stock) {
        this.itemName = itemName;
        this.stock = stock;
        this.set = new Set();
    }

    /**
     * @param {Observer} observer
     */
    subscribe(observer) {
        this.set.add(observer);
       // if(map.get(observer).includes(itemName)) this.itemName.notify(observer);
    }

    /**
     * @param {Observer} observer
     */
    unsubscribe(observer) {
        this.set.delete(observer);
    }

    /**
     * @param {number} newStock
     */
    updateStock(newStock) {
        const oldstock = this.stock;
        this.stock = newStock           
        if(oldstock===0 && this.stock>0){
           for( let o of this.set){
                o.notify(this.itemName);
           }
        }
    }
}
