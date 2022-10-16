import * as React from "react";
import ClippedDrawer from "./Draw";
import "./issue.css";
import Searchapp from "./Searchapp";
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

  return (
    <>
      <Searchapp />
      <ClippedDrawer />
      <div className="tile">
        <div>
          <h2>Create Project</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-row">
            <div className="form-group col-md-6">
              <label className="control-label">Project Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Project Name"
                {...register("pn", {
                  required: {
                    value: true,
                    message: "Project Name is required",
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
                {errors.pn && <span className="red">{errors.pn.message}</span>}
              </div>
            </div>
            <div className="form-group col-md-6">
              <label className="control-label">Owner</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter last name"
                {...register("owner", {
                  required: {
                    value: true,
                    message: "Owner Name is required",
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
                {errors.owner && (
                  <span className="red">{errors.owner.message}</span>
                )}
              </div>
            </div>
            <div className="form-group col-md-6">
              <label className="control-label">Project Start Date</label>
              <input
                className="form-control"
                type="date"
                placeholder="MM/DD/YYYY"
                {...register("date", {
                  required: {
                    value: true,
                    message: "Please select date",
                  },
                })}
              />
              <div>
                {errors.date && (
                  <span className="red">{errors.date.message}</span>
                )}
              </div>
            </div>
            <div className="form-group col-md-6">
              <label className="control-label">Project End Date</label>
              <input
                className="form-control"
                type="date"
                placeholder="MM/DD/YYYY"
                {...register("date", {
                  required: {
                    value: true,
                    message: "Please select date",
                  },
                })}
              />
              <div>
                {errors.date && (
                  <span className="red">{errors.date.message}</span>
                )}
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="reset" class="btn btn-secondary">
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
