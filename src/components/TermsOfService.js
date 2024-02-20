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
        <i className="fa-solid fa-scale-balanced"></i> Connect - Terms of
        Service
      </h2>
      <p>
        Welcome to Connect, a social media platform that connects people from
        all around the world. Please read these Terms of Service carefully
        before using the Connect app, as they govern your use of our services.
        By using the Connect app, you agree to these Terms.
      </p>
      <strong>1. Acceptance of Terms</strong>
      <p>
        By accessing or using the Connect app, you agree to be bound by these
        Terms and any additional terms that may apply to specific features,
        content, or offerings within the App. If you are using the App on behalf
        of an organization or entity, you represent and warrant that you have
        the authority to accept these Terms on their behalf.
      </p>
      <strong>2. Privacy Policy</strong>
      <p>
        Your privacy is important to us. Our Privacy Policy outlines how we
        collect, use, and disclose your personal information. By using the App,
        you consent that your data will be stored in Cloudinary.
      </p>
      <strong>3. User Content</strong>
      <p>
        You retain ownership of the content you post, share, or upload to the
        App ("User Content"). However, by posting User Content, you grant
        Connect a non-exclusive, worldwide, royalty-free, sublicensable, and
        transferable license to use, reproduce, modify, adapt, publish,
        translate, create derivative works from, distribute, perform, and
        display such User Content in connection with operating and promoting the
        App.
      </p>
      <strong>4. Code of Conduct</strong>
      <p>
        You agree to use the App in a manner consistent with applicable laws and
        regulations and in accordance with these Terms. You shall not:
      </p>
      <ul>
        <li>
          {" "}
          Post, transmit, or share any User Content that is unlawful, harmful,
          threatening, abusive, harassing, defamatory, vulgar, obscene, or
          otherwise objectionable.
        </li>
        <li>
          {" "}
          Engage in any activity that could compromise the security or integrity
          of the App, its users, or systems.
        </li>
        <li>
          {" "}
          Impersonate any person or entity or falsely represent your affiliation
          with any person or entity.
        </li>
        <li> Use the App for any unauthorized or unlawful purpose.</li>
        <li>
          {" "}
          Collect or store personal data about other users without their
          consent.
        </li>
      </ul>
      <strong>5. Intellectual Property</strong>
      <p>
        The Connect app, including its design, graphics, trademarks, and other
        content, are protected by intellectual property laws. You agree not to
        copy, modify, distribute, sell, or lease any part of the App or its
        content without prior written consent from Connect.
      </p>
      <strong>6. Termination</strong>
      <p>
        Connect reserves the right to suspend, terminate, or restrict your
        account or access to the App at any time, with or without cause and
        without notice, if you violate these Terms or engage in activities that
        could harm the App or its users.
      </p>
      <strong>7. Disclaimer of Warranties</strong>
      <p>
        The App is provided "as is" and "as available" without warranties of any
        kind, whether express or implied. Connect disclaims all warranties,
        including, but not limited to, the implied warranties of
        merchantability, fitness for a particular purpose, and non-infringement.
      </p>
      <strong>8. Limitation of Liability</strong>
      <p>
        In no event shall Connect be liable for any indirect, incidental,
        special, consequential, or punitive damages, or any loss of profits or
        revenues, whether incurred directly or indirectly, or any loss of data,
        use, goodwill, or other intangible losses resulting from your use of the
        App.
      </p>
      <strong>9. Modifications to Terms</strong>
      <p>
        Connect may modify these Terms at any time by posting the revised Terms
        on the App. Your continued use of the App constitutes acceptance of the
        modified Terms.
      </p>
      <strong>10. Governing Law</strong>
      <p>
        These Terms are governed by and construed in accordance with the law of
        principles.
      </p>
      <strong>11. Contact Information</strong>
      <p>
        If you have any questions or concerns about these Terms, please{" "}
        <a href="/contact">contact us</a>.
      </p>
      <p>
        Thank you for using Connect! We hope you enjoy connecting with others on
        our platform.
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