
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'Tsinghua University',
      major: 'Computer Science',
      logo: 'college',
      start: '2023',
      end: '2026'
    },
    {
      school: 'South China University of Technology',
      major: 'Vehicle Engineering',
      logo: 'college',
      start: '2019',
      end: '2023'
    },
  ]