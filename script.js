function showPage(id){
  document.querySelectorAll('.page').forEach(function(p){ p.classList.remove('active'); });
  document.getElementById('page-' + id).classList.add('active');
  window.scrollTo(0, 0);
}

function goStep(n){
  document.querySelectorAll('.form-step').forEach(function(s){ s.classList.remove('active'); });
  document.getElementById('fs-' + n).classList.add('active');
  for (var i = 1; i <= 3; i++){
    var el = document.getElementById('qstep-' + i);
    el.classList.remove('active', 'done');
    if (i === n) el.classList.add('active');
    if (i < n) el.classList.add('done');
  }
}

document.querySelectorAll('.service-tile').forEach(function(tile){
  tile.addEventListener('click', function(){
    document.querySelectorAll('.service-tile').forEach(function(t){ t.classList.remove('selected'); });
    tile.classList.add('selected');
    var input = tile.querySelector('input[type="radio"]');
    if (input) input.checked = true;
  });
});

var quoteForm = document.getElementById('quoteForm');
if (quoteForm){
  quoteForm.addEventListener('submit', function(e){
    /*
      This demo intercepts submission and shows the confirmation screen directly.
      To actually receive leads, point the form's "action" attribute (in index.html)
      at a real endpoint -- e.g. a Formspree form ID, your own backend, or a
      serverless function -- and remove preventDefault() below so the browser
      performs a real POST before redirecting.
    */
    e.preventDefault();

    var serviceInput = quoteForm.querySelector('input[name="service"]:checked');
    var postcodeInput = document.getElementById('postcode');

    document.getElementById('confirmService').textContent = serviceInput ? serviceInput.value : 'Roofing Enquiry';
    document.getElementById('confirmPostcode').textContent = postcodeInput && postcodeInput.value ? postcodeInput.value.toUpperCase() : 'Not provided';

    showPage('confirm');
  });
}
