<template>
  <div class="site-wrapper">
    <header class="navbar" :class="{ scrolled: isScrolled }">
      <div class="navbar-inner">
        <span class="navbar-brand">崔小萌</span>
        <nav>
          <ul class="nav-list">
            <li><a href="#home" @click.prevent="scrollTo('home')">首页</a></li>
            <li><a href="#about" @click.prevent="scrollTo('about')">关于我</a></li>
            <li><a href="#experience" @click.prevent="scrollTo('experience')">工作经历</a></li>
            <li><a href="#achievements" @click.prevent="scrollTo('achievements')">成就</a></li>
            <li><a href="#education" @click.prevent="scrollTo('education')">教育经历</a></li>
            <li><a href="#contact" @click.prevent="scrollTo('contact')">联系方式</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <section id="home" class="hero">
      <div class="hero-content">
        <p class="hero-sub">Mathematics Educator</p>
        <h1 class="hero-name">崔小萌</h1>
        <div class="hero-divider"></div>
        <p class="hero-quote">教育的本质是点燃火焰，而非灌输知识</p>
        <a class="hero-cta" href="#about" @click.prevent="scrollTo('about')">了解更多</a>
      </div>
      <div class="hero-overlay"></div>
    </section>

    <section id="about" class="section about">
      <div class="container">
        <div class="section-label">About</div>
        <h2 class="section-title">关于我</h2>
        <div class="about-grid">
          <div class="about-photo-wrap">
            <img src="./assets/profile_photo.jpg" alt="崔小萌" class="about-photo" />
          </div>
          <div class="about-text">
            <p>我叫<strong>崔小萌</strong>，生于2000年，毕业于山东科技大学，专业主修数学与应用数学。拥有3年工作经验，曾在多所学校担任数学教师。擅长数学教学、学生辅导，并且具备一定的管理实习经验。</p>
            <div class="about-stats">
              <div class="stat">
                <span class="stat-num">3+</span>
                <span class="stat-label">年教学经验</span>
              </div>
              <div class="stat">
                <span class="stat-num">4</span>
                <span class="stat-label">所任职学校</span>
              </div>
              <div class="stat">
                <span class="stat-num">6</span>
                <span class="stat-label">项荣誉奖项</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="experience" class="section experience">
      <div class="container">
        <div class="section-label">Experience</div>
        <h2 class="section-title">工作经历</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="timeline-meta">
                <span class="timeline-time">2025年9月至今</span>
                <span class="timeline-badge current">在职</span>
              </div>
              <h3>龙港金牛</h3>
              <p class="timeline-role">教师</p>
              <ul>
                <li>初中课内数学教学</li>
                <li>初中课内竞赛教学</li>
                <li>高中课内数学教学</li>
                <li>课程内容设计</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="timeline-meta">
                <span class="timeline-time">2024年3月 — 2024年8月</span>
              </div>
              <h3>青岛西海岸新区致远中学</h3>
              <p class="timeline-role">初中数学教师</p>
              <ul>
                <li>班级平均成绩前三名，优秀率15％，及格率72％</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="timeline-meta">
                <span class="timeline-time">2023年9月 — 2025年1月</span>
              </div>
              <h3>勤思数学</h3>
              <p class="timeline-role">教师</p>
              <ul>
                <li>新教师入职培训</li>
                <li>根据学生情况制定教学计划</li>
                <li>与家长沟通交流，提高家长的信任度</li>
                <li>学科教研与班级授课</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="timeline-meta">
                <span class="timeline-time">2022年9月 — 2023年7月</span>
              </div>
              <h3>山东少年时教育咨询有限公司</h3>
              <p class="timeline-role">教师</p>
              <ul>
                <li>为学生提供一对一教学辅导，制定个性化学习计划</li>
                <li>参加教研提升授课技巧</li>
                <li>与学习顾问教师沟通，提升家长满意度</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="achievements" class="section achievements">
      <div class="container">
        <div class="section-label">Achievements</div>
        <h2 class="section-title">成就与荣誉</h2>
        <div class="achievements-grid">
          <div class="achievement-card">
            <div class="achievement-icon">🏆</div>
            <div class="achievement-body">
              <h3>第十一届全国大学生数学竞赛（数学B类）</h3>
              <p class="achievement-level">国家级三等奖</p>
            </div>
          </div>
          <div class="achievement-card">
            <div class="achievement-icon">🥈</div>
            <div class="achievement-body">
              <h3>全国大学生数学建模竞赛（山东赛区）</h3>
              <p class="achievement-level">省级二等奖</p>
            </div>
          </div>
          <div class="achievement-card">
            <div class="achievement-icon">🥈</div>
            <div class="achievement-body">
              <h3>第十届山东省大学生数学竞赛（数学B组）</h3>
              <p class="achievement-level">省级二等奖</p>
            </div>
          </div>
          <div class="achievement-card">
            <div class="achievement-icon">📜</div>
            <div class="achievement-body">
              <h3>大学英语四六级考试</h3>
              <p class="achievement-level">CET-4</p>
            </div>
          </div>
          <div class="achievement-card">
            <div class="achievement-icon">🎓</div>
            <div class="achievement-body">
              <h3>中华人民共和国教师资格证书</h3>
              <p class="achievement-level">高级中学教师资格（数学）</p>
            </div>
          </div>
          <div class="achievement-card">
            <div class="achievement-icon">🗣️</div>
            <div class="achievement-body">
              <h3>普通话水平测试等级证书</h3>
              <p class="achievement-level">二级甲等</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="education" class="section education">
      <div class="container">
        <div class="section-label">Education</div>
        <h2 class="section-title">教育经历</h2>
        <div class="education-list">
          <div class="education-card">
            <div class="edu-header">
              <div>
                <h3>山东科技大学</h3>
                <p class="edu-degree">数学与应用数学 · 本科</p>
                <p class="edu-time">2018年9月 — 2022年6月</p>
              </div>
              <div class="edu-gpa">
                <span class="gpa-num">3.51</span>
                <span class="gpa-label">GPA</span>
              </div>
            </div>
            <div class="edu-courses">
              <p class="courses-title">主要课程成绩</p>
              <div class="courses-grid">
                <div class="course-item"><span class="course-name">数学分析</span><span class="course-score">91 / 96 / 98</span></div>
                <div class="course-item"><span class="course-name">高等代数</span><span class="course-score">96 / 91</span></div>
                <div class="course-item"><span class="course-name">空间解析几何</span><span class="course-score">93</span></div>
                <div class="course-item"><span class="course-name">常微分方程</span><span class="course-score">96</span></div>
                <div class="course-item"><span class="course-name">离散数学</span><span class="course-score">95</span></div>
                <div class="course-item"><span class="course-name">概率论与数理统计</span><span class="course-score">96</span></div>
                <div class="course-item"><span class="course-name">微分几何</span><span class="course-score">92</span></div>
                <div class="course-item"><span class="course-name">C语言</span><span class="course-score">96 / 90</span></div>
                <div class="course-item"><span class="course-name">大学英语</span><span class="course-score">73 / 60</span></div>
              </div>
            </div>
          </div>

          <div class="education-card">
            <div class="edu-header">
              <div>
                <h3>山东省福山第一中学</h3>
                <p class="edu-degree">高中</p>
                <p class="edu-time">2015年9月 — 2018年6月</p>
              </div>
            </div>
            <div class="edu-courses">
              <p class="courses-title">高考成绩</p>
              <div class="courses-grid">
                <div class="course-item"><span class="course-name">高考数学</span><span class="course-score highlight">146</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="section contact">
      <div class="container">
        <div class="section-label">Contact</div>
        <h2 class="section-title">联系方式</h2>
        <div class="contact-grid">
          <a class="contact-card" href="tel:18765067632">
            <div class="contact-icon">📱</div>
            <div class="contact-detail">
              <span class="contact-type">电话</span>
              <span class="contact-value">187 6506 7632</span>
            </div>
          </a>
          <a class="contact-card" href="mailto:catherine.jane.tsui@gmail.com">
            <div class="contact-icon">✉️</div>
            <div class="contact-detail">
              <span class="contact-type">邮箱</span>
              <span class="contact-value">catherine.jane.tsui@gmail.com</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>© 2026 崔小萌 · 数学教师</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return { isScrolled: false }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 60
    },
    scrollTo(id) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #faf9f7;
  --surface: #ffffff;
  --primary: #1a1f2e;
  --secondary: #4a5568;
  --accent: #b8965a;
  --accent-light: #d4b07a;
  --accent-muted: #f5ede0;
  --border: #e8e4df;
  --text: #2d3748;
  --text-muted: #718096;
  --nav-h: 72px;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', 'Noto Serif SC', system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
}

