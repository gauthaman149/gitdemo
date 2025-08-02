document.addEventListener('DOMContentLoaded', () => {
    const deliverButtons = document.querySelectorAll(".deliver-btn");

    deliverButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const card = button.closest('.order-card');
            const status = card.querySelector('.status')
           
            status.textContent = 'Delivered ✅';
            status.classList.remove('pending');
            status.classList.add('delivered');

            button.disabled = true;
            button.textContent = 'Delivered ✅';
        });
    });
});

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('clock').textContent = `Date: ${now.toLocaleDateString()} | Time: ${timeString}`;
}

setInterval(updateClock, 1000);
updateClock();

let pending = 0;
let delivered = 0;
let total = 0;

function updateDisplay() {
    document.getElementById('pendingCount').textContent = `🕒Pending Orders: ${pending}`;
    document.getElementById('deliveredCount').textContent = `✅Delivered Orders: ${delivered}`;
    document.getElementById('totalCount').textContent = `📊Total Orders: ${total}`;
}

function addPendingOrder() {
    pending++;
    total++;
    updateDisplay();
}

function addDeliveredOrder() {
    if (pending > 0) {
        pending--;
        delivered++;
        total++;
        updateDisplay();
    } else {
        alert("No pending orders to deliver!");
    }
}

const countdownElement = document.getElementById('countdown');
if (countdownElement) {
    const endTime = new Date(Date.now() + 3600000); // 1 hour from now

    function updateCountdown() {
        const now = new Date();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            countdownElement.textContent = "Time's up!";
            clearInterval(countdownInterval);
            return;
        }

        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `<span id="hours">${hours}</span>h <span id="minutes">${minutes}</span>m <span id="seconds">${seconds}</span>s`;
    }

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}
