export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = '凌睿鹏'
export const headline = '清华大学--硕士二年级.'
export const introduction =
  "欢迎来到我的主页！我叫凌睿鹏。居住在广东深圳，在华南理工大学完成了我的本科学习生涯，目前是清华在读硕士。自2023年以来，我一直在cv领域学习，并对推荐系统有着浓厚兴趣"
export const email = 'rpling@qq.com'
export const githubUsername = 'CodeworldKD'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "我叫凌睿鹏。我来自广东，我是华南理工大学本科，清华在读硕士。自2023年以来，我一直在cv领域学习，并对推荐系统有着浓厚兴趣。",
  '目前，我正在学习Java开发和寻求推荐系统的算法实习机会。',
  "我创建了这个个人网页，分享我每天学到的见解。大多数博客都专注于人工智能和一般计算机科学的学习日志，可能会写一些其他博客分享我的生活。",
]

// blog
export const blogHeadLine = "我正在思考些什么？"
export const blogIntro =
  "我打算写一些AI领域的学习进展，总结一些论文，将自己做过有意思的项目上传在网页上。"

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: '抖音',
    icon: 'tiktok',
    href: 'https://www.douyin.com/user/MS4wLjABAAAAXDbhz-Xaa9dh44RGNSjvLsNmvrlGkaDlOF7O-DmSnJqJLiMXtQ6iLH7rxKqrS8fi?from_tab_name=main',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/197666509',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'javascript',
  'java',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'wechat',
  'python',
  'cplusplus'
]
