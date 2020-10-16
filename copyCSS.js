const fs = require('fs'); 
  
fs.copyFile("./hello-svelte/public/build/bundle.css", "./PCFSvelte/css/bundle.css", (err) => { 
  if (err) { 
    console.log("Error Found:", err); 
  } 
});