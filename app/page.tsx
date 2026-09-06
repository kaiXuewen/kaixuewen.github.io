import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';

const links = [
  { label: 'Email', href: 'mailto:xkw@bupt.edu.cn', icon: Mail },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=KZtJaE4AAAAJ&hl=zh-CN',
    icon: GraduationCap,
  },
  { label: 'GitHub', href: 'https://github.com/kaiXuewen', icon: Code2 },
];

const experiences = [
  {
    period: '2023 — Present',
    place: 'Beijing, China',
    institution: 'Beijing University of Posts and Telecommunications',
    role: 'Ph.D. Candidate in Cyberspace Security',
    description:
      'Jointly trained with Zhongguancun Laboratory. My research focuses on multimodal large language models, embodied geo-localization, and world models.',
  },
  {
    period: '2020 — 2023',
    place: 'Guangzhou, China',
    institution: 'South China Normal University',
    role: 'M.Eng. in Electronic Information',
    description:
      'Worked on cell-nucleus segmentation and intelligent analysis for digital pathology images.',
  },
  {
    period: '2015 — 2019',
    place: 'Taiyuan, China',
    institution: 'North University of China',
    role: 'B.Eng. in Optoelectronic Information Science and Engineering',
    description:
      'Conducted undergraduate research in digital holography and acoustic levitation.',
  },
];

const projects = [
  {
    period: '2025 — 2028',
    title: 'National Key R&D Program of China',
    detail:
      'Creativity evaluation for key technologies in intelligent interactive experimental teaching.',
  },
  {
    period: '2024 — 2025',
    title: 'Beijing Institute of Control Engineering',
    detail:
      'Multimodal perception and autonomous agent workflows for space-target understanding.',
  },
  {
    period: '2023 — 2024',
    title: 'China Mobile Research Project',
    detail:
      'Led research and delivery of a meta-learning system for network-state diagnosis.',
  },
  {
    period: '2022 — 2023',
    title: 'AI-assisted Pathological Grading',
    detail:
      'Led a student research project on deep-learning-based grading of breast-cancer biopsy slides.',
  },
];

const news = [
  {
    date: '2026',
    content: (
      <><strong>ERGeoBench</strong> was accepted by ICML 2026.</>
    ),
  },
  {
    date: '2026',
    content: (
      <><strong>CreBench</strong> was published at AAAI 2026.</>
    ),
  },
  {
    date: '2025',
    content: (
      <>Selected as an <strong>Outstanding Graduate Student</strong>, top 5% of the program.</>
    ),
  },
  {
    date: '2024',
    content: (
      <>Received the <strong>First Prize</strong> of the Science and Technology Progress Award from the China Association of Work Safety.</>
    ),
  },
];

const publications = [
  {
    venue: 'ICML',
    year: '2026',
    note: 'First author · CCF-A',
    title:
      'ERGeoBench: A Comprehensive Benchmark for Embodied Reasoning and Geo-localization in Multimodal Large Language Models',
    authors:
      'Kaiwen Xue, Tao Wei, Guoxin Zhang, Zhonghong Ou, Kaoyan Lu, Yu Feng, Yifan Zhu, Haoran Luo',
    description:
      'A benchmark spanning single-view, panorama-view, and embodied exploration over 2,207 globally distributed street panoramas.',
    actions: [
      ['Project', 'https://kaixuewen.github.io/ERGeoBench/'],
      ['Paper', 'https://arxiv.org/abs/2605.31251'],
      ['Code', 'https://github.com/kaiXuewen/ERGeoBench'],
    ],
    featured: true,
  },
  {
    venue: 'AAAI',
    year: '2026',
    note: 'Co-first author · CCF-A',
    title:
      'CreBench: Human-Aligned Creativity Evaluation from Idea to Process to Product',
    authors:
      'Kaiwen Xue*, Chenglong Li*, Zhonghong Ou, Guoxin Zhang, Kaoyan Lu, Shuai Lyu, et al.',
    description:
      'A human-aligned benchmark and 4.7M-instruction dataset for evaluating multimodal creativity across ideas, processes, and products.',
    actions: [
      ['Project', 'https://kaixuewen.github.io/Crebench/'],
      ['Paper', 'https://doi.org/10.1609/aaai.v40i32.39962'],
      ['Code', 'https://github.com/kaiXuewen/Crebench'],
    ],
  },
  {
    venue: 'Applied Sciences',
    year: '2024',
    note: 'Co-first author · SCI Q1',
    title: 'LogEDL: Log Anomaly Detection via Evidential Deep Learning',
    authors:
      'Yunfeng Duan*, Kaiwen Xue*, Hao Sun, Haotong Bao, Yadong Wei, et al.',
    description:
      'An evidential learning approach that quantifies predictive uncertainty to detect unseen log anomalies in open settings.',
    actions: [['Paper', 'https://doi.org/10.3390/app14167055']],
  },
  {
    venue: 'Under review',
    year: '2027',
    note: 'First author',
    title:
      'LaGeo: Latent Evidence Search with Spatial Belief for Embodied Geolocation',
    authors: 'Kaiwen Xue et al.',
    description:
      'A latent evidence-search framework for informative viewpoint selection and pose-aware spatial belief.',
    actions: [],
  },
];

