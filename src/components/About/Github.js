import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Mi <strong className="purple">Github</strong>
      </h1>
      <GitHubCalendar
        username="Alfredkin1244"
        blockSize={30}
        blockMargin={10}
        color="rgba(49, 130, 206, 0.3)"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
