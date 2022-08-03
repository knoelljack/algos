// Logger 

// Design a logger system that receive stream of messages along with its timestamps, each message should be printed if and only if it is not printed in the last 10 seconds.

// Given a message and a timestamp (in seconds granularity), return true if the message should be printed in the given timestamp, otherwise returns false.

// It is possible that several messages arrive roughly at the same time.

// Example:
// Logger logger = new Logger();

// // logging string “hello” at timestamp 1

// logger.shouldPrintMessage(1, “hello”); returns true;

// // logging string “hy” at timestamp 2

// logger.shouldPrintMessage(2,“hy”); returns true;

// // logging string “hello” at timestamp 3

// logger.shouldPrintMessage(3,“hello”); returns false;

// // logging string “hy” at timestamp 8

// logger.shouldPrintMessage(8,“hy”); returns false;

// // logging string “hello” at timestamp 10

// logger.shouldPrintMessage(10,“hello”); returns false;

// // logging string “hello” at timestamp 11

// logger.shouldPrintMessage(11,“hello”); returns true;

class Logger {
    /** Initialize your data structure here. */
    constructor(){
        // <key, value>
        this.map = new Map();
    }
  
    /**
     * Returns true if the message should be printed in the given timestamp, otherwise returns false.
     */
    public boolean shouldPrintMessage(int timestamp, String message) {
        // if we havent seen it before, then return true and store 
        if(!this.map.get(message)){
            this.map.set(message,timestamp);
            return true;
        } 
        // 
        else {
            if(timestamp - this.map.get(message) >= 10){
                this.map.set(message,timestamp);
                return true;
            } else {
                return false;
            }
        }
    }
  }

  // ["hello", 1]


  Test(){

    Logger logger = new logger();
    assert_true(logger.shouldPrintMessage(1,“hello”));
    assert_false(logger.shouldPrintMessage(4,“hello”));

  }