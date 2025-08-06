import React from 'react';
import styled from 'styled-components';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

const ResumeContainer = styled(Container)`
  min-height: 100vh;
  padding: 2rem 0;
  text-align: center;
`;

const ResumeImage = styled.img`
  width: 100%;
  max-width: 900px;
  height: auto;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
`;

const Resume = () => {
  const resumePdfPath = `${process.env.PUBLIC_URL}/KundanVyas_Resume.pdf`;
  const resumeImagePath = `${process.env.PUBLIC_URL}/KundanVyas_Resume.png`; 
  // Make sure to add the PNG export of your resume to public folder

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

      <Row>
        <Col>
          <ResumeImage src={resumeImagePath} alt="Kundan Vyas Resume" />
        </Col>
      </Row>
    </ResumeContainer>
  );
};

export default Resume;