.site-wrapper { min-height: 100vh; }

/* ─── Navbar ─────────────────────────────────────────── */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 0 40px;
  height: var(--nav-h);
  transition: background 0.4s ease, box-shadow 0.4s ease;
}

.navbar.scrolled {
  background: rgba(250, 249, 247, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 var(--border);
}

.navbar-inner {
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  font-family: 'Noto Serif SC', serif;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  color: var(--primary);
  opacity: 0;
  transition: opacity 0.3s;
}

.navbar.scrolled .navbar-brand { opacity: 1; }

.nav-list {
  list-style: none;
  display: flex;
  gap: 36px;
}

.nav-list a {
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--primary);
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
  transition: color 0.2s;
}

.nav-list a::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0;
  width: 0; height: 1.5px;
  background: var(--accent);
  transition: width 0.25s ease;
}

.nav-list a:hover { color: var(--accent); }
.nav-list a:hover::after { width: 100%; }

/* ─── Hero ───────────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(150deg, #1a1f2e 0%, #2d3561 55%, #1a2a3a 100%);
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 70% 50%, rgba(184,150,90,0.12) 0%, transparent 70%),
    radial-gradient(ellipse 40% 60% at 20% 80%, rgba(45,53,97,0.6) 0%, transparent 60%);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(255,255,255,0.03)'/%3E%3C/svg%3E");
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
  padding: 0 24px;
}

.hero-sub {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent-light);
  margin-bottom: 20px;
}

.hero-name {
  font-family: 'Noto Serif SC', serif;
  font-size: clamp(3.5rem, 8vw, 6.5rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #fff;
  line-height: 1;
  margin-bottom: 28px;
}

.hero-divider {
  width: 48px;
  height: 2px;
  background: var(--accent);
  margin: 0 auto 28px;
}

.hero-quote {
  font-family: 'Noto Serif SC', serif;
  font-size: 1rem;
  color: rgba(255,255,255,0.65);
  letter-spacing: 0.05em;
  margin-bottom: 48px;
  max-width: 380px;
}

.hero-cta {
  display: inline-block;
  padding: 12px 36px;
  border: 1.5px solid var(--accent);
  color: var(--accent-light);
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.25s, color 0.25s;
}

.hero-cta:hover {
  background: var(--accent);
  color: #fff;
}

/* ─── Sections ───────────────────────────────────────── */
.section { padding: 100px 24px; }

