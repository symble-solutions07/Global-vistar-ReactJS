import { useEffect, useState } from "react";
// import "./UploadApp.css";
import axios from "axios";
function Upload() {
  const [file, setFile] = useState();
  const handleUpload = (e) => {
    const formdata = new FormData();
    formdata.append("file", file);
    axios
      .post(
        "http://globalvistarbackend-production.up.railway.app:3003/upload",
        formdata
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <button onClick={handleUpload}>Upload</button>
    </>
  );
}

export default Upload;
