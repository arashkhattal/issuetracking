import { React, useState } from "react";
import "./issue.css";
import Searchapp from "./Searchapp";
import ClippedDrawer from "./Draw";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function BasicTextFields() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  const [btn, setBtn] = useState(true);
  const handleChange = (e) => {
    if (e.target.value.length === "") {
      setBtn(false);
    }
  };
  const handleReset = (e) => {};
  return (
    <>
      <Searchapp />
      <ClippedDrawer />
      <div className="tile">
        <div>
          <h2>Create User Stories / Tasks / Bugs</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label class="control-label">Summary</label>
              <input
                class="form-control"
                type="text"
                placeholder="Add Summary "
                {...register("summary", {
                  required: {
                    value: true,
                    message: "summary is required",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximum allowed length is 20 characters ",
                  },
                  pattern: {
                    value: /[a-zA-Z]+/,
                    message: "Please enter only alphabets",
                  },
                })}
              />
              <div>
                {errors.summary && (
                  <span className="red">{errors.summary.message}</span>
                )}
              </div>
            </div>

            <div class="form-group col-md-6">
              <label class="control-label">Type</label>
              <select name="cars" id="cars" class="form-control">
                <option value="volvo">Select</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label class="control-label">Project</label>
              <select name="cars" id="cars" class="form-control">
                <option value="volvo">Select</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div class="form-group col-md-12">
              <label class="control-label">Description</label>
              <textarea
                class="form-control"
                type="text"
                placeholder="Description"
                {...register("desc", {
                  required: {
                    value: true,
                    message: "Company name is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Please enter your company name",
                  },
                  maxLength: {
                    value: 500,
                    message: "Maximum allowed length is 500 characters ",
                  },
                  pattern: {
                    value: /[a-zA-Z]+/,
                    message: "Please enter only alphabets",
                  },
                })}
              />
              {errors.desc && (
                <span className="red">{errors.desc.message}</span>
              )}
            </div>
            <div class="form-group col-md-6">
              <label class="control-label">Priority</label>
              <select name="cars" id="cars" class="form-control">
                <option value="volvo">Select</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label class="control-label">Asignee</label>
              <select name="cars" id="cars" class="form-control">
                <option value="volvo">Select</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label class="control-label">Tags</label>
              <input
                class="form-control"
                type="text"
                placeholder="Add Summary "
                {...register("tag", {
                  required: {
                    value: true,
                    message: "summary is required",
                  },
                  maxLength: {
                    value: 100,
                    message: "Maximum allowed length is 100 characters ",
                  },
                  pattern: {
                    value: /[a-zA-Z]+/,
                    message: "Please enter only alphabets",
                  },
                })}
              />
              <div>
                {errors.tag && (
                  <span className="red">{errors.tag.message}</span>
                )}
              </div>
            </div>
            <div class="form-group col-md-6">
              <label class="control-label">Sprint</label>
              <select name="cars" id="cars" class="form-control">
                <option value="volvo">Select</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label class="control-label">Story Points</label>
              <input
                class="form-control"
                type="text"
                placeholder="0,1,2.."
                {...register("sp", {
                  required: {
                    value: true,
                    message: "story point is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Please enter your company name",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximum allowed length is 20 characters ",
                  },
                  pattern: {
                    value: /[0-9]+/,
                    message: "Please enter only numbers",
                  },
                })}
              />
              {errors.sp && <span className="red">{errors.sp.message}</span>}
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="reset"
              class="btn btn-secondary"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={() => navigate("/")}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
