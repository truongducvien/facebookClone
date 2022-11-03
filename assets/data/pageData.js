import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { 
   faUserGroup, faTv, faUsersRectangle, faShop, faClockRotateLeft, faBullhorn, faChartSimple, faDroplet, faCalendar, faCalendarDays, faCreditCard, faStar, faGamepad, faFlag 
} from "@fortawesome/free-solid-svg-icons";

const users = {
   id: 1,
   name: 'Đức Viễn'
}

const OPTIONS = [
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

const API_URL = 'http://localhost:3000/api/'

const shortcutPages = [
   {id: 1, name: "Việc làm CNTT Đà Nẵng", href: '/viec_lam_cntt_dn', url: 'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/42694045_1793151457400110_6500929921622212608_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8631f5&_nc_ohc=G9GAEllM5u0AX-cA6Pq&_nc_ht=scontent.fdad3-3.fna&oh=00_AfAqy_QaxooWBDa0eZNjbmlBfMXFUBzDcczmJjwwVSVtXA&oe=6384CDA7'},
   {id: 2, name: "SaiGon Technology Family - Da Nang", href: '/saigon_technology_family', url: 'https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/310410217_3086714001475177_4283632674836773599_n.jpg?stp=dst-jpg_p600x600&_nc_cat=111&ccb=1-7&_nc_sid=8631f5&_nc_ohc=8ZYY9h8YLf0AX-BqWjL&_nc_ht=scontent.fdad3-3.fna&oh=00_AfD8FFVVpelNUMuc4UVVxWHPTlExGoqUj_n-PuiB4QkzUQ&oe=636401C7'},
]

const stories = [
   {
      id: 1,
      username: "User 1",
      imageUrl: "https://via.placeholder.com/600/5e3a73",
   },
   {
      id: 2,
      username: "User 2",
      imageUrl: "https://via.placeholder.com/600/35185e",
   },
   {
      id: 3,
      username: "User 3",
      imageUrl: "https://via.placeholder.com/600/3a0b95",
   },
   {
      id: 4,
      username: "User 4",
      imageUrl: "https://via.placeholder.com/600/29fe9f",
   },
   {
      id: 5,
      username: "User 5",
      imageUrl: "https://via.placeholder.com/600/8e973b",
   }
]

const posts = [
   {
      id: 1,
      username: 'User 1',
      userAvatar: 'https://via.placeholder.com/150/92c952',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: "https://via.placeholder.com/600/92c952",
   },
   {
      id: 2,
      username: 'User 2',
      userAvatar: "https://via.placeholder.com/150/24f355",
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sudah merupakan fakta bahwa seorang pembaca akan terpengaruh oleh isi tulisan dari sebuah halaman saat ia melihat tata letaknya. Maksud penggunaan Lorem Ipsum adalah karena ia kurang lebih memiliki penyebaran huruf yang normal.',
      imageUrl: "https://via.placeholder.com/600/d32776",
   },
   {
      id: 3,
      username: 'User 3',
      userAvatar: "https://via.placeholder.com/150/54176f",
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: "https://via.placeholder.com/600/501fe1",
   },
   {
      id: 4,
      username: 'User 4',
      userAvatar: "https://via.placeholder.com/150/ee0a7e",
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: "https://via.placeholder.com/600/46e3b1",
   },
]
const comment_API = 'https://jsonplaceholder.typicode.com/comments'

const watchData = [
   {id: 1, title: "Video 1", detail: 'This is detail of video 1'},
   {id: 2, title: "Video 2", detail: 'This is detail of video 2'},
   {id: 3, title: "Video 3", detail: 'This is detail of video 3'},
   {id: 4, title: "Video 4", detail: 'This is detail of video 4'},
   {id: 5, title: "Video 5", detail: 'This is detail of video 5'},
]

export { 
   OPTIONS, 
   API_URL, 
   shortcutPages,
   stories, 
   posts, 
   comment_API,
   users,
   watchData
}