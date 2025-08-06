import React from 'react';
import styled from 'styled-components';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

const ResumeContainer = styled(Container)`
  min-height: 100vh;
  padding: 2rem 0;
  text-align: center;
`;

const ResumeFrame = styled.iframe`
  width: 100%;
  height: 100vh;
  border: none;
`;

const Resume = () => {
  // Hide toolbar, sidebar, and scrollbars from PDF viewer
  const resumePath = `${process.env.PUBLIC_URL}/KundanVyas_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0`;

  return (
    <ResumeContainer fluid>
      <Row className="mb-3">
        <Col>
          <Button
            href={`${process.env.PUBLIC_URL}/KundanVyas_Resume.pdf`}
            download="KundanVyas_Resume.pdf"
            variant="primary"
            size="lg"
          >
            <FaDownload className="me-2" /> Download Resume
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <ResumeFrame src={resumePath} title="Kundan Vyas Resume" />
        </Col>
      </Row>
    </ResumeContainer>
  );
};

export default Resume;
