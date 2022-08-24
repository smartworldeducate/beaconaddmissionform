import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="form-header">
          <ul className="d-flex">
            <li className="px-3">Student Info</li>
            <li>Parant Info</li>
          </ul>
        </div>
      </div>
      <div className="row content my-3">
        <div className="startform">
          <div className="stp1form">step1</div>
          <div className="step1code">
            <form className="form-group">
              <div className="">
                <label className="setlabel">student name</label>
                <input
                  type="text"
                  className="form-controle"
                  placeholder="student name"
                />
              </div>

              <div className="">
              <label className="setlabel">select class</label>
                <select className="selectopt">
                  <option selected disabled>
                    --Select City--
                  </option>

                  <option>New Delhi</option>
                  <option>Kolkata</option>
                  <option>Mumbai</option>
                  <option>Chennai</option>
                </select>
              </div>
              <div className="radiobtn py-2">
              <label className="gendermale">select gender</label><br></br>
                  <input type="radio" name="gender" id="male" />
                  <label htmlFor="male">Male</label>
                  <input type="radio" name="gender" id="female" />
                  <label htmlFor="female">Female</label>
                
              </div>
            </form>
          </div>
        </div>

        <div className="startform">
          <div className="stp2form">step2</div>
          <div className="step1code">
            <form className="form-group">
            <div className="">
              <label className="setlabel">select city</label>
                <select className="selectopt">
                  <option selected disabled>
                    --Select City--
                  </option>

                  <option>New Delhi</option>
                  <option>Kolkata</option>
                  <option>Mumbai</option>
                  <option>Chennai</option>
                </select>
              </div>

              <div className="">
              <label className="setlabel">select area</label>
                <select className="selectopt">
                  <option selected disabled>
                    --Select area--
                  </option>

                  <option>New Delhi</option>
                  <option>Kolkata</option>
                  <option>Mumbai</option>
                  <option>Chennai</option>
                </select>
              </div>

            </form>
          </div>
        </div>



        <div className="startform">
          <div className="stp2form">step3</div>
          <div className="step1code">
            <form className="form-group">
            <div className="">
              <label className="setlabel">select city</label>
                <select className="selectopt">
                  <option selected disabled>
                    --Select City--
                  </option>

                  <option>New Delhi</option>
                  <option>Kolkata</option>
                  <option>Mumbai</option>
                  <option>Chennai</option>
                </select>
              </div>

              <div className="">
              <label className="setlabel">select area</label>
                <select className="selectopt">
                  <option selected disabled>
                    --Select area--
                  </option>

                  <option>New Delhi</option>
                  <option>Kolkata</option>
                  <option>Mumbai</option>
                  <option>Chennai</option>
                </select>
              </div>

            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="form-header">
          <div className="fornfooter">
            
            <button>continue</button>
            </div>
            
          
        </div>
      </div>
    </div>
  );
};

export default Form;
