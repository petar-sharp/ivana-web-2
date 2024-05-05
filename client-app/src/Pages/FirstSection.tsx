import React from 'react';
import { Typography, Row, Col, Image } from 'antd';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

const StyledDiv = styled.div`
    margin: 0 16px;
    @media (min-width: 768px) {
        margin: 0;
    }
`;


const ImageDiv = styled.div`
    margin-top: 64px;
`;

const CenteredDiv = styled.div`
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FirstSection: React.FC = () => {
    return (
        <StyledDiv>
            <Row gutter={16}>
                <Col sm={24} md={12}>
                    <CenteredDiv>
                        <div>
                            <Title level={2}>Ivana Gunjača</Title>
                            <Paragraph>
                                At the University of Split, Assistant Professor Ivana Gunjaca is making notable contributions to the field of genetics.
                                Specializing in molecular genetics, her research focuses on the genetic mechanisms underlying hereditary diseases.
                                Utilizing advanced gene editing and sequencing technologies, she explores the complex gene interactions that lead to specific diseases.
                                Ivana is also committed to mentoring students in genetic research techniques, significantly enriching the academic community at the University of Split.
                            </Paragraph>
                        </div>
                    </CenteredDiv>
                </Col>
                <Col sm={24} md={12}>
                    <CenteredDiv>
                        <ImageDiv>
                            <Image src="../assets/ilustration.png" alt="Illustration" style={{ maxWidth: '250px' }} />
                        </ImageDiv>
                    </CenteredDiv>
                </Col>
            </Row>
        </StyledDiv>
    );
};

export default FirstSection;