document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quote-form');
  if (!form) return;

  const steps = Array.from(form.querySelectorAll('.form-step'));
  const nextBtns = form.querySelectorAll('.btn-next');
  const prevBtns = form.querySelectorAll('.btn-prev');
  const stepIndicators = form.querySelectorAll('.step-indicator');

  let currentStep = 0;

  function updateSteps() {
    steps.forEach((step, index) => {
      step.classList.toggle('active', index === currentStep);
    });

    stepIndicators.forEach((indicator, index) => {
      if (index === currentStep) {
        indicator.classList.add('active');
        indicator.classList.remove('completed');
      } else if (index < currentStep) {
        indicator.classList.add('completed');
        indicator.classList.remove('active');
      } else {
        indicator.classList.remove('active', 'completed');
      }
    });
  }

  nextBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      // Basic validation for current step
      const inputs = steps[currentStep].querySelectorAll('input[required], select[required], textarea[required]');
      let isValid = true;
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });

      if (isValid && currentStep < steps.length - 1) {
        currentStep++;
        updateSteps();
      } else if (!isValid) {
        alert('Please fill out all required fields.');
      }
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentStep > 0) {
        currentStep--;
        updateSteps();
      }
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');

    submitBtn.innerHTML = 'Submitting...';
    submitBtn.disabled = true;

    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbz_O_zCEKkzrOG0RZWtB29DaEz3-1jqachxotTbULETo48H2m-nZdvULELKUcuXuobj/exec";

    const formData = new FormData(form);

    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(data)
      });

      const formContainer = form.parentElement;

      formContainer.innerHTML = `
      <div class="quote-success text-center">

        <svg class="icon mb-md"
             style="width:60px;height:60px;color:var(--accent-color)"
             viewBox="0 0 24 24">

          <path fill="currentColor"
            d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22
            22 17.5 22 12 17.5 2 12 2M10 17L5 12
            L6.41 10.59L10 14.17L17.59 6.58L19 8
            L10 17Z"/>
        </svg>

        <h3>Quote Request Submitted!</h3>

        <p>
          Thank you for reaching out. Our design experts
          will review your requirements and contact you
          within 24 hours.
        </p>

      </div>
    `;

    } catch (error) {

      console.error('Quote submission error:', error);

      submitBtn.innerHTML = 'Submit Request';
      submitBtn.disabled = false;

      alert(
        'Unable to submit your quote request. Please try again.'
      );
    }
  });
});
