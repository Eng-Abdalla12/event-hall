// countdown arrow function
 const duration = 10;
    let timePassed = 0;
    const progressBar = document.getElementById("progressBar");
    const timerText = document.getElementById("timer-text");

    const updateCountdown = () => {
      timePassed++;
      const remaining = duration - timePassed;
      const percent = (timePassed / duration) * 100;

      progressBar.style.width = `${percent}%`;
      timerText.textContent = remaining > 0
        ? `${remaining} seconds remaining`
        : "✅ Event is starting now!";

      if (timePassed >= duration) clearInterval(timerInterval);
    };

    const timerInterval = setInterval(() => updateCountdown(), 1000);

// dark/light
 document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("themeToggle");
    const icon = toggleBtn.querySelector("i");
    const body = document.body;
    const navbar = document.querySelector(".navbar");

    // Function to switch to dark
    function setDarkMode() {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
      navbar.classList.add("dark-mode");
      navbar.classList.remove("light-mode");
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      localStorage.setItem("mode", "dark");
    }

    // Function to switch to light
    function setLightMode() {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
      navbar.classList.add("light-mode");
      navbar.classList.remove("dark-mode");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      localStorage.setItem("mode", "light");
    }

    // Load saved mode
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }

    // Toggle when clicked
    toggleBtn.addEventListener("click", function () {
      if (body.classList.contains("dark-mode")) {
        setLightMode();
      } else {
        setDarkMode();
      }
    });
  });




// model open via click
const openModalBtn = document.getElementById('openModalBtn');
    const rayaanModal = new bootstrap.Modal(document.getElementById('rayaanModal'));

    openModalBtn.addEventListener('click', function () {
      rayaanModal.show();
    });

    // bookin bar
     const events = [
    { id: 1, title: "Wedding Ceremony", desc: "Celebrate love in a grand style.", capacity: 2, booked: [] },
    { id: 2, title: "Graduation Gala", desc: "Celebrate academic achievement.", capacity: 3, booked: [] },
    { id: 3, title: "Business Conference", desc: "Connect with professionals.", capacity: 3, booked: [] }
  ];

  const render = () => {
    $("#eventList").html(events.map(ev => `
      <div class="event ${ev.booked.length >= ev.capacity ? 'full' : ''}" data-id="${ev.id}">
        <strong>${ev.title}</strong>
        <button class="toggle-desc">Show Details</button>
        <div class="desc">${ev.desc}</div>
        <form class="booking-form">
          <input name="name" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <button ${ev.booked.length >= ev.capacity ? 'disabled' : ''}>Book Now</button>
        </form>
      </div>
    `).join(''));
  };

  $(document).on('click', '.toggle-desc', function () {
    const $desc = $(this).siblings('.desc');
    $desc.slideToggle();
    $(this).text($desc.is(':visible') ? 'Hide Details' : 'Show Details');
  });

  $(document).on('submit', '.booking-form', function (e) {
    e.preventDefault();
    const $form = $(this);
    const $card = $form.closest('.event');
    const id = +$card.data('id');
    const name = $form.find('[name="name"]').val().trim();
    const email = $form.find('[name="email"]').val().trim().toLowerCase();
    const ev = events.find(e => e.id === id);

    if (ev.booked.includes(email)) return alert("❌ You already booked this event!");
    if (ev.booked.length >= ev.capacity) return alert("❌ This event is fully booked!");

    ev.booked.push(email);
    alert(`✅ Booking successful for ${ev.title}`);
    render();
  });

  render();
// contact

 document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("✅ Your message has been sent successfully!");
    this.reset();
  });