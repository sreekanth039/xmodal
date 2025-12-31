import React, { useState } from "react";

const XModal = () => {
  const [open, setOpen] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // compulsory fields
    if (!username) {
      alert("Please fill out the Username field.");
      return;
    }
    if (!email) {
      alert("Please fill out the Email field.");
      return;
    }
    if (!phone) {
      alert("Please fill out the Phone field.");
      return;
    }
    if (!dob) {
      alert("Please fill out the Date of Birth field.");
      return;
    }

    // email validation
    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    // phone validation
    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    // dob validation (future date)
    const selectedDate = new Date(dob);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate > today) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    // success → reset and close modal
    setUsername("");
    setEmail("");
    setPhone("");
    setDob("");
    setOpen(false);
  };

  return (
    <div>
      {/* Required heading */}
      <h1>User Details Modal</h1>

      {/* Open Form button */}
      <button onClick={() => setOpen(true)}>Open Form</button>

      {open && (
        <div className="modal" onClick={() => setOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Username:</label>
                <input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div>
                <label>Email:</label>
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label>Phone:</label>
                <input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label>Date of Birth:</label>
                <input
                  id="dob"
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>

              <button className="submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;
