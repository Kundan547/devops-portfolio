import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import styled from 'styled-components';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

const ResumeContainer = styled(Container)`
  min-height: 100vh;
  padding: 2rem 0;
  text-align: center;
  background: white;
`;

const ResumeWrapper = styled.div`
  max-width: 900px;
  margin: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const Resume = () => {
  const resumePdfPath = `${process.env.PUBLIC_URL}/KundanVyas_Resume.pdf`;

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
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl={resumePdfPath} />
        </Worker>
      </ResumeWrapper>
    </ResumeContainer>
  );
};

export default Resume;
