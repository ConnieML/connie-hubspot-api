import React, { useState } from "react";
import axios from "axios";

const PhoneNumberInput = () => {
  const [apiUrl] = useState("https://staging.myadulthomecare.com/v1/login");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [secretKey, setSecretKey] = useState(null);

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phoneNumber) {
      alert("Please enter a valid phone number");
      return;
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const formData = new FormData();
    formData.append("username", "HubSpot_User");
    formData.append("password", "Nvcrm@007");
    formData.append("secret_key", secretKey);
    formData.append("timestamp", timestamp);
    formData.append("phone_number", phoneNumber);

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      let result = await axios.post(apiUrl, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (result.data.statusCode === 401 && result.data.key) {
        console.log("Received new key, updating secret_key.");
        setSecretKey(result.data.key);
        formData.set("secret_key", result.data.key);
        
        result = await axios.post(apiUrl, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }

      if (result.data.statusCode === 200 && result.data.access_url) {
        console.log("Access URL received, opening in a new tab.");
        window.open(result.data.access_url, "_blank");
      }

      setResponse(result.data);
    } catch (err) {
      setError("Failed to fetch data: " + err.message);
      console.error("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '10px' }}>
      <h3>Enter phone number to access MyAdultHomeCare</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={handleChange}
          required
          style={{ marginRight: '10px' }}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {/* {response && <p>Response: {JSON.stringify(response)}</p>} */}
    </div>
  );
};

export default PhoneNumberInput;
