
emailjs.init("QZNbo0-MaqJ492Ss0");

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        to_email: "jakptechhub@gmail.com"
    };

    emailjs.send(
        "service_ykg6v0c",
        "template_x46fpn3",
        params
    )
    .then(function () {
        alert("Message sent successfully!");
        form.reset();
    })
    .catch(function (error) {
        alert("Failed to send message.");
        console.error(error);
    });
});