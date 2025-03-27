// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: '广东省大学生篮球联赛暨广东省大学生运动会篮球联赛',
    description: '第三名',
    date: '2023',
    location: '广东',
  },
  {
    name: '广东省大学生篮球超级联赛阳光组',
    description: '第七名',
    date: '2021',
    location: '广东',
  },
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "我从事的学术研究和技术项目。"

export const projects: Array<ProjectItemType> = [
  {
    name: 'H&M 个性化时尚推荐',
    description: 'Kaggle推荐算法比赛 排名 46/3006',
    link: { href: 'kaggle.com/competitions/h-and-m-personalized-fashion-recommendations/overview', label: 'GitHub Cards' },
    tags: ['召回', '特征工程', '排序']
  },
  {
    name: '阿里云天池新闻推荐比赛',
    description: '搭建整个召回、排序的推荐系统链路 长期赛 mrr指标为0.2997',
    link: { href: 'tianchi.aliyun.com/competition/entrance/531842', label: '访问比赛网站' },
    tags: ['新闻推荐']
  },
  {
    name: '基于异构多目系统的深度估计研究与应用',
    description: '实现鱼眼和针孔相机模型组合的全视野稠密高精度深度估计',
    link: { href: 'https://example.com/', label: '访问比赛网站' },
    tags: ['深度估计', 'cv', ]
  },
  // {
  //   name: 'Seeking DNA',
  //   description: '2022 SCLS Hackathon',
  //   link: { href: 'https://scls-cs.gitbook.io/scls-apcs-lab/lab5-dna', label: '黑客马拉松' },
  //   tags: ['Hackathon', 'Java']
  // },
  // {
  //   name: 'Texas Holdem Poker Judge',
  //   description: '2024 SCLS Hackathon',
  //   link: { href: 'https://onecompiler.com/challenges/42yf4n5yn/scls-hackathon', label: 'Hackathon' },
  //   tags: ['Hackathon']
  // },
  // {
  //   name: 'AI Camp Course Development',
  //   description: 'Developed a comprehensive AI curriculum for high school students, incorporating real-world projects and startup concepts.',
  //   link: { href: 'https://scls-cs.gitbook.io/ai-camp', label: 'View Course' },
  //   tags: ['Education', 'AI']
  // },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: '智能校车调度解决方案',
    description:
      '针对清华大学深圳国际研究生院校园穿梭巴士及观光电车运输调度的不足，从0-1提出一套智能车辆调度解决方案',
    date: '2023-11~2024-01',
    location: 'Shenzhen',
    // link: 'https://example.com/智能校车调度解决方案',
  },
  {
    name: '绘本桥计划',
    description:
      '针对关于城中村儿童绘本资源触及率的问题，希望建一座“桥”，来便捷城中村儿童接触到更多书籍，从而改善儿童的阅读和课外活动状况。',
    date: '2023-09~2023-11',
    location: 'Shenzhen',
    // link: 'https://example.com/绘本桥计划',
  },
  {
    name: '数字人校园讲解助手',
    description:
      '制作虚拟导游介绍清华大学深圳国际研究生院，能够满足校园访客数字化校园讲解助手的需求',
    date: '2023-11~2023-12',
    location: 'Shenzhen',
  },
]
