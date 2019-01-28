
import Head from 'next/head';
import Navbar from './Navbar';
//import Background from '../images/wood.jpg';

const Layout = (props) => (
      <div>
        <Head>
            <title>justinb.io</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
            {/* <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/> */}
        </Head>

        <Navbar />
        {props.children}
        {/* <div className="container">
            
            <div className="what" style={headerImage}>
                <h1 style={{height: '100px'}}>wtf</h1>
            </div>
        </div> */}
      </div>
);

const headerImage = {

    textAlign: 'center',
    border: 'solid black 1px'
    // position: 'relative',
    // width: '100%',
    // minHeight: 'auto',
    // textAlign: 'center',
    // color: 'white',
    // // backgroundImage: `url(${Background})`,
    // backgroundImage: "url('../images/wood.jpg')",
    // backgroundPosition: 'center',
    // backgroundAttachment: 'fixed',
    // backgroundRepeat: 'no-repeat',
    // // -webkit-background-size: 'cover',
    // // -moz-background-size: 'cover',
    // // -o-background-size: 'cover',
    // backgroundSize: 'cover',

}


export default Layout
