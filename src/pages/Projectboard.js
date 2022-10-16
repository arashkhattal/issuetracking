import { React, useState } from "react";
import Searchapp from "./Searchapp";
import ClippedDrawer from "./Draw";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./issue.css";
import Grid from "@mui/material/Grid";
import Task from "./tasklist";

function Projectboard() {
  const [item, setItem] = useState(Task);
  const filteritem = (catitem) => {
    const updateitems = Task.filter((curelem) => {
      return curelem.priority === catitem;
    });
    setItem(updateitems);
  };
  const filtername = (catitem) => {
    const updateitems = Task.filter((curelem) => {
      return curelem.head === catitem;
    });
    setItem(updateitems);
  };
  return (
    <>
      <Searchapp />
      <ClippedDrawer />
      <div className="tile-grid">
        <div className="box-card">
          <h1>Project Board</h1>
        </div>
        <div className="filterbox">
        <div className="filter">
          <p className="pbtn">Priority : &nbsp;</p>
          <Button variant="outline-dark" onClick={() => setItem(Task)}>
            All 
          </Button>
          <Button
            variant="outline-dark"
            className="high"
            onClick={() => filteritem("high")}
          >
            High
          </Button>
          <Button
            variant="outline-dark"
            className="low"
            onClick={() => filteritem("low")}
          >
            Low
          </Button>
        </div>
        <div className="filterassign">
          <p className="pbtn">Asignee : &nbsp;</p>
          <Button  className="nname" variant="outline-dark" onClick={() => setItem(Task)}>
            All
          </Button>
          <Button
            variant="outline-dark"
            className="nname"
            onClick={() => filtername("John")}
          >
            John
          </Button>
          <Button
            variant="outline-dark"
            className="nname"
            onClick={() => filtername("Roy")}
          >
            Roy
          </Button>
          <Button
            variant="outline-dark"
            className="nname"
            onClick={() => filtername("Folk")}
          >
            Folk
          </Button>
        </div>
        &nbsp;
        </div>
          <Grid container spacing={-30}>
          {item.map((elem) => {
            const { id, priority, text, head } = elem;
            return (
              <Grid item xs={3}>
                <Card className="side" style={{ width: "15rem" }}>
                  <Card.Body>
                    <Card.Title>{head}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    ID:{id}{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Priority:&nbsp;&nbsp;
                    <Button variant="outline-dark">{priority}</Button>{" "}
                  </Card.Body>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default Projectboard;
