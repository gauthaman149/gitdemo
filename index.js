 const checkbox = document.getElementById("orderedCheckbox");
            const container = document.getElementById("scratchContainer");
            const canvas = document.getElementById("scratchCanvas");
            const ctx = canvas.getContext("2d");

            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {

                    container.style.display = "block";
                    initScratchCard();
                } else {
                    container.style.display = "none";
                    }
            });

            function initScratchCard() {
                canvas.width = scratchContainer.offsetWidth;
                canvas.height = scratchContainer.offsetHeight;
                ctx.fillStyle = "#888";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.font = "20px Arial";
                ctx.fillStyle = "#ccc";
                ctx.fillText("SCRATCH TO REVEAL", 90, 75);
                ctx.globalCompositeOperation = "destination-out";

                let isDrawing = false;

                canvas.addEventListener("mousedown", () => isDrawing = true);
                canvas.addEventListener("mouseup", () => isDrawing = false);
                canvas.addEventListener("mousemove", (e) => {
                    if (isDrawing) return;
                    const rect = canvas.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    ctx.beginPath();
                    ctx.arc(x, y, 20, 0, Math.PI * 2);
                    ctx.fill();
                });
            }
                canvas.addEventListener("mousedown", () => isDrawing = true);
                canvas.addEventListener("mouseup", () => isDrawing = false);
                canvas.addEventListener("mousemove", (e) => isDrawing && scratch(e));

                canvas.addEventListener("touchstart", () => isDrawing = true);
                canvas.addEventListener("touchend", () => isDrawing = false);
                canvas.addEventListener("touchmove", (e) => isDrawing && scratch(e));

                function revealVoucher(card) {
                    card.classList.add("scratched");
                }

                const users = [
                    { name: "Chandran", voucher: "10% OFF", role: "Teacher", id: "1936" },
                    { name: "Kalaivani", voucher: "15% OFF", role: "Student", id: "1642" },
                    { name: "Thirumaleshwaran", voucher: "20% OFF", role: "Staff", id: "1875" },
                    { name: "Tamizhalagan", voucher: "25% OFF", role: "Admin", id: "1993" }
                ];

                function checkRegistration() {
                    const nameInput = document.getElementById("Name").value.trim();
                    const output = document.getElementById("output");
                    const user = users.find(u => u.name === nameInput);
                    const foundUser = users.find(u => u.name.toLowerCase() === nameInput.toLowerCase());

                    if (user) {
                        console.log("✅ User found:", user);
                        console.log("Name:", user.name);
                        output.textContent = `Welcome ${user.name}! Your voucher code is ${user.voucher}.`;
                    } else {
                        console.log("❌ User not found.");
                        output.textContent = "User not found.";
                    }
                    if (foundUser) {
                        console.log("Role:", foundUser.role);
                        console.log("ID:", foundUser.id);

                        document.getElementById("output").textContent = `Welcome ${foundUser.name}! Your voucher code is ${foundUser.voucher}.`;
                        output.textContent = `Welcome ${foundUser.name}! Your voucher code is ${foundUser.voucher}.`;
                    } else {
                        document.getElementById("output").textContent = "User not found.";
                        output.textContent = "User not found.";
                    }
                }

                const swiper = new Swiper(".mySwiper", {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                loop: true,
                slidesPerView: "auto",
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                }
            });
