import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Copy, Check } from "react-bootstrap-icons";

export const ContactEmail = () => {
    const [copied, setCopied] = useState(false);
    const email = "dennayed@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp email-copy-bx" id="email-section">
                <Row className="align-items-center">
                    <Col lg={12} md={12} xl={6}>
                        <h3>Ready to collaborate?<br></br> Copy my email address below</h3>
                    </Col>
                    <Col md={12} xl={6}>
                        <div className="new-email-bx copy-box" onClick={copyToClipboard}>
                            <input value={email} readOnly />
                            <button type="button">
                                {copied ? <Check size={25} color="#fff" /> : <Copy size={20} color="#fff" />}
                                <span>{copied ? "Copied!" : "Copy Email"}</span>
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};
