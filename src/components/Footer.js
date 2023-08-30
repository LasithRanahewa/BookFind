import { Link, Typography } from "@material-ui/core";


import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#DAE1E7",
        color: "#142850",
        padding: "2%",
        height: "10vh",
      }}
    >

      <Typography variant="h6" gutterBottom style={{textAlign:"center", color:"#142850", fontSize:"1rem"}}>CONNECT</Typography>
      
      <Link href="https://web.facebook.com/">
        <FaFacebookSquare style={{ fontSize: "1.5rem", color: "#142850", padding: "0 0.3rem" }} />
      </Link>
      <Link href="https://web.twitter.com/">
        <FaTwitterSquare style={{ fontSize: "1.5rem", color: "#142850" , padding: "0 0.3rem" }} />
      </Link>
      <Link href="https://www.linkedin.com/">
        <FaLinkedin style={{ fontSize: "1.5rem", color: "#142850" , padding: "0 0.3rem"  }} />
      </Link>
      <Link href="https://www.instagram.com/">
        <FaInstagramSquare style={{ fontSize: "1.5rem", color: "#142850" , padding: "0 0.3rem"  }} />
      </Link>
    </div>
  );
}

export default Footer;
