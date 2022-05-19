// ----- ----- ----- ----- Below code is executed in the login template

const signupForm = document.getElementById('signup-form');

async function signupFormHandler(event) {
  event.preventDefault();
  // Extract the values from the sign up form
  const username = document.getElementById('username-signup').value;
  const email = document.getElementById('email-signup').value;
  const password = document.getElementById('password-signup').value;

  // Execute the fetch using above values insert into body, extra to route
  const response = await fetch(`/api/users`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // If the response is ok, refresh page and redirect
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    // Otherwise alert the user accordingly
    alert(response.statusText);
  }
}

// Add the event handler for the form submission
signupForm.addEventListener('submit', signupFormHandler);