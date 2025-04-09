import HeroSection from '../component/hero/page';
import Footer from '../Footer/page';
import Navbar from '../navbar';
import styles from './box.module.css';

const BlogSection = () => {
  return (
    <div>
      <Navbar></Navbar>
    <section className={styles.blogSection}>

      <div className={styles.overlay}></div> {/* Background overlay */}
      <div className={styles.blogContent}>
        <h2>Discover Amazing Places</h2>
        <p>Read about the best tourist spots around the world, from hidden gems to well-known attractions.</p>
        <a href="/blog" className={styles.readMoreBtn}>Read More</a>
      </div>
      <div className={styles.blogImage}>
        <img src="/call.gif" alt="Ocean Blog Image" />
      </div>
    </section>
    <HeroSection></HeroSection>
    <section className={styles.blogSection}>

<div className={styles.overlay}></div> {/* Background overlay */}
<div className={styles.blogContent}>
  <h2>Discover Amazing Places</h2>
  <p>Read about the best tourist spots around the world, from hidden gems to well-known attractions.</p>
  <a href="/blog" className={styles.readMoreBtn}>Read More</a>
</div>
<div className={styles.blogImage}>
  <img src="/call.gif" alt="Ocean Blog Image" />
</div>
</section>
    <Footer></Footer>
    </div>
  );
};

export default BlogSection;
