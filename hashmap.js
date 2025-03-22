class HashMap {
    constructor(loadFactor = 0.75, capacity = 16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = new Array();
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
    }

    set(key, value) {
        let k = hash(key);
        let v = hash(value)

        console.log(`the value of key is ${k}`)
        console.log(`the value of value is ${v}`)

    }

    // takes one argument as a key and returns the value that is assigned to this key.
    // If a key is not found, return null.
    get(key) {

    }
    

    // takes a key as an argument and returns true or false based on 
    // whether or not the key is in the hash map.
    has(key) {

    }
    
    
    // takes a key as an argument. If the given key is in the hash map, it should remove 
    // the entry with that key and return true. If the key isn’t in the hash map, it should return false.
    remove(key) {

    }
    
    
    // returns the number of stored keys in the hash map.
    length() {

    }
    
    
    // removes all entries in the hash map.
    clear() {

    }
    
    
    // returns an array containing all the keys inside the hash map.
    keys() {

    }
    
    
    // returns an array containing all the values.
    values() {

    }
    
    
    // returns an array that contains each key, value pair.
    //  Example: [[firstKey, firstValue], [secondKey, secondValue]]
    entries() {

    }
    
    
    

}