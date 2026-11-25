function greet(name) {
  
    return `Hallo, ${name}!`;
  
    }

    module.exports = greet; // Ensure function is exportable for 
    // If run directly, print output (useful for debugging)
    
    if (require.main === module) {
        
    console.log(greet("World")); 
        
    }   

    