import React, { useState } from "react";

const XModal = () => {
  const [open, setOpen] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const resetAndClose = () => {
    setUsername("");
    setEmail("");
    setPhone("");
    setDob("");
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const u = username.trim();
    const em = email.trim();
    const ph = phone.trim();
    const d = dob.trim();

    // ✅ 1) If user provided email, validate it first (even if other fields empty)
    if (em && !em.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    // ✅ 2) If user provided phone, validate it first
    if (ph && !/^\d{10}$/.test(ph)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    // ✅ 3) If user provided dob, validate it first
    if (d) {
      const selected = new Date(d);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      selected.setHours(0, 0, 0, 0);

      if (selected > today) {
        alert("Invalid date of birth. Date of birth cannot be in the future.");
        return;
      }
    }

    // ✅ 4) Now required-field checks (only after format checks)
    if (!u) {
      alert("Please fill out the Username field.");
      return;
    }
    if (!em) {
      alert("Please fill out the Email field.");
      return;
    }
    if (!ph) {
      alert("Please fill out the Phone field.");
      return;
    }
    if (!d) {
      alert("Please fill out the Date of Birth field.");
      return;
    }

    // ✅ success
    resetAndClose();
  };

  return (
    <div>
      <h1>User Details Modal</h1>

      <button onClick={() => setOpen(true)}>Open Form</button>

      {open && (
        <div
          className="modal"
          onClick={(e) => {
            // ✅ closes only when clicking on the overlay (outside modal-content)
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="dob">Date of Birth:</label>
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
