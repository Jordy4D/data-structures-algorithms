class HashMap {
    constructor(capacity = 16) {
        this.loadFactor = 0.75;
        this.capacity = capacity;
        this.buckets = new Array(capacity);
        this.hashLength = 0;
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
        let index = this.hash(key) % this.capacity;
        
        if (!this.buckets[index]) {
            this.buckets[index] = [];
            this.hashLength += 1;
            this.buckets[index].push([key, value])
        }
        
        // probably need to do a for loop to search for any keys in index that match
        // before trying to replace the value of said key

        // if (test.buckets[index][0].includes(key)) {
        //     this.buckets[index][0] = [key, value]
        //     this.hashLength += 1;
        //     return this.buckets[index].push([key, value])
        // } 
        
        if ((this.hashLength/this.capacity) === this.loadFactor) {
            let newBucket = new Array(capacity)
            this.buckets.concat(newBucket)
            this.capacity *= 2
        }

    }

    // takes one argument as a key and returns the value that is assigned to this key.
    // If a key is not found, return null.
    get(key) {
        let index = this.hash(key) % this.capacity;

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
          }
          

        if (!this.buckets[index]) {
            return null
        }

        for (let bucket of this.buckets[index]) {
            if (bucket[0] === key) {
                return bucket[1]
            }
        }
    }
    

    // takes a key as an argument and returns true or false based on 
    // whether or not the key is in the hash map.
    has(key) {
        let index = this.hash(key) % this.capacity;

        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
          }
          

        if (!this.buckets[index]) {
            return false
        } else {
            return true
        }
    }
    
    
    // takes a key as an argument. If the given key is in the hash map, it should remove 
    // the entry with that key and return true. If the key isn’t in the hash map, it should return false.
    remove(key) {
        let index = this.hash(key) % this.capacity;

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
          }
          

        if (!this.buckets[index]) {
            return false
        } 
        // else {
        //     this.buckets[index]
        // }

        for (let bucket of this.buckets[index]) {
            if (bucket[0] === key) {
                // let value = this.buckets[index].indexOf(bucket)
                // this.buckets[index].splice(value)
                this.buckets[index] = null
                this.hashLength -= 1;
                return true
            }
        }
    }
    
    
    // returns the number of stored keys in the hash map.
    // doesn't work with (), need to correct.
    length() {
        return this.hashLength
    }
    
    
    // removes all entries in the hash map.

    clear() {
        
        this.buckets = new Array(this.capacity);
        this.hashLength = 0;
    
    }
    
    
    // returns an array containing all the keys inside the hash map.
    keys() {

        let keyArr = [];

        for (let bucket of this.buckets) {
            if (bucket !== undefined ) {
                keyArr.push(bucket[0][0])
            }
        }

        return keyArr;
    }
    
    
    // returns an array containing all the values.
    values() {
        let keyArr = [];

        for (let bucket of this.buckets) {
            if (bucket !== undefined ) {
                keyArr.push(bucket[0][1])
            }
        }

        return keyArr;
    }
    
    
    // returns an array that contains each key, value pair.
    //  Example: [[firstKey, firstValue], [secondKey, secondValue]]
    entries() {
        let keyArr = [];

        for (let bucket of this.buckets) {
            if (bucket !== undefined ) {
          
                keyArr.push(bucket[0])

            }
        }

        return keyArr;
    }
    
    
    

}