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
  align-items: center;
`;

const ResumeImage = styled.img`
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: calc(100vh - 200px); /* Keeps it A4 size */
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  border: 1px solid #ddd;
`;

const Resume = () => {
  const resumePdfPath = `${process.env.PUBLIC_URL}/KundanVyas_Resume.pdf`;
  const resumeImagePath = `${process.env.PUBLIC_URL}/KundanVyas_Resume.png`; 
  // Make sure PNG version of resume exists in /public

  return (
    <ResumeContainer fluid>
      <Row className="mb-3">
        <Col>
          <Button
            href={resumePdfPath}
            download="KundanVyas_Resume.pdf"
            variant="primary"
            size="lg"
          >
            <FaDownload className="me-2" /> Download Resume
          </Button>
        </Col>
      </Row>

      <ResumeWrapper>
        <ResumeImage src={resumeImagePath} alt="Kundan Vyas Resume" />
      </ResumeWrapper>
    </ResumeContainer>
  );
};

export default Resume;
