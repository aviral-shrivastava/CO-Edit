import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Home() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const generateRoomId = (e) => {
    e.preventDefault();
    const Id = uuid();
    setRoomId(Id);
    toast.success("Room ID generated successfully!");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Both fields are required");
      return;
    }

    // Redirect to editor page
    navigate(`/editor/${roomId}`, {
      state: { username },
    });
    toast.success("Joined the room successfully!");
  };

  // Join room when pressing Enter key
  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#1c1c1c", // Dark background color
      }}
    >
      <div
        className="card p-4"
        style={{
          maxWidth: "400px",
          borderRadius: "12px",
          backgroundColor: "#2e2e2e", // Darker card background
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.6)",
          border: "none",
        }}
      >
        <div className="card-body text-center">
          <img
            src="/images/CO-Edit.png"
            alt="Logo"
            className="img-fluid mb-3"
            style={{ maxWidth: "100px", filter: "invert(1)" }} // Inverted logo for dark theme
          />
          <h4 className="card-title mb-3" style={{ color: "#f0f0f0" }}>
            Enter Room Details
          </h4>

          <div className="form-group">
            <input
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="form-control mb-3"
              placeholder="Room ID"
              style={{
                backgroundColor: "#444", // Dark input background
                border: "1px solid #555", // Lighter border
                borderRadius: "8px",
                color: "#fff", // White text for contrast
                padding: "10px",
              }}
              onKeyUp={handleInputEnter}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control mb-4"
              placeholder="Username"
              style={{
                backgroundColor: "#444", // Dark input background
                border: "1px solid #555", // Lighter border
                borderRadius: "8px",
                color: "#fff", // White text for contrast
                padding: "10px",
              }}
              onKeyUp={handleInputEnter}
            />
          </div>
          <button
            onClick={joinRoom}
            className="btn btn-primary btn-block mb-3"
            style={{
              backgroundColor: "#007bff",
              borderColor: "#007bff",
              borderRadius: "8px",
              padding: "12px 20px",
              fontSize: "16px",
            }}
          >
            Join Room
          </button>
          <p className="mt-3" style={{ color: "#b0b0b0" }}>
            Don't have a room ID?{" "}
            <span
              onClick={generateRoomId}
              style={{
                color: "#007bff",
                cursor: "pointer",
                fontWeight: "500",
                textDecoration: "underline",
              }}
            >
              Create New Room
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
