import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { 
   faUserGroup, faTv, faUsersRectangle, faShop, faClockRotateLeft, faBullhorn, faChartSimple, faDroplet, faCalendar, faCalendarDays, faCreditCard, faStar, faGamepad, faFlag 
} from "@fortawesome/free-solid-svg-icons";

export const OPTIONS = [
   {href: '/friends', name: 'Friends', icon: faUserGroup},
   {href: '/watch', name: 'Watch', icon: faTv},
   {href: '/groups', name: 'Groups', icon: faUsersRectangle},
   {href: '/market', name: 'Market place', icon: faShop},
   {href: '/memories', name: 'Memories', icon: faClockRotateLeft},
   {href: '/ad_centre', name: 'Ad Centre', icon: faBullhorn},
   {href: '/ads_manager', name: 'Ads Manager', icon: faChartSimple},
   {href: '/donation', name: 'Blood Donations', icon: faDroplet},
   {href: '/event', name: 'Event', icon: faCalendarDays},
   {href: '/facebook_pay', name: 'Facebook Pay', icon: faCreditCard},
   {href: '/favorites', name: 'Favorites', icon: faStar},
   {href: '/gaming_video', name: 'Gaming Videos', icon: faGamepad},
   {href: '/messenger', name: 'Messenger', icon: faFacebookMessenger},
   {href: '/pages', name: 'Pages', icon: faFlag},
]

export const API_URL = 'https://my-json-server.typicode.com/truongducvien/facebookClone/users'

export const shortcutPages = [
   {id: 1, name: "Việc làm CNTT Đà Nẵng", href: '/viec_lam_cntt_dn', url: 'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/42694045_1793151457400110_6500929921622212608_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8631f5&_nc_ohc=G9GAEllM5u0AX-cA6Pq&_nc_ht=scontent.fdad3-3.fna&oh=00_AfAqy_QaxooWBDa0eZNjbmlBfMXFUBzDcczmJjwwVSVtXA&oe=6384CDA7'},
   {id: 2, name: "SaiGon Technology Family - Da Nang", href: '/saigon_technology_family', url: 'https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/310410217_3086714001475177_4283632674836773599_n.jpg?stp=dst-jpg_p600x600&_nc_cat=111&ccb=1-7&_nc_sid=8631f5&_nc_ohc=8ZYY9h8YLf0AX-BqWjL&_nc_ht=scontent.fdad3-3.fna&oh=00_AfD8FFVVpelNUMuc4UVVxWHPTlExGoqUj_n-PuiB4QkzUQ&oe=636401C7'},
]