const honors = [
  ['2025', 'Outstanding Graduate Student · Top 5%'],
  ['2024', 'First Prize · China Association of Work Safety Science and Technology Progress Award'],
  ['2024', "Second Prize · China International College Students' Innovation Competition, Beijing"],
  ['2024', 'Excellent Case Award · Computing Power Network Industry Application'],
  ['2024', 'National Finalist Award · 2nd Huacai Cup'],
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <>
      <header className="site-header">
        <div className="page-shell nav-row">
          <a className="site-name" href="#about" aria-label="Kaiwen Xue home">
            Kaiwen Xue
          </a>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#experience">Experiences</a>
            <a href="#news">News</a>
            <a href="#publications">Publications</a>
          </nav>
        </div>
      </header>

      <main className="page-shell">
        <section className="profile" id="about" aria-labelledby="profile-title">
          <div className="profile-copy">
            <p className="hello">Hello, I am</p>
            <h1 id="profile-title">
              Kaiwen Xue <span lang="zh-CN">薛凯文</span>
            </h1>
            <p className="role">Ph.D. Candidate · Multimodal & Embodied Intelligence</p>
            <p className="affiliation">
              Beijing University of Posts and Telecommunications<br />
              Zhongguancun Laboratory
            </p>

            <div className="bio">
              <p>
                I am a jointly trained Ph.D. candidate working on multimodal
                large language models, embodied geo-localization, and world
                models. I am interested in how intelligent agents can actively
                seek visual evidence, reason about space, and make reliable
                decisions in open environments.
              </p>
              <p lang="zh-CN">
                我是北京邮电大学与中关村国家实验室联合培养博士生，研究方向包括多模态大模型、具身地理定位与世界模型。
              </p>
            </div>

            <div className="research-note">
              <strong>Research interests:</strong> Multimodal LLMs · Embodied
              Geo-localization · World Models · Creativity Evaluation
            </div>

            <div className="profile-links" aria-label="Profile links">
              {links.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <Icon aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <aside className="portrait-wrap">
            <Image
              src={`${basePath}/kaiwen-xue.jpg`}
              alt="Portrait of Kaiwen Xue by the waterfront"
              width="1279"
              height="1706"
              sizes="(max-width: 760px) 280px, 265px"
              priority
            />
            <p><MapPin aria-hidden="true" /> Beijing, China</p>
          </aside>
        </section>

        <section className="content-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <p>Background</p>
            <h2 id="experience-title">Experiences</h2>
          </div>
          <ol className="record-list">
            {experiences.map((item) => (
              <li key={item.period + item.institution}>
                <div className="record-meta">
                  <time>{item.period}</time>
                  <span>{item.place}</span>
                </div>
                <div className="record-content">
                  <h3>{item.institution}</h3>
                  <h4>{item.role}</h4>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="content-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p>Research in practice</p>
            <h2 id="projects-title">Selected Projects</h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article key={project.period + project.title}>
                <time>{project.period}</time>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="news" aria-labelledby="news-title">
          <div className="section-heading">
            <p>Updates</p>
            <h2 id="news-title">News</h2>
          </div>
          <ol className="news-list">
            {news.map((item, index) => (
              <li key={`${item.date}-${index}`}>
                <time>{item.date}</time>
                <p>{item.content}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="content-section publications" id="publications" aria-labelledby="publications-title">
          <div className="section-heading publication-heading">
            <div>
              <p>Research outputs</p>
              <h2 id="publications-title">Selected Publications</h2>
            </div>
            <a
              href="https://scholar.google.com/citations?user=KZtJaE4AAAAJ&hl=zh-CN"
              target="_blank"
              rel="noreferrer"
            >
              Full list on Google Scholar <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="paper-list">
            {publications.map((paper) => (
              <article className={paper.featured ? 'paper featured-paper' : 'paper'} key={paper.title}>
                <div className="paper-label">
                  <strong>{paper.venue}</strong>
                  <span>{paper.year}</span>
                  <small>{paper.note}</small>
                </div>
                <div className="paper-content">
                  <h3>{paper.title}</h3>
                  <p className="authors">{paper.authors}</p>
                  <p className="abstract">{paper.description}</p>
                  {paper.actions.length > 0 && (
                    <div className="paper-actions">
                      {paper.actions.map(([label, href]) => (
                        <a key={label} href={href} target="_blank" rel="noreferrer">
                          {label} <ArrowUpRight aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="honors" aria-labelledby="honors-title">
          <div className="section-heading">
            <p>Recognition</p>
            <h2 id="honors-title">Selected Honors</h2>
          </div>
          <ul className="honors-list">
            {honors.map(([year, honor]) => (
              <li key={honor}>
                <time>{year}</time>
                <span>{honor}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <div className="page-shell footer-row">
          <div>
            <strong>Kaiwen Xue</strong>
            <span>Multimodal & Embodied Intelligence</span>
          </div>
          <div className="footer-links">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {label}
              </a>
            ))}
          </div>
          <p>© 2026 Kaiwen Xue</p>
        </div>
      </footer>
    </>
  );
}
