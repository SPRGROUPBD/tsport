function openBookingForm(doctorName) {
  document.getElementById('doctor-name').textContent = doctorName;
  document.getElementById('booking-form').style.display = 'flex';
}

function closeBookingForm() {
  document.getElementById('booking-form').style.display = 'none';
}
