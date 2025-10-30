function generateID() {
 const name = document.getElementById('name').value.trim();
 const job = document.getElementById('job').value.trim();
 const contact = document.getElementById('contact').value.trim();
 const photoInput = document.getElementById('photo');
 const card = document.getElementById('idCard');
 if (!name || !job || !contact) {
 alert("Please fill all details!");
 return;
 }
 document.getElementById('idName').textContent = name;
 document.getElementById('idJob').textContent = job;
 document.getElementById('idContact').textContent = contact;
 const file = photoInput.files[0];
 if (file) {
 const reader = new FileReader();
 reader.onload = e => document.getElementById('idPhoto').src = e.target.result;
 reader.readAsDataURL(file);
 }
 const qrData = `${name} | ${job} | ${contact}`;
 document.getElementById('qrcode').innerHTML = "";
 new QRCode(document.getElementById("qrcode"), { text: qrData, width: 100, height: 100 });
 card.classList.remove('hidden');
   }
