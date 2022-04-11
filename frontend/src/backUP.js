<Accordion>
  <Card style={{ margin: 10 }}>
    {/* ========================== Card Header starts ==================== */}
    <Card.Header style={{ display: "flex" }}>
      <span className="span_text">
        <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
          {/* {notes.title} */}hello
        </Accordion.Toggle>
      </span>
      <div>
        <Button href={`/note/${notes._id}`}>Edit</Button>
        <Button
          variant="danger"
          className="mx-2"
          onClick={() => deleteHander(notes._id)}
        >
          Delete
        </Button>
      </div>
    </Card.Header>
    {/* ========================== Card Header Ends ==================== */}
    {/* ========================== Card Body starts ==================== */}
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <h4>
          <Badge className="bg-success">Category - {notes.category}</Badge>
        </h4>

        <blockquote className="blockquote mb-0">
          <p>{notes.content}</p>
          <footer className="blockquote-footer">Created On - date</footer>
        </blockquote>
      </Card.Body>
    </Accordion.Collapse>
    {/* ========================== Card Body Ends ==================== */}
  </Card>
</Accordion>;
//====================================================================================
import React from "react";
import "./MyNotes.css";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MainScreen } from "../../components/MainScreen";
import notes from "../../data/notes";
export const MyNotes = () => {
  const deleteHander = (id) => {
    if (window.confirm("Are You Sure ?")) {
    }
  };
  return (
    <div>
      <MainScreen title="Welcome Back User Sam.....">
        <Link to="createnote">
          <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
            Create New Note
          </Button>
        </Link>
        {notes.map((note) => (
          <Accordion defaultActiveKey="0">
            <Card style={{ margin: 10 }}>
              {/* ========================== Card Header starts ==================== */}
              <Card.Header style={{ display: "flex" }}>
                <span className="span_text">{note.title}</span>
                <div>
                  <Button href={`/note/${note._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHander(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              {/* ========================== Card Header Ends ==================== */}
              {/* ========================== Card Body starts ==================== */}

              <Card.Body>
                <h4>
                  <Badge className="bg-success">
                    Category - {note.category}
                  </Badge>
                </h4>

                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created On - date
                  </footer>
                </blockquote>
              </Card.Body>
              {/* ========================== Card Body Ends ==================== */}
            </Card>
          </Accordion>
        ))}
      </MainScreen>
    </div>
  );
};
