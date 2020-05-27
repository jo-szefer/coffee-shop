export const sendEmail = (email, message) =>
  new Promise((res, rej) => {
    fetch("http://localhost:5000/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    })
      .then(() => res())
      .catch(() => rej());
  });
