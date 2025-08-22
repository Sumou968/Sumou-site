
function sendMessage(e){
  e.preventDefault();
  const data = new FormData(e.target);
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');
  const subject = encodeURIComponent('Website inquiry from ' + name);
  const body = encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>');
  window.location.href = 'mailto:durrat.bh.om@gmail.com?subject=' + subject + '&body=' + body;
  return false;
}
document.getElementById('year').textContent = new Date().getFullYear();
