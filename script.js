function handleSubmit(event) {
    event.preventDefault();
   
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
   
    if (name === "" || message === "") {
      document.getElementById("response").innerText =
        "Please fill out all fields OR ELSE.";
    } else {
      document.getElementById("response").innerText =
        "Thank you, " + name + ". King Labubu Tej Will Respond Soon.";
    }
   }
   