function MainHeader() {
    return(<h1 className="heading1">MAIN-HEADER</h1>)
  }
  
  const subHeaderStyle = {
    color: "red",
    backgroundColor:"yellow",
  }
  
  function SubHeader() {
    return(<p style={subHeaderStyle}>SUB-HEADING</p>)
  }
  
  function Header() {
    return(
      <div>
        <MainHeader></MainHeader>
        <SubHeader></SubHeader>
      </div>
    )
  }

  export default Header;