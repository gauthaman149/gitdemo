 const orderListDIV = document.getElementById("orderList");
                let orders = JSON.parse(localStorage.getItem("orders")) || [];

                if (orders.length === 0) {
                     orderListDIV.innerHTML = "<p>No orders found.</p>";
                } else {
                    orders.reverse().forEach((order, index) => {
                        const orderCard = document.createElement("div");
                        orderCard.className = "order-card";
                        orderCard.innerHTML = `
                            <h3>${order.name} (${order.class})</h3>
                            <p>🍴${order.items}</p>
                            <p>🕒 Ordered At:${order.time}</span></p>
                            <p>Status: <span class="${order.status === 'Delivered' ? 'delivered' : 'pending'}">${order.status}</span></p>
                            <button class="btn btn-${order.status === 'Delivered' ? 'success' : 'danger'} btn-sm" style="background-color: ${order.status === 'Delivered' ? 'green' : 'red'};">Mark as ${order.status === 'Delivered' ? 'Delivered' : 'Pending'}</button>
                            <button class="deliver-btn" data-indexDe="${orders.length - 1 - index}" ${order.status === 'Delivered' ? 'disabled' : ''}>
                                Mark as Delivered
                            </button>
                        `;
                        orderListDIV.appendChild(orderCard);
                    });

                    document.querySelectorAll(".deliver-btn").forEach(button => {
                        button.addEventListener("click", function() {
                            const index = this.getAttribute("data-index");
                            orders[i].status = "Delivered";
                            localStorage.setItem("orders", JSON.stringify(orders));
                            location.reload();
                        });
                    });
                }