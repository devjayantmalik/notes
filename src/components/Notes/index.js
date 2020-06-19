import React from "react";
import NoteCard from "./NoteCard";

export default class Notes extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="columns is-multiline">
          <NoteCard
            note={{
              title:
                "Hello, Jane! You forgot to pickup the lunch. By the way, no need to worry we all forget it.",
              description:
                "This is the world's best experience of the developers working with taking notes for you.This is the world's best experience of the developers working with taking notes for you.This is the world's best experience of the developers working with taking notes for you.",
              category: "Arts",
              date: new Date(),
            }}
            detailUrl="/"
            editUrl="/"
            deleteUrl="/"
          />
          <NoteCard
            note={{
              title:
                "Hello, Jane! You forgot to pickup the lunch. By the way, no need to worry we all forget it.",
              description:
                "This is the world's best experience of the developers working with taking notes for you.This is the world's best experience of the developers working with taking notes for you.This is the world's best experience of the developers working with taking notes for you.",
              category: "Arts",
              date: new Date(),
            }}
            detailUrl="/"
            editUrl="/"
            deleteUrl="/"
          />
          <NoteCard
            note={{
              title:
                "Hello, Jane! You forgot to pickup the lunch. By the way, no need to worry we all forget it.",
              description:
                "This is the world's best experience of the developers working with taking notes for you.This is the world's best experience of the developers working with taking notes for you.This is the world's best experience of the developers working with taking notes for you.",
              category: "Arts",
              date: new Date(),
            }}
            detailUrl="/"
            editUrl="/"
            deleteUrl="/"
          />
          <NoteCard
            note={{
              title:
                "Hello, Jane! You forgot to pickup the lunch. By the way, no need to worry we all forget it.",
              description:
                "This is the world's best experience of the developers working with taking notes for you.This is the world's best experience of the developers working with taking notes for you.This is the world's best experience of the developers working with taking notes for you.",
              category: "Arts",
              date: new Date(),
            }}
            detailUrl="/"
            editUrl="/"
            deleteUrl="/"
          />
          <NoteCard
            note={{
              title:
                "Hello, Jane! You forgot to pickup the lunch. By the way, no need to worry we all forget it.",
              description:
                "This is the world's best experience of the developers working with taking notes for you.This is the world's best experience of the developers working with taking notes for you.This is the world's best experience of the developers working with taking notes for you.",
              category: "Arts",
              date: new Date(),
            }}
            detailUrl="/"
            editUrl="/"
            deleteUrl="/"
          />
          <NoteCard
            note={{
              title:
                "Hello, Jane! You forgot to pickup the lunch. By the way, no need to worry we all forget it.",
              description:
                "This is the world's best experience of the developers working with taking notes for you.This is the world's best experience of the developers working with taking notes for you.This is the world's best experience of the developers working with taking notes for you.",
              category: "Arts",
              date: new Date(),
            }}
            detailUrl="/"
            editUrl="/"
            deleteUrl="/"
          />
        </div>
      </section>
    );
  }
}
