<template>
  <div>
    <header>
      <nav>
        <ul class="nav-list">
          <li><a href="#home">首页</a></li>
          <li><a href="#about">关于我</a></li>
          <li><a href="#experience">工作经历</a></li>
          <li><a href="#achievements">成就</a></li>
          <li><a href="#education">教育经历</a></li>
          <li><a href="#contact">联系方式</a></li>
        </ul>
      </nav>
    </header>

    <section id="home" class="home">
      <h1>欢迎来到我的个人网站</h1>
      <p>生活需要温暖，梦想需要勇气</p>
    </section>

    <section id="about" class="about">
      <h2>关于我</h2>
      <div class="about-content">
        <img src="your-photo.jpg" alt="My Photo" class="about-photo" />
        <p>我叫崔小萌，今年24岁，毕业于山东科技大学，专业是数学与应用数学。拥有2年工作经验，曾在多所学校担任数学教师。我擅长数学教学、学生辅导，并且具备一定的管理实习经验。</p>
      </div>
    </section>

    <section id="experience" class="experience">
      <h2>工作经历</h2>
      <div class="experience-list">
        <div class="experience-item">
          <h3>勤思数学 - 教师</h3>
          <p class="time">2023年9月 - 至今</p>
          <ul class="description">
            <li>新教师入职培训</li>
            <li>根据学生情况制定教学计划</li>
            <li>与家长沟通交流，提高家长的信任度</li>
            <li>学科教研与班级授课</li>
          </ul>
        </div>
        <div class="experience-item">
          <h3>致远中学 - 初中数学教师</h3>
          <p class="time">2024年3月 - 2024年8月</p>
          <ul class="description">
            <li>班级平均成绩前三名，优秀率15％，及格率72％</li>
          </ul>
        </div>
        <div class="experience-item">
          <h3>山东少年时教育咨询有限公司 - 教师</h3>
          <p class="time">2022年9月 - 2023年7月</p>
          <ul class="description">
            <li>为学生提供一对一教学辅导，制定个性化学习计划</li>
            <li>参加教研提升授课技巧</li>
            <li>与学习顾问教师沟通，提升家长满意度</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="achievements" class="achievements">
      <h2>我的成就</h2>
      <div class="achievements-list">
        <div class="achievement-item">
          <h3>第十届山东省大学生数学竞赛（数学B组）</h3>
          <p class="level">省级二等奖</p>
        </div>
        <div class="achievement-item">
          <h3>第十一届全国大学生数学竞赛（数学B类）</h3>
          <p class="level">国家级三等奖</p>
        </div>
        <div class="achievement-item">
          <h3>全国大学生数学建模竞赛（山东赛区）</h3>
          <p class="level">省级二等奖</p>
        </div>
      </div>
    </section>

    <section id="education" class="education">
      <h2>教育经历</h2>
      <div class="education-list">
        <div class="education-item">
          <h3>山东科技大学</h3>
          <p class="degree">数学与应用数学 本科</p>
          <p class="time">2018年9月 - 2022年6月</p>
          <p class="description">学科成绩（GPA 3.51）</p>
          <ul class="course-list">
            <li>数学分析：91/96/98</li>
            <li>高等代数：96/91</li>
            <li>空间解析几何：93</li>
            <li>大学英语：73/60</li>
            <li>常微分方程：96</li>
            <li>离散数学：95</li>
            <li>概率论与数理统计：96</li>
            <li>微分几何：92</li>
            <li>C语言：96/90</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <h2>联系方式</h2>
      <div class="contact-info">
        <p><strong>电话：</strong>18765067632</p>
        <p><strong>邮箱：</strong>sn415215@163.com</p>
        <p><strong>期望薪资：</strong>9-14K</p>
        <p><strong>期望城市：</strong>青岛</p>
      </div>
    </section>

    <footer>
      <p>&copy; 2025 崔小萌</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
/* 通用样式 */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f7f7f7;
  color: #333;
}

/* 导航栏 */
nav {
  background-color: #a8d08d; /* 抹茶绿色 */
  padding: 15px 0;
  position: fixed; /* 固定在顶部 */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
}

.nav-list {
  list-style: none;
  display: flex; /* 横向排列 */
  justify-content: center; /* 水平居中对齐 */
  margin: 0;
  padding: 0;
}

.nav-list li {
  margin: 0 20px; /* 每个导航项之间留出空间 */
}

.nav-list a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-list a:hover {
  color: #82b46e; /* 草绿色 */
}

/* 首页 */
.home {
  text-align: center;
  background: linear-gradient(135deg, #a8d08d, #82b46e); /* 抹茶绿色和草绿色渐变 */
  padding: 60px 20px;
  color: white;
  margin-top: 80px; /* 给固定导航留出空间 */
}

.home h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.home p {
  font-size: 1.2rem;
}

/* 关于我 */
.about {
  padding: 60px 20px;
  text-align: center;
}

.about h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.about-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.about-photo {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.about p {
  font-size: 1.1rem;
  width: 60%;
}

/* 工作经历 */
.experience {
  background-color: #f1f1f1;
  padding: 60px 20px;
}

.experience h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.experience-item {
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
}

.experience-item h3 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.experience-item .time {
  font-size: 1.1rem;
  color: #777;
  margin: 5px 0;
}

.experience-item .description {
  font-size: 1rem;
  color: #333;
}

/* 成就 */
.achievements {
  padding: 60px 20px;
  text-align: center;
}

.achievements h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.achievements-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.achievement-item {
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
}

.achievement-item h3 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.achievement-item .level {
  font-size: 1.2rem;
  color: #82b46e; /* 草绿色 */
}

/* 教育经历 */
.education {
  background-color: #f1f1f1;
  padding: 60px 20px;
}

.education h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.education-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.education-item {
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
}

.education-item h3 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.education-item .degree {
  font-size: 1.2rem;
  font-weight: bold;
  color: #82b46e; /* 草绿色 */
}

.education-item .time {
  font-size: 1.1rem;
  color: #777;
  margin: 5px 0;
}

.education-item .course-list {
  list-style: none;
  padding-left: 20px;
}

.education-item .course-list li {
  font-size: 1rem;
  color: #333;
}

/* 联系方式 */
.contact {
  padding: 60px 20px;
  text-align: center;
}

.contact-info {
  font-size: 1.2rem;
}

.contact-info p {
  margin-bottom: 10px;
}

footer {
  text-align: center;
  padding: 20px;
  background-color: #a8d08d;
  color: white;
}
</style>