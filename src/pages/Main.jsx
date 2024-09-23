import React, { useState } from "react";
import "./main.css";

function Dashboard() {
  const [showModal, setShowModal] = useState(false); // State to handle modal visibility
  const [step, setStep] = useState(1); // State to handle form steps

  const handleImageClick = () => {
    setShowModal(true); // Show modal on image click
  };

  const handleCloseModal = () => {
    setShowModal(false); // Hide modal on close
    setStep(1); // Reset the step when modal is closed
  };

  const handleNextClick = () => {
    setStep((prevStep) => prevStep + 1); // Move to the next step
  };

  const handleBackClick = () => {
    setStep((prevStep) => prevStep - 1); // Go back to the previous step
  };

  return (
    <div className="dashboard-container">
      {/* Image */}
      <img
        src="https://res.cloudinary.com/dynmraubw/image/upload/v1726809124/Screenshot_2024-09-20_104039_iowrcw.png"
        alt="Dashboard screenshot"
        style={{ width: "100%", height: "100vh", cursor: "pointer" }}
        onClick={handleImageClick}
      />

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Add New Profile</h3>

            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div>
                <div className="form-section">
                  <label>Enter Name</label>
                  <input type="text" placeholder="Eg. John Doe" />
                </div>
                <div className="form-section">
                  <label>Enter Email</label>
                  <input type="email" placeholder="Eg. john@example.com" />
                </div>
                <div className="form-section">
                  <label>Enter Phone</label>
                  <input type="tel" placeholder="Eg. 9123456789" />
                </div>
                <button className="next-btn" onClick={handleNextClick}>
                  Next
                </button>
              </div>
            )}

            {/* Step 2: Social Info */}
            {step === 2 && (
              <div>
                <div className="form-section">
                  <label>Instagram Link (Optional)</label>
                  <input type="url" placeholder="Eg. instagram.com/username" />
                </div>
                <div className="form-section">
                  <label>YouTube Link (Optional)</label>
                  <input type="url" placeholder="Eg. youtube.com/username" />
                </div>
                <button className="next-btn" onClick={handleBackClick}>
                  Back
                </button>
                <button className="next-btn" onClick={handleCloseModal}>
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
