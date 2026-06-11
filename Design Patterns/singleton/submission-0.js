class Singleton {
     static singleton =null;
    /**
     * In JavaScript consider this method as the 'getInstance'
     */
    constructor() {
        if(Singleton.singleton){
            return Singleton.singleton;
        }
        Singleton.singleton = this;
    }

    /**
     * @return {string}
     */
    getValue() {
        return Singleton.singleton;
    }

    /**
     * @param {string} value
     * @return {void}
     */
    setValue(value) {
        Singleton.singleton = value;
    }
}
