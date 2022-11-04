import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2';

const App = () => {
  const [loading, setLoading] = useState(false);

  const predictResults = () => {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var sex = document.getElementById('sex').value;
    var cp = document.getElementById('cp').value;
    var trestbps = document.getElementById('trestbps').value;
    var chol = document.getElementById('chol').value;
    var fbs = document.getElementById('fbs').value;
    var rest_ecg = document.getElementById('rest_ecg').value;
    var thalach = document.getElementById('thalach').value;
    var exang = document.getElementById('exang').value;
    var oldpeak = document.getElementById('oldpeak').value;
    var slope = document.getElementById('slope').value;
    var ca = document.getElementById('ca').value;
    var thal = document.getElementById('thal').value;

    if (name !== "" && age !== "" && sex !== "" && cp !== "" && trestbps !== "" && chol !== "" && fbs !== "" && rest_ecg !== "" && thalach !== "" && exang !== "" && oldpeak !== "" && slope !== "" && ca !== "" && thal !== "") {
      setLoading(true);
      let formData = new FormData();
      formData.append('age', age);
      formData.append('sex', sex);
      formData.append('cp', cp);
      formData.append('trestbps', trestbps);
      formData.append('chol', chol);
      formData.append('fbs', fbs);
      formData.append('rest_ecg', rest_ecg);
      formData.append('thalach', thalach);
      formData.append('exang', exang);
      formData.append('oldpeak', oldpeak);
      formData.append('slope', slope);
      formData.append('ca', ca);
      formData.append('thal', thal);
      fetch('https://heart--disease--api.herokuapp.com/result', {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(res => {
          setLoading(false);

          if (res.prediction === '1.0') {
            Swal.fire({
              title: name,
              text: "Please consult a doctor immediately! You have heart disease!",
              icon: 'warning',
              confirmButtonText: 'OK'
            })
          } else {
            Swal.fire({
              title: name,
              text: "Don't worry! You don't have any heart disease!",
              icon: 'success',
              confirmButtonText: 'OK'
            })
          }

          document.getElementById('name').value = "";
          document.getElementById('age').value = "";
          document.getElementById('sex').value = "";
          document.getElementById('cp').value = "";
          document.getElementById('trestbps').value = "";
          document.getElementById('chol').value = "";
          document.getElementById('fbs').value = "";
          document.getElementById('rest_ecg').value = "";
          document.getElementById('thalach').value = "";
          document.getElementById('exang').value = "";
          document.getElementById('oldpeak').value = "";
          document.getElementById('slope').value = "";
          document.getElementById('ca').value = "";
          document.getElementById('thal').value = "";
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Information Missing',
        text: 'Please fill all the fields!',
      })
      console.log("Hello");
    }
  }

  return (
    <div>
      <div id="predict" className="container">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h2 className="fw-bold text-warning">Heart Disease Diagnose</h2>
          <hr />
        </div>
        <div className="container bg-transparent border card bg-body shadow-lg rounded pt-3 pb-3 mb-5 text-start">
          <div className="row">
            <div className="col-sm">
              <div className="mb-3">
                <label className="form-label text-left fw-bold text-warning">Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold text-warning">Enter Age</label>
                <input type="text" className="form-control" id="age" name="age" placeholder="Enter your age" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold text-warning">Gender</label>
                <select className="form-select" id="sex" name="gender" aria-label="Default select example"
                  required>
                  <option value="">-- select gender --</option>
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </select>
              </div>
              <div className="mb-3">
                <label
                  className="form-label fw-bold text-warning">Chest Pain</label>
                <select className="form-select" id="cp" name="hypertension"
                  aria-label="Default select example" required>
                  <option value="" >-- select chest pain type --</option>
                  <option value="0">Typical angina pain</option>
                  <option value="1">Atypical angina pain</option>
                  <option value="2">Non-anginal pain</option>
                  <option value="3">Asymptomatic pain</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label text-left fw-bold text-warning">Resting blood pressure</label>
                <input type="text" className="form-control" id="trestbps" name="name" placeholder="Enter resting blood pressure (mm hg)" required />
              </div>
              <div className="mb-3">
                <label className="form-label text-left fw-bold text-warning">Cholesterol (mg/dl)</label>
                <input type="text" className="form-control" id="chol" name="name" placeholder="Enter cholesterol (mg/dl)" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold text-warning">Fasting blood sugar</label>
                <select className="form-select" id="fbs" name="married" aria-label="Default select example"
                  required>
                  <option value="" >--select fasting blood sugar --</option>
                  <option value="0">Less than 120 mg/dl</option>
                  <option value="1">More than 120 mg/dl</option>
                </select>
              </div>
            </div>
            <div className="col-sm">
              <div className="mb-3">
                <label className="form-label fw-bold text-warning">Resting electrographic</label>
                <select className="form-select" id="rest_ecg" name="work" aria-label="Default select example"
                  required>
                  <option value="" >--select resting electrographic--</option>
                  <option value="0">Normal</option>
                  <option value="1">Having ST_T abnormality</option>
                  <option value="2">lv hypertrophy</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold text-warning">Maximum heart rate</label>
                <input type="text" className="form-control" id="thalach" name="name" placeholder="Enter maximum heart rate" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold text-warning">Exercise-induced angina</label>
                <select className="form-select" id="exang" name="work" aria-label="Default select example"
                  required>
                  <option value="" >--select exercise-induced angina--</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold text-warning">Exercise-induced ST depression</label>
                <input type="text" className="form-control" id="oldpeak" name="name" placeholder="Enter exercise-induced ST depression" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold text-warning">Slope of exercise</label>
                <select className="form-select" id="slope" name="work" aria-label="Default select example"
                  required>
                  <option value="" >--select slope of exercise--</option>
                  <option value="0">Upsloping</option>
                  <option value="1">Flat</option>
                  <option value="2">Downsloping</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold text-warning">No. of major vessels [0-3] colored by fluoroscopy</label>
                <input type="text" className="form-control" id="ca" name="name" placeholder="Enter no. of major vessels" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold text-warning">Defect type</label>
                <select className="form-select" id="thal" name="work" aria-label="Default select example"
                  required>
                  <option value="" >--select defect type--</option>
                  <option value="1">Normal</option>
                  <option value="2">Fixed defect</option>
                  <option value="3">Reversible defect</option>
                </select>
              </div>
            </div>
            <div className='text-center'>
              <Button className="btn btn-primary w-75 mt-4" onClick={predictResults}>{loading === true ? "Please wait..." : "Predict Result"}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
