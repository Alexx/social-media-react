import React from 'react';
import { Button, Form, FormControl} from 'react-bootstrap'

function Search(){

  return (
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
}

export default Search;
