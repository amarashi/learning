/* Reusable "squint test" toggle. Markup:
     <div class="squint-zone" id="zone"> ...colour cards... </div>
     <button class="squint-btn" data-squint="#zone"
             data-on="Squint (desaturate)" data-off="Open your eyes">Squint</button>
   The button toggles .squinting on its target (data-squint = a selector; if
   omitted, the closest .squint-zone), simulating a squint: it desaturates and
   softens so only VALUE survives. Reusable across any value/contrast lesson. */
document.querySelectorAll('[data-squint]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var sel = btn.getAttribute('data-squint');
    var zone = sel ? document.querySelector(sel) : btn.closest('.squint-zone');
    if (!zone) return;
    var on = zone.classList.toggle('squinting');
    var on_label = btn.getAttribute('data-on') || 'Squint';
    var off_label = btn.getAttribute('data-off') || 'Open your eyes';
    btn.textContent = on ? off_label : on_label;
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
});
