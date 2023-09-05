import { Link, Typography } from "@mui/material"

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#DAE1E7",
        color: "#142850",
        height: "10vh",
        // position: "fixed",
        // position: "absolute",
        //bottom: 0,
        width: "100%",
        paddingBottom: "2rem",
        paddingTop: "2rem",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        style={{ textAlign: "center", color: "#142850", fontSize: "0.9rem" }}
      >
        CONNECT WITH US
      </Typography>

      <Link href="https://web.facebook.com/">
        <FacebookIcon
          style={{ fontSize: "1.5rem", color: "#142850", padding: "0 0.3rem" }}
        />
      </Link>

      <Link href="https://www.linkedin.com/">
        <LinkedInIcon
          style={{ fontSize: "1.5rem", color: "#142850", padding: "0 0.3rem" }}
        />
      </Link>

      <Link href="https://www.twitter.com/">
        <TwitterIcon
          style={{ fontSize: "1.5rem", color: "#142850", padding: "0 0.3rem" }}
        />
      </Link>

      <Link href="https://www.instagram.com/">
        <InstagramIcon
          style={{ fontSize: "1.5rem", color: "#142850", padding: "0 0.3rem" }}
        />
      </Link>
    </div>
  );
}

export default Footer;
