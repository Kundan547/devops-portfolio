import React from 'react';
import styled from 'styled-components';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

const ResumeContainer = styled(Container)`
  min-height: 100vh;
  padding: 2rem 0;
  text-align: center;
`;

const ResumeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ResumeFrame = styled.iframe`
  width: 60%;                /* A4-like width */
  height: 90vh;
  border: none;
  background: white;         /* Remove black background */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin: auto;
  border-radius: 8px;        /* Optional rounded corners */
  
  @media (max-width: 768px) {
    width: 95%;              /* Full width on mobile */
    height: 80vh;
  }
`;

const Resume = () => {
  const resumePdfPath = `${process.env.PUBLIC_URL}/KundanVyas_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0`;

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

      <ResumeWrapper>
        <ResumeFrame src={resumePdfPath} title="Kundan Vyas Resume" />
      </ResumeWrapper>
    </ResumeContainer>
  );
};

export default Resume;
