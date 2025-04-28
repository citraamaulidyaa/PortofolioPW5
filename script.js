const addButton = document.getElementById('add-guest-button');
const guestNameInput = document.getElementById('guest-name-input');
const guestList = document.getElementById('guest-list');

addButton.addEventListener('click', function() {
  const guestName = guestNameInput.value.trim(); 

  if (guestName !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = guestName;

    guestList.appendChild(listItem);

    guestNameInput.value = '';
  } else {
    alert('Masukkan nama anda terlebih dahulu!');
  }
});
