import React from "react";
import {Fade} from "react-awesome-reveal";
import { Col, Row } from "antd";
import gapstackLogo from "../../../assets/gapStackLogo.svg";
import {MdCopyright} from "react-icons/md";
import styled from "styled-components";
import { style } from "./styles";

const FooterWrapper = styled.div`
  ${style}
`;

const Footer = ({ scrollToSolutions, scrollToContactForm }) => {
    return (
        <FooterWrapper>
            <Fade triggerOnce={true} fraction={0.3}>
                <Row className="container">
                    <Col xs={{ span:22, offset:2 }}
                         sm={{ span:22, offset:2 }}
                         md={{ span:22, offset:2 }}
                         lg={{ span:20, offset:4 }}
                         xl={{ span:20, offset:4 }}>
                        <Row gutter={[16, 32]}>
                            <Col xs={24} sm={12} md={12} lg={6} xl={6} className="item">
                                <Row style={{ marginBottom: 10 }}>
                                    <img height={40} src={gapstackLogo} alt='alternate'/>
                                </Row>

                                <Row>
                                    <p className="tag">Automate. Fund. Network.</p>
                                </Row>
                            </Col>

                            <Col xs={24} sm={12} md={12} lg={6} xl={6} className="item">
                                <p className="title">Kenya</p>
                                <p className="text">NAIROBI – HEAD OFFICE</p>
                                <p className="text">Kirichwa Rd, Nairobi</p>
                                <p className="text">P.O. Box 19400 Nairobi, Kenya</p>
                                <p className="text">(+254) 0717 663 681</p>
                                <p className="email-link">info@gapstack.com</p>
                            </Col>

                            <Col xs={24} sm={12} md={12} lg={6} xl={6} className="item">
                                <p className="title">USA</p>
                                <p className="text">SAN FRANCISCO</p>
                                <p className="text">39 East 8th St.</p>
                                <p className="text"> San Francisco, CA 94110</p>
                            </Col>

                            <Col xs={24} sm={12} md={12} lg={6} xl={6} className="item">
                                <p className="title">India</p>
                                <p className="text">NEW DELHI</p>
                                <p className="text">Gwalior, M.P</p>
                                <p className="text">Pincode 474009 </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="footer-bottom" >
                    <Col xs={{ span:22, offset:2 }}
                         sm={{ span:22, offset:2 }}
                         md={{ span:22, offset:2 }}
                         lg={{ span:20, offset:4 }}
                         xl={{ span:20, offset:4 }} style={{ display: 'flex', alignItems: 'center' }}>
                        <p><MdCopyright /> Gapstack 2020. All Right Reserved</p>
                    </Col>
                </Row>
            </Fade>
        </FooterWrapper>
    );
}

export default Footer;