import React, { useRef, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { Container, Grid2 as Grid } from "@mui/material";

import cx from "classnames";

import { Heading, Animate } from "@/components/common";
import { StarGradiantIcon } from "@/components/Icons";

import * as styles from "./PrivacyPolicy.module.scss";

const privacyPolicyVideo = "https://beige-oyster-766501.hostingersite.com/glocal-studio/privacy-policy.mp4";
function PrivacyPolicy() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5; // keep it slow
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>Privacy Policy | Glocal Studio</title>
                <meta name="description" content="Privacy Policy of Glocal Studio. Outlines our practices in relation to the collection, storage, usage, processing, and disclosure of personal data." />
            </Helmet>
            <section className={styles.masterHead}>
                <div className={styles.videoWrapper}>
                    <video
                        ref={videoRef}
                        muted
                        autoPlay
                        controls={false}
                        loop
                        playsInline
                        className={styles.masterHeadVideo}
                        // poster={require("../assets/images/privacy-policy-bg.png")}
                    >
                        <source src={privacyPolicyVideo} type="video/mp4" />
                    </video>
                </div>
                <Container maxWidth="xl" className={styles.mainContainer}>
                    <Grid
                        size={12}
                        container
                        className={cx(styles.masterHeadInfoSection, styles.textCenter)}
                        spacing={{ xs: 1, md: 4 }}
                    >
                        <Animate.ScaleIn
                            element={Grid}
                            elementProps={{
                                size: 12,
                                justifyContent: "center",
                            }}
                        >
                            <StarGradiantIcon width="40px" height="47px" />
                        </Animate.ScaleIn>
                        <Animate.FadeUp
                            element={Grid}
                            elementProps={{
                                size: 12,
                            }}
                            className={styles.acturalVisualizationHeading}
                            direction="down"
                        >
                            LEGAL INFORMATION
                        </Animate.FadeUp>
                        <Grid size={12} mb={{ xs: 2, md: 0 }}>
                            <Heading className={cx(styles.masterHeadingHeading, styles.extraLightText)}>GLOCAL STUDIO</Heading>
                            <Heading className={styles.masterHeadingHeading}>PRIVACY POLICY</Heading>
                        </Grid>
                        <Animate.FadeUp
                            element={Grid}
                            elementProps={{
                                mb: { xs: 2, md: 0 },
                                size: { xs: 12, md: 8 },
                                offset: { xs: 0, md: 2 },
                            }}
                            className={cx(styles.masterHeadText, styles.textWhite)}
                        >
                            We are committed to protecting your personal data with the same precision and care that we bring to our work.
                        </Animate.FadeUp>
                    </Grid>
                </Container>
            </section>
            <section className={styles.pageContainer}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid size={12} className={styles.contentBlock}>
                            <p className={styles.textParagraph}>
                                <strong>Glocal Studio</strong><br />
                                Glocal Studio and its affiliates (collectively, “Glocal Studio”, “we”, “our” or “us”) operate in the business of 3D visualization, architectural rendering, product visualization, immersive experiences (including VR/AR), design consultation, and related creative and technical services, as further described in our Terms and Conditions (“Terms”).
                            </p>
                            <p className={styles.textParagraph}>
                                This Privacy Policy outlines our practices in relation to the collection, storage, usage, processing, and disclosure of personal data that you choose to share with us when you:
                            </p>
                            <ul className={styles.bulletList}>
                                <li>Visit our website,</li>
                                <li>Submit an enquiry or request a consultation,</li>
                                <li>Engage us for visualization or design services,</li>
                                <li>Collaborate with us as a designer, architect, consultant, vendor, or partner, or</li>
                                <li>Otherwise, interact with us in connection with our services (collectively, the “Services”).</li>
                            </ul>
                            <p className={styles.textParagraph}>
                                Glocal Studio specializes in transforming ideas into photorealistic visuals and immersive experiences, enabling clients to see and experience their projects before execution.
                            </p>
                            <p className={styles.textParagraph}>
                                We are committed to protecting your personal data with the same precision and care that we bring to our work.
                            </p>
                            <p className={styles.textParagraph}>
                                By accessing our website or engaging our Services, you confirm that you have read and agreed to this Policy and consent to the processing activities described herein.
                            </p>

                            <h2 className={styles.sectionTitle}>1. BACKGROUND AND KEY INFORMATION</h2>
                            <p className={styles.textParagraph}><strong>(a) About Us</strong><br />
                                The Services are made available to you by Glocal Studio.<br />
                                If you have any questions about this Policy or wish to raise a concern, you may contact us at:<br />
                                Email: info@glocalstudio.in<br />
                                Grievance Officer:<br />
                                Name: [Insert Name]<br />
                                Designation: Grievance Officer<br />
                                Email: info@glocalstudio.in
                            </p>

                            <p className={styles.textParagraph}><strong>(b) How this Policy Applies</strong><br />
                                This Policy applies to:</p>
                            <ul className={styles.bulletList}>
                                <li>Website visitors</li>
                                <li>Prospective and existing clients (architects, developers, brands, individuals)</li>
                                <li>Designers, consultants, contractors, and collaborators</li>
                            </ul>
                            <p className={styles.textParagraph}>
                                References to “you” include all such individuals.<br />
                                By engaging with Glocal Studio, you consent to the collection, storage, and processing of your personal data in accordance with this Policy.
                            </p>

                            <p className={styles.textParagraph}><strong>(c) Third-Party Links</strong><br />
                                Our website may contain links to third-party platforms. We do not control their privacy practices and recommend reviewing their policies before sharing your data.
                            </p>

                            <h2 className={styles.sectionTitle}>2. PERSONAL DATA THAT WE COLLECT</h2>
                            <p className={styles.textParagraph}>We collect personal data necessary to deliver high-quality visualization and design services.</p>

                            <p className={styles.textParagraph}><strong>(a) If You Are a Client or Prospective Client</strong><br />
                                We may collect:</p>
                            <ul className={styles.bulletList}>
                                <li><strong>Contact Data:</strong> Name, email address, phone number, company name, address.</li>
                                <li><strong>Project &amp; Design Data:</strong> Architectural plans, layouts, CAD files, 3D models, product specifications, references, mood boards, materials, lighting preferences, and creative briefs.</li>
                                <li><strong>Visualization Data:</strong> Render requirements, animation briefs, VR/AR specifications, walkthrough inputs, and presentation formats.</li>
                                <li><strong>Identity &amp; Profile Data:</strong> Professional details, design preferences, brand guidelines (if applicable).</li>
                                <li><strong>Marketing &amp; Communications Data:</strong> Enquiries, feedback, testimonials (if provided), and communication records.</li>
                                <li><strong>Technical Data:</strong> IP address, device type, browser type, access logs, and website interaction data.</li>
                                <li><strong>Transaction Data:</strong> Invoices, billing details, and payment confirmations processed through authorised channels.</li>
                            </ul>

                            <p className={styles.textParagraph}><strong>(b) If You Are a Designer, Consultant, or Vendor</strong><br />
                                We may collect:</p>
                            <ul className={styles.bulletList}>
                                <li><strong>Contact Data:</strong> Name, email, phone number, address.</li>
                                <li><strong>Professional Data:</strong> Portfolio, work experience, project samples, certifications, and technical expertise.</li>
                                <li><strong>Financial &amp; Compliance Data:</strong> Bank details, tax/GST information, contracts, and agreements.</li>
                                <li><strong>Operational Data:</strong> Project contributions, communication records, workflow data, and deliverables.</li>
                                <li><strong>Technical Data:</strong> System access logs, IP address, and usage data.</li>
                            </ul>

                            <p className={styles.textParagraph}><strong>(c) Aggregated Data</strong><br />
                                We may process anonymised or aggregated data for analytics, research, and service improvement. This data does not identify individuals.
                            </p>

                            <p className={styles.textParagraph}><strong>(d) If You Choose Not to Provide Data</strong><br />
                                If required data is not provided, we may be unable to deliver certain services or proceed with a project.
                            </p>

                            <h2 className={styles.sectionTitle}>3. HOW WE COLLECT PERSONAL DATA</h2>
                            <p className={styles.textParagraph}>We collect personal data through:</p>
                            <p className={styles.textParagraph}><strong>(a) Direct Interactions</strong><br />
                                When you:</p>
                            <ul className={styles.bulletList}>
                                <li>Submit enquiry or consultation forms</li>
                                <li>Share project files and design briefs</li>
                                <li>Engage us for rendering or visualization services</li>
                                <li>Communicate via email, calls, or meetings</li>
                                <li>Provide feedback or testimonials</li>
                            </ul>

                            <p className={styles.textParagraph}><strong>(b) Automated Technologies</strong><br />
                                Through cookies, analytics tools, and server logs when you interact with our website.</p>

                            <p className={styles.textParagraph}><strong>(c) Third Parties</strong><br />
                                We may receive data from:</p>
                            <ul className={styles.bulletList}>
                                <li>Clients and collaborators</li>
                                <li>Design teams, architects, or agencies</li>
                                <li>Payment processors</li>
                                <li>Business partners</li>
                                <li>Public or licensed design resources</li>
                            </ul>

                            <h2 className={styles.sectionTitle}>4. HOW WE USE YOUR PERSONAL DATA</h2>
                            <p className={styles.textParagraph}>We use personal data only where permitted by law.<br />We may use your data to:</p>
                            <ul className={styles.bulletList}>
                                <li>Deliver 3D visualization, rendering, and immersive experiences</li>
                                <li>Interpret and translate design concepts into visual outputs</li>
                                <li>Manage project workflows and timelines</li>
                                <li>Collaborate with designers, architects, and stakeholders</li>
                                <li>Improve creative quality and technical accuracy</li>
                                <li>Develop new visualization capabilities and services</li>
                                <li>Maintain communication throughout the project lifecycle</li>
                                <li>Process payments and maintain financial records</li>
                                <li>Ensure data security and prevent misuse</li>
                                <li>Comply with legal and contractual obligations</li>
                            </ul>
                            <p className={styles.textParagraph}>We may share necessary data with internal teams and trusted collaborators strictly for project execution.</p>

                            <h2 className={styles.sectionTitle}>5. COOKIES</h2>
                            <p className={styles.textParagraph}>We use cookies to enhance website functionality, analyse user behaviour, and improve user experience. Further details may be outlined in a separate Cookie Policy.</p>

                            <h2 className={styles.sectionTitle}>6. DISCLOSURE OF PERSONAL DATA</h2>
                            <p className={styles.textParagraph}>We may share personal data with:</p>
                            <ul className={styles.bulletList}>
                                <li>Internal teams and affiliates</li>
                                <li>Designers, visualization experts, and collaborators</li>
                                <li>Technology providers (rendering tools, storage, collaboration platforms)</li>
                                <li>Payment processors</li>
                                <li>Analytics providers</li>
                                <li>Legal and financial advisors</li>
                                <li>Regulatory authorities (if required by law)</li>
                            </ul>
                            <p className={styles.textParagraph}>All third parties are required to maintain confidentiality and appropriate security standards.</p>

                            <h2 className={styles.sectionTitle}>7. ACCESS AND CORRECTION</h2>
                            <p className={styles.textParagraph}>You confirm that the data you provide is accurate and up to date. You may request access to or correction of your personal data, subject to applicable laws.</p>

                            <h2 className={styles.sectionTitle}>8. TRANSFERS OF PERSONAL DATA</h2>
                            <p className={styles.textParagraph}>As a global-facing visualization studio, your data may be processed across different locations where our teams or infrastructure operate.<br />
                                By engaging with us, you consent to such transfers in accordance with applicable laws.</p>

                            <h2 className={styles.sectionTitle}>9. DATA SECURITY</h2>
                            <p className={styles.textParagraph}>We implement appropriate technical and organisational measures to protect personal data from unauthorised access, loss, misuse, or alteration.</p>

                            <h2 className={styles.sectionTitle}>10. DATA RETENTION</h2>
                            <p className={styles.textParagraph}>We retain personal data only as long as necessary to:</p>
                            <ul className={styles.bulletList}>
                                <li>Deliver services</li>
                                <li>Fulfil contractual obligations</li>
                                <li>Comply with legal requirements</li>
                                <li>Resolve disputes</li>
                            </ul>
                            <p className={styles.textParagraph}>Anonymised data may be retained for analytics and improvement purposes.</p>

                            <h2 className={styles.sectionTitle}>11. BUSINESS TRANSITIONS</h2>
                            <p className={styles.textParagraph}>In the event of a merger, acquisition, or restructuring, personal data may be transferred as part of business assets.</p>

                            <h2 className={styles.sectionTitle}>12. OPT-OUT</h2>
                            <p className={styles.textParagraph}>To opt out of marketing communications, contact:<br />
                                info@glocalstudio.in<br />
                                We will process your request within a reasonable timeframe.</p>

                            <h2 className={styles.sectionTitle}>13. UPDATES TO THIS POLICY</h2>
                            <p className={styles.textParagraph}>We may update this Policy periodically. Updates will be published on our website. Continued use of our Services constitutes acceptance of the revised Policy.</p>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
}

export default PrivacyPolicy;
