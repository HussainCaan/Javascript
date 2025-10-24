// Imedietly Invoked Function Expression
(function chai(){ //  Named IIFE
    console.log("db connected")
})(); // This is the synyax of IIFE
// We use this to execute an function imedietly because sometimes our function values get polluted by global scope so to avoid this pollution we use IIFE
//IMPORTANT: If we use IIFE so we must use ; like that to end that function otherwise it won't know where to end context

// IIFE by arrow functions
( 
    (name) => //  unnamed IIFE
    {
         console.log(`DB CONNECTED TOO ${name}`)
        
    }
)("Hussain");