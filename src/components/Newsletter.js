import React from "react";
import { Col, Row } from "react-bootstrap";
import resume from "../assets/resume.pdf";
import { FiDownload } from "react-icons/fi";

export const Newsletter = ({ status, message, onValidated }) => {
  const downloadResume = () => {
    window.open(resume, "_blank");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3 className="resume">Please contact me directly at <a href="mailto:harshdhankecha05@gmail.com">harshdhankecha05@gmail.com</a> or through above form.</h3>
          </Col>
          <Col md={6} xl={7}>
            <div className="new-email-bx">
              <button onClick={downloadResume}>
                <FiDownload /> Download Resume
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
