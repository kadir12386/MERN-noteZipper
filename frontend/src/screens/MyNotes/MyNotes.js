import React, { useEffect, useState } from "react";
import "./MyNotes.css";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MainScreen } from "../../components/MainScreen";
import axios from "axios";
export const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHander = (id) => {
    if (window.confirm("Are You Sure ?")) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  };

  console.log(notes);

  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div>
      <MainScreen title="Welcome Back User Sam.....">
        <Link to="createnote">
          <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
            Create New Note
          </Button>
        </Link>
        {notes.map((note) => (
          <Accordion defaultActiveKey="0" key={note._id}>
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
