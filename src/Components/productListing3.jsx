import { useState } from "react";
import "./productListing2.css";
import axios from "axios";
function Upload() {
  const [file, setFile] = useState();
  const handleUpload = (e) => {
    const formdata = new FormData();
    formdata.append("file", file);
    axios
      .post("http://localhost:3001/form/upload", formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>
        <div className="otp-login">
          <h2 className="gv-logo">
            <span className="global">Global</span>{" "}
            <span className="vistar">Vistar</span>
          </h2>
          <h4 className="otp-login-title">Certifications ( प्रमाणपत्र )</h4>
          <div className="otp-login-card">
            <div className="input1">
              Fssai License (Fssai लाइसेंस) *
              <input
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
              <button onClick={handleUpload}>Upload</button>
            </div>
            <div className="input2">
              Fssai License (Fssai लाइसेंस) *
              <input
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
              <button onClick={handleUpload}>Upload</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Upload;
