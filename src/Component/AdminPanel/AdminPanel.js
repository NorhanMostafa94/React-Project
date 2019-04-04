import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import BookAdmin from "../Books/Admin";
import AuthorAdmin from "../Authors/Admin"

const AdminPanel = () => {
  return (
    <Tabs defaultActiveKey="Categories" id="Admin-Panel">
      <Tab eventKey="Categories" title="Categories">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="Books" title="Books">
        <BookAdmin />
      </Tab>
      <Tab eventKey="Authors" title="Authors">
      <AuthorAdmin/>
      </Tab>
    </Tabs>
  );
};

export default AdminPanel;