.container {
  max-width: 960px;
  margin: 0 auto;
}

.section-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 10px;
}

.section-title {
  font-family: 'Noto Serif SC', serif;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 56px;
  position: relative;
  padding-bottom: 20px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 36px; height: 2px;
  background: var(--accent);
}

/* ─── About ──────────────────────────────────────────── */
.about { background: var(--surface); }

.about-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 64px;
  align-items: center;
}

.about-photo-wrap {
  flex-shrink: 0;
}

.about-photo {
  width: 180px;
  height: 180px;
  border-radius: 2px;
  object-fit: cover;
  display: block;
  box-shadow: 8px 8px 0 var(--accent-muted), 0 20px 60px rgba(0,0,0,0.12);
}

.about-text p {
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--secondary);
  margin-bottom: 40px;
}

.about-text strong { color: var(--primary); }

.about-stats {
  display: flex;
  gap: 40px;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-num {
  font-family: 'Noto Serif SC', serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent);
  line-height: 1;
}

.stat-label {
  font-size: 0.78rem;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

/* ─── Experience / Timeline ──────────────────────────── */
.experience { background: var(--bg); }

.timeline {
  position: relative;
  padding-left: 32px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px; top: 8px; bottom: 0;
  width: 1.5px;
  background: var(--border);
}

.timeline-item {
  position: relative;
  padding-bottom: 48px;
}

.timeline-item:last-child { padding-bottom: 0; }

.timeline-dot {
  position: absolute;
  left: -32px;
  top: 8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--surface);
  border: 2px solid var(--accent);
  box-shadow: 0 0 0 4px var(--accent-muted);
}

