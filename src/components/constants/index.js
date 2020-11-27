export const routes = [
  { label: 'Home', link: '/', activeIndex: 0,component:"HeroPage"  },
  { label: 'About us', link: '/aboutus', activeIndex: 1,component:"HeroPage"  },
  { label: 'Causes', link: '/causes', activeIndex: 2,component:"HeroPage"  },
  { label: 'Gallery', link: '/gallery' , activeIndex: 3,component:"HeroPage" },
  { label: 'News', link: '/news', activeIndex: 4 ,component:"HeroPage" },
  { label: 'Contact', link: '/contact', activeIndex: 5 ,component:"HeroPage" },
  { label: 'Settings', link: '/settings/company', activeIndex: 6 ,component:"CompanyView" },
]


export const settingsRoutes = [
  { label: 'Home', link: '/', activeIndex: 0,component:"HeroPage",icon:"home"  },
  { label: 'Company', link: '/settings/company', activeIndex: 1,component:"CompanyView",icon:"home"  },
  { label: 'Hero', link: '/settings/heroSettings', activeIndex: 2,component:"HeroSectionSettings",icon:"home"  },
  { label: 'HeroCard', link: '/settings/heroCardSettings', activeIndex: 3,component:"HeroCardSectionSettings",icon:"home"  },
  { label: 'AboutUs', link: '/settings/aboutUsSectionSettings', activeIndex: 4,component:"aboutUsSectionSettings",icon:"home"  },
  { label: 'UpComingEvents', link: '/settings/upComingEventsSettings', activeIndex: 5,component:"upComingEventsSettings",icon:"home"  },
  { label: 'OurCauses', link: '/settings/ourCausesSectionSettings', activeIndex: 6,component:"ourCausesSectionSettings",icon:"home"  },
  { label: 'Causes Stats', link: '/settings/causesStatsSettings', activeIndex: 7,component:"causesStatsSettings",icon:"home"  },
  { label: 'Footer', link: '/settings/footerSettings', activeIndex: 8,component:"footerSettings",icon:"home"  },
]

export const FooterUseFullLinks = {
  Heading:'Useful Links',links :
  [
    {linkName:"Privacy Polticy"},
    {linkName:"Become a Volunteer"},
    {linkName:"Donate"},
    {linkName:"Testimonials"},
    {linkName:"Causes"},
    {linkName:"Portfolio"},
    {linkName:"News"}
  ]

}


export const FooterLatestNewsLinks = {
  Heading:'Latest News',links :
  [
    {title:"A new cause to help",subTitle:"MArch 12, 2018"},
    {title:"We love to help people",subTitle:"MArch 12, 2018"},
    {title:"The new ideas for helping",subTitle:"MArch 12, 2018"},
  ]
}
