import React from "react";
import Action from "./Action";

const DetailActions = () => {
  return (
    <section className="section mx-auto my-3">
      <Action title="Edit" className="is-info" onClick={() => {}} />
      <Action title="Delete" className="is-danger" />
      <Action title="Favorite" className="is-success" />
    </section>
  );
};

export default DetailActions;
