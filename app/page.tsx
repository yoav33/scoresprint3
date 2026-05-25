import React, { type CSSProperties } from 'react';
import styles from './page.module.css';

// TODO: Replace with your actual receiving email for general contact
const contactEmail = "yoav@scoresprint.eu"; 

// Reusable inline styles for upgraded CTAs
const primaryCtaStyle: CSSProperties = {
  backgroundColor: '#ea580c', // brand orange
  color: '#ffffff',
  padding: '16px 32px',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '1.1rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  boxShadow: '0 4px 6px -1px rgba(234, 88, 12, 0.3), 0 2px 4px -1px rgba(234, 88, 12, 0.2)',
  border: '2px solid #ea580c',
  transition: 'all 0.2s ease-in-out',
  width: '100%',
  textAlign: 'center'
};

const secondaryCtaStyle: CSSProperties = {
  ...primaryCtaStyle,
  backgroundColor: 'transparent',
  color: '#ea580c',
  boxShadow: 'none',
};

export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <a href="#" className={styles.navLogo}>Score<span>Sprint</span></a>
        <a href="#programs" className={styles.mobileNavButton}>Register</a>
        <div className={styles.navLinks}>
          <a href="#free-session" className={styles.navLink}>Free Session</a>
          <a href="#programs" className={styles.navLink}>Bootcamps</a>
          <a href="#about-us" className={styles.navLink}>About Us</a>
          <a href="#approach" className={styles.navLink}>Why Join</a>
          <a href="#programs" className={styles.navButton} style={{ backgroundColor: '#1e293b', color: 'white' }}>Register Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className={styles.hero}>
        <h1 className={`${styles.heroTitle} ${styles.serif}`}>
          Start IB Math with <span className={styles.heroTitleHighlight}>Confidence</span>, Not Panic.
        </h1>
        <p className={styles.heroSubtitle}>
          Start with our free standalone readiness session, or dive into our comprehensive online bootcamps designed to help students entering MYP5 or DP1/CP1 excel from Day 1.
        </p>
        <div className={styles.heroButtons}>
          <a href="#free-session" style={{...primaryCtaStyle, width: 'auto'}}>
            Join Free Session <span aria-hidden="true">→</span>
          </a>
          <a href="#programs" style={{...secondaryCtaStyle, border: '2px solid #1e293b', color: '#1e293b', width: 'auto'}}>
            View Bootcamps
          </a>
        </div>
      </header>

      {/* Free Readiness Session (Upgraded & Appealing) */}
      <section id="free-session" className={styles.freeSession}>
        {/* Decorative background accent */}
        <div className={styles.freeSessionAccent}></div>

        <div className={styles.freeSessionHeader}>
          <div className={styles.freeSessionBadge}>
            📅 August 13 | Live Online
          </div>
          <h2 className={`${styles.serif} ${styles.freeSessionTitle}`}>
            Free Readiness Session:<br/>Navigating the first weeks of MYP5 or DP1 Math
          </h2>
          <p className={styles.freeSessionDescription}>
            A high-impact, completely standalone taster session covering common mistakes, course expectations, and the exact strategies needed to prepare effectively. No bootcamp registration required!
          </p>
        </div>

        <div className={styles.freeSessionGrid}>
          <div className={styles.freeSessionInfoCard}>
            <h3 className={styles.freeSessionCardTitle}>What to expect:</h3>
            <ul className={styles.freeSessionList}>
              <li className={styles.freeSessionListItem}>
                <span style={{ color: '#ea580c', fontSize: '1.2rem' }}>✓</span>
                <span className={styles.freeSessionListText}><strong>Course Overview</strong> & Expectations</span>
              </li>
              <li className={styles.freeSessionListItem}>
                <span style={{ color: '#ea580c', fontSize: '1.2rem' }}>✓</span>
                <span className={styles.freeSessionListText}><strong>Diagnostic-style</strong> practice questions</span>
              </li>
              <li className={styles.freeSessionListItem}>
                <span style={{ color: '#ea580c', fontSize: '1.2rem' }}>✓</span>
                <span className={styles.freeSessionListText}><strong>Strategic Advice</strong> on AA vs AI, HL vs SL & MYP-to-DP</span>
              </li>
              <li className={styles.freeSessionListItem}>
                <span style={{ color: '#ea580c', fontSize: '1.2rem' }}>✓</span>
                <span className={styles.freeSessionListText}><strong>Live Q&A</strong> with expert tutors</span>
              </li>
            </ul>
          </div>

          <div className={styles.freeSessionCtaPanel}>
             <p className={styles.freeSessionCtaText}>
               Spots are limited to keep the session interactive. Reserve yours early.
             </p>
             {/* TODO: Update URL below */}
             <a href="https://tally.so/r/GxQoAL" target="_blank" rel="noopener noreferrer" style={{...primaryCtaStyle, fontSize: '1.2rem', padding: '20px 32px'}}>
               Reserve Your Free Spot <span aria-hidden="true">→</span>
             </a>
             <p className={styles.freeSessionFinePrint}>
               *This 45-minute free session is independent of our paid bootcamps.
             </p>
          </div>
        </div>
      </section>

      {/* Trust / Approach Section */}
      <section id="approach" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.serif}`}>Why Join the Bootcamp?</h2>
          <p className={styles.sectionSubtitle}>
            Clear explanations focused on understanding, not memorization.
          </p>
        </div>

        <div className={styles.trustGrid}>
          <div className={styles.trustCard}>
            <h3 className={styles.serif}>Small-Group Live Teaching</h3>
            <p>Live online bootcamp with limited spots to keep the course interactive, Split between HL and SL. Every session includes access to recordings of the sessions so you never miss a concept.</p>
          </div>
          <div className={styles.trustCard}>
            <h3 className={styles.serif}>Two Streams for HL and SL</h3>
            <p>Designed specifically to prepare you for the crucial first weeks of school in the level of your choice, along with in-depth explanations of AA vs AI.</p>
          </div>
          <div className={styles.trustCard}>
            <h3 className={styles.serif}>Accessible Anywhere</h3>
            <p>Conducted fully online, making it perfect for students anywhere in the world.</p>
          </div>
        </div>
      </section>

      {/* Programs / Levels Section */}
      <section id="programs" className={`${styles.section} ${styles.programsSection}`}>
        <div className={`${styles.sectionHeader} ${styles.programsHeader}`}>
          <h2 className={`${styles.sectionTitle} ${styles.serif}`}>Full Bootcamp Options</h2>
          <p className={styles.sectionSubtitle}>
            Ready to dive deeper? Choose the bootcamp package that fits your upcoming school year and preparation needs.
          </p>
        </div>

        <div className={styles.programsGridOverride}>
          
          {/* Column 1: MYP5 Launchpad */}
          <article className={styles.programCard}>
            <div className={styles.programCardHeader}>
              <h2 className={`${styles.serif} ${styles.programCardTitle}`}>MYP5 Prep Course</h2>
              <div className={styles.programPriceRow}>
                <span className={styles.programPriceValue}>€59</span>
                <span className={styles.programDuration}>/ 1-Day</span>
              </div>
            </div>
            
            <div className={styles.programCardBody}>
              <p className={styles.programCardText}>
                For students entering MYP5 who want a clear, confidence-building recap of essential topics.
              </p>
              <div className={styles.programListTitle}>What&apos;s Covered:</div>
              <ul className={styles.programFeatureList}>
                <li className={styles.programFeatureItem}><span style={{color: '#ea580c'}}>✓</span> Algebra, Roots & Exponents</li>
                <li className={styles.programFeatureItem}><span style={{color: '#ea580c'}}>✓</span> Logarithms & Quadratics</li>
                <li className={styles.programFeatureItem}><span style={{color: '#ea580c'}}>✓</span> Functions & Trigonometry</li>
                <li className={styles.programFeatureItem}><span style={{color: '#ea580c'}}>✓</span> Live teaching & guided practice</li>
                <li className={styles.programFeatureItem}><span style={{color: '#ea580c'}}>✓</span> Study guide & replay access</li>
              </ul>
              <a href="https://buy.stripe.com/9B65kE6BGgvVaHu6jz0ZW00" target="_blank" rel="noopener noreferrer" style={{...primaryCtaStyle, backgroundColor: '#1e293b', borderColor: '#1e293b', boxShadow: 'none'}}>
                Register for MYP5
              </a>
            </div>
          </article>

          {/* Column 2: DP1 Core */}
          <article className={styles.programCard}>
            <div className={styles.programCardHeader}>
              <h2 className={`${styles.serif} ${styles.programCardTitle}`}>DP1 Prep Core</h2>
              <div className={styles.programPriceRow}>
                <span className={styles.programPriceValue}>€99</span>
                <span className={styles.programDuration}>/ 2-Days</span>
              </div>
            </div>

            <div className={styles.programCardBody}>
              <p className={styles.programCardText}>
                For students starting DP1 or CP1 who want a strong foundation before school begins.
              </p>
              <div className={styles.programListTitle}>What&apos;s Covered:</div>
              <ul className={styles.programFeatureList}>
                <li className={styles.programFeatureItem}><span style={{color: '#ea580c'}}>✓</span> Essential Algebra & Logarithms</li>
                <li className={styles.programFeatureItem}><span style={{color: '#ea580c'}}>✓</span> Functions & Trigonometry</li>
                <li className={styles.programFeatureItem}><span style={{color: '#ea580c'}}>✓</span> Introduction to Complex Numbers (HL only)</li>
                <li className={styles.programFeatureItem}><span style={{color: '#ea580c'}}>✓</span> Exclusive Graphic Display Calculator Demonstration</li>
                <li className={styles.programFeatureItem}><span style={{color: '#ea580c'}}>✓</span> IB-style problem solving</li>
                <li className={styles.programFeatureItem}><span style={{color: '#ea580c'}}>✓</span> MYP-to-DP transition guide</li>
                <li className={styles.programFeatureItem}><span style={{color: '#ea580c'}}>✓</span> Take-home materials & replays</li>
              </ul>
              <a href="https://buy.stripe.com/14A28s7FKenN8zm37n0ZW01" target="_blank" rel="noopener noreferrer" style={{...primaryCtaStyle, backgroundColor: '#1e293b', borderColor: '#1e293b', boxShadow: 'none'}}>
                Register for Core
              </a>
            </div>
          </article>

          {/* Column 3: DP1 Plus */}
          <article className={`${styles.programCard} ${styles.programCardFeatured}`}>
            <div className={styles.programCardBadge}>Most Comprehensive</div>
            <div className={`${styles.programCardHeader} ${styles.programCardHeaderFeatured}`}>
              <h2 className={`${styles.serif} ${styles.programCardTitle} ${styles.programCardTitleFeatured}`}>DP1 Prep Plus</h2>
              <div className={styles.programPriceRow}>
                <span className={`${styles.programPriceValue} ${styles.programPriceValueFeatured}`}>€139</span>
                <span className={`${styles.programDuration} ${styles.programDurationFeatured}`}>/ 3-Days</span>
              </div>
            </div>

            <div className={styles.programCardBody}>
              <p className={styles.programCardText}>
                The full preparation package for students who want the strongest possible start to DP math.
              </p>
              <div className={styles.programListTitle}>Everything in Core, Plus:</div>
              <ul className={styles.programFeatureList}>
                <li className={styles.programFeatureItem}><span style={{color: '#ea580c'}}>✓</span> Extra preparation for the most challenging topics in DP Math</li>
                <li className={styles.programFeatureItem}><span style={{color: '#ea580c'}}>✓</span> Introduction to Calculus (HL Only)</li>
                <li className={styles.programFeatureItem}><span style={{color: '#ea580c'}}>✓</span> Deeper AA/AI problem solving approaches</li>
                <li className={styles.programFeatureItem}><span style={{color: '#ea580c'}}>✓</span> 30 Minute Q&A about IB and choosing the right subject package</li>
                <li className={styles.programFeatureItem}><span style={{color: '#ea580c'}}>✓</span> <strong>Exclusive:</strong> &quot;Week-one rescue&quot; Q&A after school starts</li>
              </ul>
              <a href="https://buy.stripe.com/8x27sM2lq5Rh6re6jz0ZW02" target="_blank" rel="noopener noreferrer" style={primaryCtaStyle}>
                Register for Plus
              </a>
            </div>
          </article>

        </div>
      </section>

      {/* Details & Tutors */}
      <section id="about-us" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.serif}`}>Led by Experience</h2>
        </div>

        <div className={styles.splitGrid}>
          {/* Left: Tutor Info */}
          <div className={styles.tutorBox}>
            <div className={styles.tutorPlaceholder}>
              <span>Instructor Profile</span>
            </div>
            <div className={styles.tutorContent}>
              <h3 className={`${styles.serif}`}>UWCM DP Alumni & Expert Tutors</h3>
              <p>
                Our live online bootcamps are led by highly experienced tutors and UWC Maastricht DP alumni who excelled in AI HL and AA HL. They know exactly what the leap from MYP to DP entails, common pitfalls to avoid, and how to effectively bridge the gap.
              </p>
            </div>
          </div>

          {/* Right: Details List */}
          <div className={styles.detailsList}>
            <div className={styles.detailItem}>
              <h4>Who is this for</h4>
              <p>Students entering MYP5, DP1, or CP1 who want to reduce the transition shock and excel from Day 1.</p>
            </div>
            <div className={styles.detailItem}>
              <h4>Location & Delivery</h4>
              <p>100% Online. Accessible from anywhere to accommodate international families. Replay access included for all sessions.</p>
            </div>
            <div className={styles.detailItem}>
              <h4>Materials Included</h4>
              <p>Comprehensive slide show, recordings of the live streams, guided practice exercises, diagnostic questions, and a take-home study guide with practice questions.</p>
            </div>
            <div className={styles.detailItem}>
              <h4>Tuition</h4>
              <p>MYP5 Launchpad: €59. DP1 Core: €99. DP1 Plus: €139. (Readiness Session: Free)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA (Upgraded Professional Design) */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <h2 className={`${styles.footerTitle} ${styles.serif}`}>Reserve your spot today.</h2>
          <p className={styles.footerSubtitle}>
            Limited small-group places available to ensure highly interactive learning and personal attention.
          </p>
          
          <div className={styles.footerActions}>
            {/* TODO: Update URL below */}
            <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer" style={{...secondaryCtaStyle, color: 'white', borderColor: 'rgba(255,255,255,0.3)', width: 'auto'}}>
              Book Free Readiness Session
            </a>
            <a href="#programs" style={{...primaryCtaStyle, width: 'auto'}}>
              Select Full Bootcamp <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className={styles.footerBottom}>
            <p style={{ marginBottom: '0.5rem' }}>Questions? Contact us directly at <a href={`mailto:${contactEmail}`} style={{ color: '#ea580c', textDecoration: 'none', fontWeight: '600' }}>{contactEmail}</a></p>
            <p>© {new Date().getFullYear()} ScoreSprint. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}