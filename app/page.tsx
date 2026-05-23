import React from 'react';
import styles from './page.module.css';

// TODO: Replace with your actual receiving email
const contactEmail = "yoavgrinberg1@gmail.com"; 

// Pre-formatted email templates
const mypSubject = encodeURIComponent("Registration Request: MYP5 Math Prep Course");
const mypBody = encodeURIComponent(`Hello,

I would like to register my child for the MYP5 Math Prep Course (€50). Here are our details:

Parent/Guardian Name: 
Student Name: 
Contact Phone Number: 
Current School/Grade: 
Any specific math concerns?: 

Thank you,
`);

const dpSubject = encodeURIComponent("Registration Request: DP/CP1 Math Prep Course");
const dpBody = encodeURIComponent(`Hello,

I would like to register my child for the DP/CP1 Math Prep Course. Here are our details:

Parent/Guardian Name: 
Student Name: 
Contact Phone Number: 
Current School: 

Please indicate your preference (Keep one, delete the other):
[ ] 3-Day Refresher + DP Prep Course (€100)
[ ] 2-Day DP Prep Course (€75)

Thank you,
`);

export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <a href="#" className={styles.navLogo}>Score<span>Sprint</span></a>
        <div className={styles.navLinks}>
          <a href="#approach" className={styles.navLink}>Our Approach</a>
          <a href="#programs" className={styles.navLink}>Levels</a>
          <a href="#schedule" className={styles.navLink}>Schedule</a>
          <a href="#programs" className={styles.navButton}>Register Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className={styles.hero}>
        <h1 className={`${styles.heroTitle} ${styles.serif}`}>
          Master Math <span className={styles.heroTitleHighlight}>Before</span> the Year Begins.
        </h1>
        <p className={styles.heroSubtitle}>
          A definitive, logical head-start in Mathematics for incoming MYP5 and DP/CP1 students. Build true confidence, master concepts, and gain an edge before the term starts.
        </p>
        <div className={styles.heroButtons}>
          <a href="#programs" className={styles.primaryButton}>View Course Levels</a>
          <a href="#programs" className={styles.secondaryButton}>Register for Bootcamp</a>
        </div>
      </header>

      {/* Trust / Approach Section */}
      <section id="approach" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.serif}`}>Thrive in IB Math.</h2>
          <p className={styles.sectionSubtitle}>
            Our intensive approach goes beyond memorization to ensure students actually understand the underlying logic of the curriculum.
          </p>
        </div>

        <div className={styles.trustGrid}>
          <div className={styles.trustCard}>
            <h3 className={styles.serif}>Targeted Curriculum</h3>
            <p>We rigorously focus on the precise concepts required for the MYP and DP syllabus, eliminating fluff and focusing strictly on academic fundamentals.</p>
          </div>
          <div className={styles.trustCard}>
            <h3 className={styles.serif}>Understanding-First</h3>
            <p>We prioritize the logic behind mathematical concepts. When students understand the "why," they build true academic resilience for tests and exams.</p>
          </div>
          <div className={styles.trustCard}>
            <h3 className={styles.serif}>Built for Real Schedules</h3>
            <p>Conducted fully online with comprehensive take-home materials, allowing students to prepare effectively even while traveling before the term begins.</p>
          </div>
        </div>
      </section>

      {/* Programs / Levels Section */}
      <section id="programs" className={`${styles.section} ${styles.programsWrapper}`}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.serif}`}>Tailored to Your Level.</h2>
          <p className={styles.sectionSubtitle}>
            Select the specific academic track designed for your child's upcoming school year.
          </p>
        </div>

        <div className={styles.programsGrid}>
          {/* Column 1: MYP */}
          <article className={styles.programColumn}>
            <div className={styles.programHeaderMyp}>
              <h2 className={`${styles.programTitle} ${styles.serif}`}>Incoming MYP5 Math</h2>
              <p className={styles.programPrice}>€50 Total</p>
            </div>
            
            <div className={styles.listTitle}>Course Structure & Coverage</div>
            <ul className={styles.programList}>
              <li><strong>1-Day Intensive:</strong> August 19, 12:00 - 15:00 live online session.</li>
              <li><strong>Core Recap:</strong> Algebra, Roots and Exponents, Logarithms, Quadratics, and Trigonometry.</li>
              <li><strong>Resources:</strong> Comprehensive study guide provided.</li>
              <li><strong>Guidance:</strong> Dedicated Q&A regarding IB and Mathematics expectations.</li>
            </ul>

            <div className={styles.emailBox}>
              <p>Click below to open a pre-filled registration email. Add your details and send to reserve a spot.</p>
              <a href={`mailto:${contactEmail}?subject=${mypSubject}&body=${mypBody}`} className={styles.actionButton}>
                Register for MYP5
              </a>
            </div>
          </article>

          {/* Column 2: DP / CP1 */}
          <article className={styles.programColumn}>
            <div className={styles.programHeaderDp}>
              <h2 className={`${styles.programTitle} ${styles.serif}`}>IB DP / CP1 Math</h2>
              <p className={styles.programPrice}>€75 or €100 Options</p>
            </div>

            <div className={styles.listTitle}>Course Structure & Coverage</div>
            <ul className={styles.programList}>
              <li><strong>Kickoff Session:</strong> August 19, 12:00 - 15:00 live online start.</li>
              <li><strong>Option 1 (€100):</strong> 3-day complete package. Extensive refresher work on pre-DP foundations plus the DP Prep Course.</li>
              <li><strong>Option 2 (€75):</strong> 2-day focused DP/CP1 Prep Course.</li>
              <li><strong>Resources:</strong> Take-home review materials to maintain momentum.</li>
            </ul>

            <div className={styles.emailBox}>
              <p>Click below to open a pre-filled registration email. Choose your tier and add your details.</p>
              <a href={`mailto:${contactEmail}?subject=${dpSubject}&body=${dpBody}`} className={styles.actionButton}>
                Register for DP / CP1
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Schedule Table */}
      <section id="schedule" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.serif}`}>What We Cover</h2>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Day</th>
                <th>Theme</th>
                <th>Focus Areas</th>
                <th>Target Students</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Day 1</strong>August 19</td>
                <td>Live Kickoff & Fundamentals</td>
                <td>Logical recap of Algebra, Roots & Exponents, Logarithms, Quadratics, Trigonometry, plus IB Math Q&A.</td>
                <td>MYP + DP</td>
              </tr>
              <tr>
                <td><strong>Day 2</strong>Take-Home / Live</td>
                <td>DP/CP1 Preparation</td>
                <td>Pacing adjustments, expectation setting, and introduction to rigorous DP problem-solving logic.</td>
                <td>DP/CP1 Only</td>
              </tr>
              <tr>
                <td><strong>Day 3</strong>Take-Home / Live</td>
                <td>Extended Refresher</td>
                <td>Deep-dive into pre-DP foundations to completely eliminate the transition shock of the Diploma Program.</td>
                <td>DP/CP1 Only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Details & Tutors */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.serif}`}>Everything You Need to Know</h2>
        </div>

        <div className={styles.splitGrid}>
          {/* Left: Tutor Info */}
          <div className={styles.tutorBox}>
            <div className={styles.tutorPlaceholder}>
              <span>Instructor Profile</span>
            </div>
            <div className={styles.tutorContent}>
              <h3 className={`${styles.serif}`}>Led by Elite Alumni</h3>
              <p>
                Our sessions are exclusively instructed by UWC Maastricht DP alumni who have successfully navigated the exact curriculum your child is entering. With top-tier Mathematics results in AI HL (7/7) and AA HL (6/7) and currently studying applied physics and mechanical engineering, they know what it takes to secure top marks and build genuine understanding.
              </p>
            </div>
          </div>

          {/* Right: Details List */}
          <div className={styles.detailsList}>
            <div className={styles.detailItem}>
              <h4>Dates & Time</h4>
              <p>Live Kickoff: August 19, 12:00 - 15:00 CEST. Subsequent days utilize structured take-home materials and follow-up reviews.</p>
            </div>
            <div className={styles.detailItem}>
              <h4>Location & Delivery</h4>
              <p>100% Online. Accessible from anywhere, designed specifically to accommodate international families and late-summer travel schedules.</p>
            </div>
            <div className={styles.detailItem}>
              <h4>Requirements</h4>
              <p>A stable internet connection, a quiet workspace, standard stationary, and the student's regular calculator (GDC if applicable).</p>
            </div>
            <div className={styles.detailItem}>
              <h4>Tuition</h4>
              <p>MYP5 Course: €50. DP/CP1 Courses: €75 to €100 depending on the selected plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className={styles.footer}>
        <h2 className={`${styles.footerTitle} ${styles.serif}`}>Ready to secure your spot?</h2>
        <p className={styles.footerSubtitle}>Spaces are strictly limited to ensure quality instruction.</p>
        
        <a href="#programs" className={styles.primaryButton}>
          Select Your Program & Register
        </a>

        <div className={styles.footerBottom}>
          <p>For custom arrangements, contact us directly at <a href={`mailto:${contactEmail}`} style={{ color: '#ea580c', textDecoration: 'none', fontWeight: '500' }}>{contactEmail}</a></p>
          <p>© {new Date().getFullYear()} ScoreSprint. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}