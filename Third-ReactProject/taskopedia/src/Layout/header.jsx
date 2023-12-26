import logo from "../images/react.png";

function MainHeader() {
    return(
        <div className="pt-2 py-2 pl-2" style={{backgroundColor: "black"}}>
            <img src={logo} alt="React Image" style={{ height:"35px", verticalAlign:"top"}}/>
            <span className="ms-3" style={{color:"white"}}>React Course - TaskOPedia</span>
        </div>
    );
  }
  
  const subHeaderStyle = {
    color: "red",
    backgroundColor:"yellow",
  }
  
  function SubHeader() {
    return(<p style={subHeaderStyle}>SUB-HEADING</p>)
  }
  
  const Header = () => {
    return(
      <div>
        <MainHeader></MainHeader>
        <SubHeader></SubHeader>
      </div>
    )
  }

export default Header;
