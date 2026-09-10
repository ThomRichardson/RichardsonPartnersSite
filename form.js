(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const marketing = document.getElementById('consent-marketing').checked;
    const nonMarketing = document.getElementById('consent-non-marketing').checked;

    const subject = encodeURIComponent(
      'Contact from ' + firstName + ' ' + lastName + ' — Richardson Partners, LLC'
    );
    const body = encodeURIComponent(
      'First Name: ' + firstName + '\n' +
      'Last Name: ' + lastName + '\n' +
      'Phone: ' + (phone || 'Not provided') + '\n' +
      'Email: ' + email + '\n' +
      'Marketing SMS Consent: ' + (marketing ? 'Yes' : 'No') + '\n' +
      'Non-Marketing SMS Consent: ' + (nonMarketing ? 'Yes' : 'No') + '\n\n' +
      (message || 'No message provided.')
    );

    window.location.href = 'mailto:thom@richardsonpartnersllc.com?subject=' + subject + '&body=' + body;
  });
})();
