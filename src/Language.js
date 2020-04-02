import GetAppIcon from '@material-ui/icons/GetApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
//import HomeIcon from '@material-ui/icons/Home';


const debugUrl ="http://localhost:3002";
const mainUrl = "http://beclose.co";

const pageUrl = debugUrl;

const footer ={
    title:'Footer',
    description:"Made with fusion of love and sky",
    terms:pageUrl + "/terms", 
    policy:pageUrl + "/policy", 
    social: [
        { name: 'Instagram', icon: InstagramIcon, url:'#' },
        { name: 'Facebook', icon: FacebookIcon, url:'#' },
        { name: 'Twitter', icon: TwitterIcon, url:'#' },
        { name: 'LinkedIn', icon: LinkedInIcon, url:'#' },
        { name: 'YouTube', icon: YouTubeIcon, url:'#' },
      ],
    contact:{
        title:'Contact Us',
        contact:"contact@fusion-sky.com"
    },
}

const english = {
    headerHome:{
        title: 'Fusion Sky',
        icon:MenuIcon,
        sections:[
            { title: 'About', url: '#about' },
            { title: 'Consulting', url: '#consulting' },
            { title: 'Apps', url: '#apps' },
        ],
        language:"/images/spanish.png",
        logo:'/images/logo_sm.png',
        languageT : "Spanish",
        path:""
    },
    intro:{
        title:"The Fusion of the Future",
        description:"We build engaging interactive experiences with the use of new technology to expand our universe",
        description1:".",
        logo: '/images/logo_s.png',
        backImage: '/images/back_1_crop.jpg',
    },
    consulting:{
        title: 'Consulting',
        description1: "Interested in building mobile/web AR or VR applications? Our team's background focuses on computer vision, artificial intelligence, and mobile full stack development to create a variety of experiences. Our projects go from projection mapping installations to ARKit/ARCore applications. ",
        description2: "Focused on the future of Mixed Reality and AI.",
        description3: "contact@fusion-sky.com",
        backImage:'',
        imgText:''
    },
    products:{
        title: 'Public Apps',
        cards:[{
            // image:"/images/iPad3.png",
            // title:"MaskMapper",
            // decription:"Coming soon...",
            // color:"#A2D9E7"
            // },{
            image:"/images/beclose_trans.png",
            title:"BeClose",
            decription:"Partner with BeClose team",
            color:"#fff"
            }
        ]
    },
   
    footer:footer,
    terms:{
        title:"Terms of Use",
        image: '/images/back_1.jpg',
        imgText: 'background',
    },
    policy:{
        title:"Privacy Policy",
        image: '/images/back_1.jpg',
        imgText: 'background',
    }
}

//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
const spanish = {
    headerHome:{
        title: 'Fusion Sky',
        icon:MenuIcon,
        sections:[
            { title: 'Nosotros', url: '#about' },
            { title: 'Consultoría', url: '#consulting' },
            { title: 'Apps', url: '#apps' },
        ],
        language:"/images/english.png",
        languageT : "English",
        logo:'/images/logo_sm.png',
        path:""
    },
    intro:{
        description1:".",
        logo: '/images/logo_s.png',
        backImage: '/images/back_1_crop.jpg',
        title:"La Fusión del Futuro",
       description:"Creamos experiencias interactivas con el uso de tecnologías nueva para expandir el universo"
    },
    consulting:{
        title: 'Consultoría',
        description1: "Interesado en crear aplicaciones digitales en realidad mixta/augmentada (AR/MR) o realidad virtual (VR)? Nuestro equipo se enfoca en 'computer vision', inteligencia artificial y full stack digital para desarrollar este tipo de experiencias. Con más de 10 años de experiencia en este campo.",
        description2: "Enfocada en el futuro de Realidad Mixta y Inteligencia Artificial.",
        description3: "contact@fusion-sky.com",
        image:'',
    },
    products:{
        title: 'Apps',
        cards:[{
            // image:"/images/iPad3.png",
            // title:"MaskMapper",
            // decription:"Coming soon...",
            // color:"#A2D9E7"
            // },{
            image:"/images/beclose_trans.png",
            title:"BeClose",
            decription:"Partner con el equipo de BeClose",
            color:"#fff"
            }
        ]
    },
    contact:{
        title:'Contact Us',
        contact:"contact@fusion-sky.com"
    },
    footer:footer,
    terms:{
        title:"Terms of Use",
        image: '/images/back_1.jpg',
        imgText: 'background',
    },
    policy:{
        title:"Privacy Policy",
        image: '/images/back_1.jpg',
        imgText: 'background',
    }
   
}

export {english, spanish}