let tablinks = document.getElementsByClassName("tab-links");
    let tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname) {
        for (tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    let side = document.getElementById("sidemenu")

    const openmenu = () =>{
        side.style.right = " 0 ";
    }
    const closemenu = () =>{
        side.style.right = " -200px ";
    }



  const scriptURL = 'https://script.google.com/macros/s/AKfycbx7QR6Q3TsPW6dGXft331QLAZHGvrPq_yKo7RpSlNLydUhY8nlpHeNH2c6o-vMQOkV1/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = " "
        },4000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  