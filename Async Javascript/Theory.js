// Default javascript behaviour.

// Javascript is Synchronous
// Single Threaded language. 

// How execution context occur in js:
    // Execution Context:
        // Execute one line of code at a time. 
            // |
            // |
            // | console(log1); 
            // | console(log2); // second will wait for first one to execute first then the second will execute. (Also call stack and heap etc concept also should be remembered.)



// Blocking Code Vs Non Blocking Code -----------------------------------------------------------------
// Blocking Code:
    // Block the flow of execution of code
        // Read file sync (when a program wants to read a file it tells kernal, kernal go to the location read the file and give execution back to the program. But kernal is not always free and sometimes make the program wait. But each of them has their own use case.)

// Non Blocking Code:
    // Does not block execution.
        // Read File Async (Here we don't wait the program until they read/write the file.)

