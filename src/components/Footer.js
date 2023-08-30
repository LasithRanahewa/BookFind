import { Link, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { width } from "@mui/system";

import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

function Footer() {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#DAE1E7",
        color: "#142850",
        padding: "2%",
        
      }}
    >

      <Typography variant="h6" gutterBottom style={{textAlign: 'center', color: '#142850'}}>
        CONNECT
      </Typography>
      <Link href="https://web.facebook.com/"><FaFacebookSquare/></Link>
      <Link href="https://web.twitter.com/"><FaTwitterSquare/></Link>
      <Link href="https://www.linkedin.com/"><FaLinkedin/></Link>
      <Link href="https://www.instagram.com/"><FaInstagramSquare/></Link>
    </div>
  );
}

export default Footer;