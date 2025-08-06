import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import styled from 'styled-components';

const ResumeContainer = styled(Container)`
  min-height: 100vh;
  padding: 2rem 0;
  text-align: center;
  background: white;
`;

const ResumeWrapper = styled.div`
  display: flex;
  justify-content: center;
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
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
          <Viewer fileUrl={resumePdfPath} />
        </Worker>
      </ResumeWrapper>
    </ResumeContainer>
  );
};

export default Resume;
