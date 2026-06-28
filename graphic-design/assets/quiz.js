/* Reusable quiz widget. Markup:
   <div class="quiz">
     <p class="q">Question?</p>
     <button class="opt" data-correct>Right answer</button>
     <button class="opt">Wrong answer</button>
     <button class="opt">Wrong answer</button>
     <p class="fb" data-ok="Nice — why it's right." data-no="Not quite — the why."></p>
   </div>
   Give each .opt a data-correct on the right one. Optional per-option data-why
   overrides the shared feedback. Each .quiz is independent and self-grades. */
document.querySelectorAll('.quiz').forEach(function (quiz) {
  var opts = quiz.querySelectorAll('.opt');
  var fb = quiz.querySelector('.fb');
  opts.forEach(function (opt) {
    opt.addEventListener('click', function () {
      var correct = opt.hasAttribute('data-correct');
      opts.forEach(function (o) {
        o.disabled = true;
        if (o.hasAttribute('data-correct')) o.classList.add('correct');
      });
      if (!correct) opt.classList.add('wrong');
      if (fb) {
        var why = opt.getAttribute('data-why');
        fb.textContent = why || fb.getAttribute(correct ? 'data-ok' : 'data-no') || '';
        fb.classList.remove('ok', 'no');
        fb.classList.add(correct ? 'ok' : 'no');
      }
    });
  });
});