.timeline-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 28px 32px;
  transition: box-shadow 0.2s;
}

.timeline-card:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
}

.timeline-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.timeline-time {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-muted);
  letter-spacing: 0.03em;
}

.timeline-badge {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 2px;
  background: var(--accent-muted);
  color: var(--accent);
}

.timeline-card h3 {
  font-family: 'Noto Serif SC', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 4px;
}

.timeline-role {
  font-size: 0.88rem;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 16px;
}

.timeline-card ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.timeline-card ul li {
  font-size: 0.9rem;
  color: var(--secondary);
  padding-left: 14px;
  position: relative;
}

.timeline-card ul li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 0.75rem;
}

/* ─── Achievements ───────────────────────────────────── */
.achievements { background: var(--primary); }

.achievements .section-label { color: var(--accent-light); }

.achievements .section-title {
  color: #fff;
}

.achievements .section-title::after { background: var(--accent-light); }

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.achievement-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 24px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 4px;
  transition: background 0.2s, transform 0.2s;
}

.achievement-card:hover {
  background: rgba(255,255,255,0.08);
  transform: translateY(-2px);
}

.achievement-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.achievement-body h3 {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255,255,255,0.85);
  margin-bottom: 6px;
  line-height: 1.5;
}

.achievement-level {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent-light);
  letter-spacing: 0.03em;
}

/* ─── Education ──────────────────────────────────────── */
.education { background: var(--surface); }

.education-list {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.education-card {
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  transition: box-shadow 0.2s;
}

.education-card:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 28px 32px;
  border-bottom: 1px solid var(--border);
  background: var(--bg);
}

.edu-header h3 {
  font-family: 'Noto Serif SC', serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 6px;
}

.edu-degree {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 4px;
}

.edu-time {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.edu-gpa {
  text-align: right;
  flex-shrink: 0;
  padding-left: 24px;
}

.gpa-num {
  display: block;
  font-family: 'Noto Serif SC', serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--accent);
  line-height: 1;
}

.gpa-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.edu-courses {
  padding: 24px 32px;
}

.courses-title {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 16px;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.course-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: var(--bg);
  border-radius: 3px;
}

.course-name {
  font-size: 0.82rem;
  color: var(--secondary);
}

.course-score {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--primary);
}

.course-score.highlight {
  color: var(--accent);
}

/* ─── Contact ────────────────────────────────────────── */
.contact { background: var(--bg); }

.contact-grid {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px 32px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 4px;
  text-decoration: none;
  transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
  min-width: 260px;
}

.contact-card:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  transform: translateY(-2px);
  border-color: var(--accent);
}

.contact-icon { font-size: 1.4rem; }

.contact-detail {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contact-type {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.contact-value {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--primary);
}

/* ─── Footer ─────────────────────────────────────────── */
.footer {
  text-align: center;
  padding: 32px 24px;
  background: var(--primary);
  color: rgba(255,255,255,0.4);
  font-size: 0.8rem;
  letter-spacing: 0.05em;
}

/* ─── Responsive ─────────────────────────────────────── */
@media (max-width: 768px) {
  .navbar { padding: 0 20px; }
  .nav-list { gap: 20px; }
  .nav-list a { font-size: 0.78rem; }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }

  .about-photo-wrap { display: flex; justify-content: center; }
  .about-stats { justify-content: center; }

  .section-title::after { left: 50%; transform: translateX(-50%); }
  .section-title { text-align: center; }
  .section-label { text-align: center; }

  .edu-header { flex-direction: column; gap: 16px; }
  .edu-gpa { text-align: left; }

  .contact-grid { flex-direction: column; }
  .contact-card { min-width: unset; }
}
</style>
