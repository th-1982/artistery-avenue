import React from "react";
import Modal from "react-modal";
import styles from "../styles/TermsOfService.module.css";
import btnStyles from "../styles/Button.module.css";
import Button from "react-bootstrap/Button";

// Terms Of Service Structure - Modal
const TermsOfService = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose} // Closes only by clicking the Button
            contentLabel="Terms of Service"
            className={styles["TermsOfService-modal"]}
            shouldCloseOnOverlayClick={false} // Prevents closing on overlay click
            shouldCloseOnEsc={false} // Prevents closing on escape key
        >
            <h2>                
                <i className="fa-solid fa-scale-balanced"></i> Artistery Avenue - Terms of
                Service  
            </h2>
            <p>
                Welcome to Artistery Avenue, a social media platform designed for artists around the world. Please carefully read these Terms of Service before using the Artistry Avenue platform, as they govern your use of our services. By using Artistry Avenue, you agree to abide by these Terms.
            </p>
            <strong>1. Acceptance of Terms</strong>
            <p>
                By accessing or using the Artistery Avenue platform, you agree to be bound by these Terms and any additional terms that may apply to specific features, content, or offerings within the platform. If you are using the platform on behalf of an organization or entity, you represent and warrant that you have the authority to accept these Terms on their behalf.
            </p>
            <strong>2. Privacy Policy</strong>
            <p>
                Your privacy is crucial to us. Our Privacy Policy outlines how we collect, use, and disclose your personal information. By using the Artistry Avenue platform, you consent that your data will be stored securely.
            </p>
            <strong>3. User Content</strong>
            <p>
                You retain ownership of the content you post, share, or upload to the Artistery Avenue platform (&quot;User Content&quot;). However, by posting User Content, you grant Artistry Avenue a non-exclusive, worldwide, royalty-free, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display such User Content in connection with operating and promoting the platform.
            </p>
            <strong>4. Code of Conduct</strong>
            <p>
                You agree to use the Artistery Avenue platform in a manner consistent with applicable laws and regulations and in accordance with these Terms. You shall not:
            </p>
            <ul>
                <li>
                {" "}
                Post, transmit, or share any User Content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.
                </li>
                <li>
                {" "}
                Engage in any activity that could compromise the security or integrity of the platform, its users, or systems.
                </li>
                <li>
                {" "}
                Impersonate any person or entity or falsely represent your affiliation with any person or entity.
                </li>
                <li> Use the platform for any unauthorized or unlawful purpose.</li>
                <li>
                {" "}
                Collect or store personal data about other users without their consent.
                </li>
            </ul>
            <strong>5. Intellectual Property</strong>
            <p>
                The Artistery Avenue platform, including its design, graphics, trademarks, and other content, is protected by intellectual property laws. You agree not to copy, modify, distribute, sell, or lease any part of the platform or its content without prior written consent from Artistry Avenue.
            </p>
            <strong>6. Termination</strong>
            <p>
                Artistery Avenue reserves the right to suspend, terminate, or restrict your account or access to the platform at any time, with or without cause and without notice, if you violate these Terms or engage in activities that could harm the platform or its users.
            </p>
            <strong>7. Disclaimer of Warranties</strong>
            <p>
                The platform is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied. Artistery Avenue disclaims all warranties, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <strong>8. Limitation of Liability</strong>
            <p>
                In no event shall Artistery Avenue be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the platform.
            </p>
            <strong>9. Modifications to Terms</strong>
            <p>
            Artistery Avenue may modify these Terms at any time by posting the revised Terms on the platform. Your continued use of the platform constitutes acceptance of the modified Terms.
            </p>
            <strong>10. Governing Law</strong>
            <p>
                These Terms are governed by and construed in accordance with the law of principles.
            </p>
            <strong>11. Contact Information</strong>
            <p>
                If you have any questions or concerns about these Terms, please {" "}
                <a href="/contact">contact us</a>.
            </p>
            <p>
                Thank you for being part of Artistery Avenue! We look forward to seeing your artistic expressions and connecting with others on our platform.
            </p>
            <div className={btnStyles["button-container"]}>
                <div style={{ textAlign: "center" }}>
                    <Button
                        className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
                        type="button"
                        onClick={onRequestClose}
                    >
                        I didn't just scroll... I read & I agree
                    </Button>
                </div>
            </div>
        </Modal>
    );
};



export default TermsOfService;
