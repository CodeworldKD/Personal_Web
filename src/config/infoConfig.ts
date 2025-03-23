export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = '凌睿鹏'
export const headline = '清华大学 硕士二年级.'
export const introduction =
  "欢迎来到我的主页！我叫凌睿鹏。我来自广东，我是华南理工大学本科，清华在读硕士。自2023年以来，我一直在cv领域学习。"
export const email = 'rpling@qq.com'
export const githubUsername = 'CodeworldKD'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "我叫凌睿鹏。我来自广东，我是华南理工大学本科，清华在读硕士。自2023年以来，我一直在cv领域学习。",
  '目前，我正在学习Java开发和寻求推荐系统的算法实习机会。',
  "我创建了这个博客，分享我每天学到的见解。大多数博客都专注于人工智能和一般计算机科学的学习日志，而其他博客则分享我学到的生活知识。",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@harvard?lang=en',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/349721082',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
