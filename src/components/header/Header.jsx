import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <>
  <div className='bg-primary p-3 d-flex justify-content-evenly'>
        <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home" className='text-white fs-5 mx-5'>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className='text-white fs-5 mx-5'>Courses</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className='text-white fs-5 mx-5'>About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className='text-white fs-5 mx-5'>Contect</Nav.Link>
        
      </Nav.Item>
    </Nav>
    </div>
    </>
  );
}

export default Header
