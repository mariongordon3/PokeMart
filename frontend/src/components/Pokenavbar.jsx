import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Pokenavbar(props) {
  // set state for our input value
  const {inputValue} = props
  const {setInputValue} = props

  // handler for the submission of the search
  function handleSubmit(event) {
    event.preventDefault(); // prevent the form from submitting
    // console.log('Input value on submit: ', inputValue);
    // function to fetch items based off of our inputValue
    const fetchItems = async () => {
      try {
        const response = await fetch(`http://localhost:5000/supplies/name/${inputValue}`);
        if (!response.ok) {
          throw new Error('Data could not be fetched!');
        }
        const json_response = await response.json();
        console.log(json_response)
        // setSupplies(json_response); // assign JSON response to the data variable.
      } catch (error) {
        console.error('Error fetching supplies', error);
      }
    };
    fetchItems();
    // const navigate = useNavigate();
    // navigate("/searchresult");
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAApVBMVEX///8AAAD/HBzfGBjf39/k5ORjY2PkHBxjExPkGRn7+/tjCwvMzMzo6Oj29vZXV1dXCQlNTU2YmJjMFhbv7++np6fDw8PW1tYwMDAKCgq1tbVzc3M7OzuCgoKJiYkeHh70GxtDQ0MlJSUXFxfBFxd1DAypExNra2txEhJRDAzVGBg0CAg4BgaFEhKeExNHCAghCQm4GBgoCQkbCgqRFxcsBAQQAADiPkksAAAM3UlEQVR4nO1dbXuaTBNtAthCAIuCCPiuicZGE9u0//+nPZrElplZ9o0Fcz+X50M+RdjD7MzOzM7OfvlyxRVXXHHFFf9hxE6apr5//OPElx6LNuy8tx7dEIzWvdy+9Nik4YWx3+tQFhCdnh+H3qXHyoUX2/5kLiJyxnzi2/EnJeQ5abKWJXLGOkmdz8cnGCTCucVGJxkElx49QNorFnpUTlgUvfTSDM7w8nGkz+Qd0Tj/DLMtTNbDulROGK6T8OJUoqkJKidMo8vSSYaZKSonZMPkYlR8o0w++PiXYOIFtbWejXnQuikIes1QOaHX7roTD+Yyo8p+Pj1+v9ts7k/YbO6+Pz79lPndfNCig22Pl6Lx/HrevO73h9XWcmez2e3t7fGva21Xh/1+t3n+I/j1ctyWZ+3lXf5Q/nx7fVht3RMFFmZu//Bw/8gn1G1nEQ3HXM/l5+7Qt6p4lBhtD/vNL85zFuMWFh2bZ8Sy3UqCyAcda9s/3HEeFjU+1XKO7/J8qJxaTLiWZW0fniqfN8yb5TKpprJxVYh8CMeyXLdfLZ5Jg1TCypDlx6uSTMpsjubO2v2ueG6nMcVxqrg877WonHCaapZ1pFMx2zoNKU5aweV5p03lJJwPOtv7ZzabRuI2n726PO2sGlT+sXHd1T1zsnUbcD0HTJP8535Vj8o/NpZrPdyxVtL5wDgXRkLvKJaHOjPsLz7YWO52z/LdRobZpMzlZVNzhlE27uob4z1Do3qTMuVyMCIWwOY41/Ys2RhkE8wZL8jMUTnC+gu3z3DZ5o4pLjHLjm1MUoFsLMZU6xqKcFjr/p+9YS6AjftK32jGF/DG9Mm/6xtkgplVosOwamMDAY6X0BzMc988F8Tm4Qd+aZbUZzOgRvmxES4lk3ZicyDO2rD2csNIKD1um+GC2KwIm6hm1sYr6BwztVJSzACbPtGbop4RSAiXF/UYTIGNBdiQBadW9jYgXG6a5AIn2pENsT11Jho1ZM1ygRPtqDfk/fpcaMTfmO7/ZWMBNgc8gLEuF5sI5tA0FzTRjqsnGkGmGUZ7xCrrZS0UAclsd2gMkd7SmeA9MY1kkgbQROt/h4OYalk0BwvmuXGFeYcF2ayQYxPpRAM9pDG/W1CYN8wQmz1cbrKeOhd/jgSza4kLtgHWV5TxnCunazy8M/bUhvK/A4tmi4bSU7UBPnaWG4hgpNmg1WaoKJoQC+auRS6YjDV7RKJRczh9vM/XJheiNdZXOBi1/XUimId2yWDRYEdASTQ22ul7apcLFY0FI7WFilODw5g2tf8NRDQPcEAKbkCIEpib9szymQwSjbuFubSR/DzzkWAaSmDwgOeZ+wAdEnkTgDKY960LhjHP0M5nV3qWXVpjbuk8IwZNdp4h9W/H88cgZFAsIGsCIJespre8Pex3m81uf1CLIPA8s3ACWo6LA3/0TTtPNpv1d8B9f9n1Z9L6R0Szgju4cmENSmPo5vtn/deXG4KX174kHbJuuvfgSXIFD3CR+aGn/rMVfHUJ9yspOnSePYDd6JEMF+TK6C2YfZyHANhJLVyEzBY4z1IuTQIcZq1dpRmnuucNUrvUgnm2lLFn8HDCk8bq73LF8v6Ndl81yBxAKn0t5hLCpIxGULZl7X4T3AktNVEaywUCj8Trpg/1Xz2NsWXXwBCIM1eEzGxTfsBI7J/1gMqob15aAnX5hyfRAkYlA5IBS3HOCe4uKedkXGkuR9kI/CSiNJYFamsKEZcY7pN/V+QCJ8LHFxyORqPhglFrL3DHqdLMwKfqiGoDUqj/qoYZBYRHJt2iN/DT1M97RUSqofmPZ1gA4J9FoiIUWFD6RzG97KLBTouktLTZyRrT4RtoSgbsPgm3n2FaJlPjcosSqd0cTYQ4Qdn4b2pkLPC1hFln6GX+UOMCM48ZqwbeRtvX3PiCWoAZsAACXxPVltyrkQG+03LC1M94AizBI+95DAsAFmRBBUoAP5xa7u8AXP5JxZvg93rhiYZhAYCnVPA3n22Yy1BzzIBZ5mQcgN5w/SVKBszkLt9x9qGCKi2Z0I/hvaX8f1yvRmDOIr5Dg8p+VLjcgjWA+5pB6R+zVxUyllV+icA252AhULPM5Whjzn3Ll/In45UUWi5B2Xws+ScfYJbph/tVHv2yLRM4tGXRPPbpiM/oU4DtWn58Bsm8fFPAYykRsxCEGmFpV/7X410lvlMAi6lCRhtVZvkMVqmkDlohI6zZG4ifIQM+GUOnL4WJE9vMe/jOmSEywmxjG2TI7r8epkIyjplj0dyKAENkMjEZMwfv+eUNbemMI36GDFrRmc9hAAyZZuEBy1ZMsyEyorp9j3PeUwUKZBbrjjzW3ZJOT0XuTGmnYdmtfk2XABoOBTJz25FHAEIhgQtQ3pvv+kHlQ30MdFyMTwaEAAu1uq5yxD3k/2s5n83LS5KvCTfCBSEADM7UKqGAJeSKpqz+vIyxZ2PEgIwgOINhs9rRKHjKjvef5f+bc9KSlEwKyAjCZpjQUDyDB7apOLEm+GC8LaMQc3GgSRckNGCqSbGEOAempup8SAhimSlvpsSYDOqpIkg1wahJuGeAAD55NpZJAnJrYAKiMjCtJ1rOAPWFIpkcvOqmkEjPclWYkoGWWZRrhsflFMngcqgoQfOAJM473McR/YeRQyZSA7iloXokAvuP2brchi3tkS0NfqxA9R+QEfbYgJtNyocIiG+XRcUkH6TpIJ8UEYnI+KMhlhnpv3CzKQT2VbpE7e/P6YG7o+oNK7YBBQpMjBk6l7wWLupgNEtVMuwz3RUQHVUk+m/DbX2xsQVb55n60XWbedqehblII8ksy0FZj8TWOSxq0DjilUrKhufHVJAZg6kqUdQAy02k6qAwG5mGmpm4awlxZtDmkUS5CfSwtBo+2GNhIimbiAv5sP4HOZzBEoVAsEQr02owFCYCxZnL9GV0MBnoCEmVaDlAy7p6h+98bpA/kZI3XjHR9F1IFWmCr6rbJiUcsFacNxQDqaCPzjLomMmpM1xmtRtZxf6E0WxvOvElQz68yjhI2HLn6GC2URAA8RDGPmweOB37sXQojlTGGSAvVvKEI7RFdZuO+vlkXBTjXq52UixEZALk9mWSz4E/W1+mmzKaZY6PVi/Zb4wONjTczI4ND5NBgZ985gh+BHb42zCQLXNS1HGcH9WVAQ8DZcZbcklAJBh5BUTHtIr2RYPVH7llKse0cGaifdHgWYYFo6LHDlxsZfxTo8DqH6DDyUOVY/R4b7Ntg4a8f9JPWe08cIo2UJsaNRvELiMuU7XABJ8HlokdzAEJhvRXUzyoTY7Qt3kLARJMgPt4qR6hJ/vOWYs2AArGIc0V1ftOoNJz/e416kBrDA6MhLk/BlBDkGlrFg0JpodOwOs0BCGdzcSpIUOACkNaw+t1OcNNdNbG2j9yARZ/4vlrNtH54iGLmKlaRL23AsGkpGRQM8NCGk9lbagNMMsO3VXQjuJJvqj5iy7gJKMlNjra/wFSFda0EfDKZtnBTRaOGlPj2TF+2LLh9vYBn4tiZQICmbNKzrcyypMsSGnarV6miLaeFO6q1EA5vgwY7a6Lmj1OA9IRWMebkEPZwaSL5dEq1056+eQDCSpW9FHmklMuEptLIngJmbrmO6i/oaQwTk7n2NJAI11WCeKiidWz5F86CeMiFdH5Ajl49MY/E+2G8VtKc2zC2HlbG3ojqy14zZ62FP/E4rC6kHeNvS9mXHCwNJtP5y6VR6NjMA9pzxkvyM0J568X49jMYmSzixvzYgBWCZYWzlwce8Dcdjd5LcAJpBPlCUN8dlkP54U/SHvMiyHUe02K4LMuBskKv76R+eASOPmaWT/QxCLNvrJlNKk71z64xIOCfR1UE1e2VJaRRJNahiB+4xKnY9Y8vmnqMp2j78Rmk82VW46WnvlGxa68U7jT2I4qwxd4x1A313EyYUepVN43ZmrdZwK3Cv6HQiNqi0/rvV99P7JWvk8BjAsczojyQEk+p/AlTeaVzzNwRYMI3DtBC9+WXnni1M8r62vePk4LBQhe9Qy/OVWU5L4tFlBsD3oF90Tg0MStJhIQXEGZdSZJnlZevhoGp7pgWhYM0W0tT29PRMcsT+XMvSQfpHbwftu8F8aBfWSR9CZr2kwHY1p7KVZAyL71DGMxirqddfGOdacbjeQuEY/kKtKM4f/oQt0jPOa1VAbQjS9y63la4+b5Kiwudx99bvh68NFFysHO8JKuuYvbu+ZzPooIk4o4RBGj9WXvoD9jMKl97Xk0uURRGxtpwvVxBBiOk8upPQuxn3C9xmoUiWylc5sIUr4XzGRydOIuPe4qxE7ak9afqJc6n1AmZXhhmCbVweMH1kkahpc2xPJwBgmj1+QyKpJBO5UeTSA8ev5vsNWC6iuuuOKKK674bPgf0xgbfbHBS6gAAAAASUVORK5CYII="
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          PokeMart
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
        </Nav>
        <Form inline="true" onSubmit={handleSubmit}>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
}


export default Pokenavbar;
