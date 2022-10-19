// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
//import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Fusion Sky",
    image: logoCT,
    route: "/",
  },
  socials: [

    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/thinkmariale",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/thinkmariale",
    },
    // {
    //   icon: <YouTubeIcon />,
    //   link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    // },
  ],
  menus: [
    // {
    //   name: "legal",
    //   items: [
    //     { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
    //     { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
    //     { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
    //   ],
    // },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Fusion Sky {" "}
      <MKTypography
        component="a"
        href="https://fusion-sky.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
      
      </MKTypography>
      .
    </MKTypography>
  ),
};
