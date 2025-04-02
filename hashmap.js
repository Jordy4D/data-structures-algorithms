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
        let bucket = this.buckets[index]

        if (this.buckets[index] !== undefined ) {
            
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket[i][1] = value;
                    return;
                } 
            }
            
            this.hashLength += 1;
            this.buckets[index].push([key, value])

        }

        if (!this.buckets[index]) {
            this.hashLength += 1;
            this.buckets[index] = [];
            this.buckets[index].push([key, value])
        }
        


        if ( (this.hashLength / this.capacity) > this.loadFactor) {
            this._resize()
            console.log('load capacity reached')
            
            
        }
            
    }
        
    _resize() {
        const oldBuckets = this.buckets;
        
        this.capacity *= 2
        this.buckets = new Array(this.capacity)
        this.hashLength = 0
        
        
        for (const bucket of oldBuckets) {
            if (!bucket) continue; 
            for (let [key, value] of bucket) {
                this.set(key, value);
            }
        }
    }


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
    
    
 
    remove(key) {
        let index = this.hash(key) % this.capacity;

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
          }
          

        if (!this.buckets[index]) {
            return false
        } 
       

        for (let bucket of this.buckets[index]) {
            if (bucket[0] === key) {
          
                this.buckets[index] = null
                this.hashLength -= 1;
                return true
            }
        }
    }
    
    

    length() {
        return this.hashLength
    }
    
    

    clear() {
        
        this.buckets = new Array(this.capacity);
        this.hashLength = 0;
    
    }
    
    
    keys() {

        let keyArr = [];

        for (let bucket of this.buckets) {
            if (bucket !== undefined ) {
                for (let i = 0; i < bucket.length; i++) {
                    keyArr.push(bucket[i][0])
                }
            }            
        }

        return keyArr;
    }
    
    
    values() {
        let keyArr = [];

        for (let bucket of this.buckets) {
            if (bucket !== undefined ) {
                for (let i = 0; i < bucket.length; i++) {
                    keyArr.push(bucket[i][1])
                }
            }
        }

        return keyArr;
    }
    
    
    entries() {
        let keyArr = [];

        for (let bucket of this.buckets) {
            if (bucket !== undefined ) {
                for (let i = 0; i < bucket.length; i++) {
                    keyArr.push(bucket[i])

                }

            }
        }

        return keyArr;
    }
    
    
    

}

