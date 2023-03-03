const visitTime = JSON.parse(localStorage.getItem("sessions"));
console.log(visitTime);

visitTime.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item;
    document.body.append(div);
});