import React, { useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai"; // Attachment icon
import "./attachment.css";

const AttachmentBox = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  return (
    <div className="attachment-box">
      <label htmlFor="file-upload" className="attachment-button">
        <AiOutlinePaperClip size={20} />
        <span>Add Attachment</span>
      </label>
      <input
        type="file"
        id="file-upload"
        multiple
        onChange={handleFileUpload}
        style={{ display: "none" }}
      />

      <div className="file-list">
        {files.map((file, index) => (
          <div key={index} className="file-item">
            <span className="file-name">{file.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttachmentBox;
