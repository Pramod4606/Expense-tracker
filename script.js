const expenseName = document.getElementById('expenseName');
const expenseAmount = document.getElementById('expenseAmount');
const expenseList = document.getElementById('expenseList');
const totalAmount = document.getElementById('totalAmount');
const addBtn = document.getElementById('addBtn');
const toggleMode = document.getElementById('toggleMode');

let total = 0;

addBtn.addEventListener('click', addExpense);
toggleMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

function addExpense() {
  const name = expenseName.value.trim();
  const amount = parseFloat(expenseAmount.value);

  if(name === '' || isNaN(amount) || amount <= 0) {
    alert('Please enter valid name and amount');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `${name} - ₹${amount.toFixed(2)} <button class="deleteBtn">❌</button>`;

  const deleteBtn = li.querySelector('.deleteBtn');
  deleteBtn.addEventListener('click', () => {
    total -= amount;
    updateTotal();
    expenseList.removeChild(li);
  });

  expenseList.appendChild(li);

  total += amount;
  updateTotal();

  expenseName.value = '';
  expenseAmount.value = '';
}

function updateTotal() {
  totalAmount.textContent = total.toFixed(2);
}