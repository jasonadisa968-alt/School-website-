document.getElementById("registerForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({
        name: name.value,
        email: email.value,
        password: password.value,
        role: role.value
    });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Account created successfully");
});

document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u =>
        u.email === loginEmail.value &&
        u.password === loginPassword.value
    );
    if (!user) {
        alert("Wrong login details");
        return;
    }
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
});

const registerForm = document.getElementById('registerForm');
const accountsTableBody = document.querySelector('#accountsTable tbody');
// Array to store accounts
let accounts = [];
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Get values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
    // Create account object
    const account = { name, email, role };
    // Add to accounts array
    accounts.push(account);
    // Update table
    updateAccountsTable();
    // Reset form
    registerForm.reset();
});
function updateAccountsTable() {
    // Clear table
    accountsTableBody.innerHTML = '';
    // Add rows
    accounts.forEach(acc => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${acc.name}</td>
            <td>${acc.email}</td>
            <td>${acc.role}</td>
        `;
        accountsTableBody.appendChild(row);
    });
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

<script>
function insert(symbol) {
  const textarea = document.getElementById("answer");
  textarea.value += symbol;
  textarea.focus();
}
</script>