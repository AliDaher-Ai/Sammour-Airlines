
    
    document.getElementById('signup-form').addEventListener('submit', function(e) {
        e.preventDefault();  
        
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        
        if (username && email && password) {
            
            const formData = {
                username: username,
                email: email,
                password: password
            };

            
            alert(`Account created successfully for ${username}! The data has been saved.`);
            
          
            clearFormData(e);  
           

        } else {
            alert('Please fill out all fields.');
        }
    });

   
    function clearFormData(event) {
       
        event.preventDefault();

        const form = document.getElementById("signup-form");
        
        form.reset();

        console.log("Form data has been cleared.");

        window.location.href="../index.html";

    
    }

