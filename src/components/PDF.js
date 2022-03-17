import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <h1>{props.title}</h1>

        <p>{props.content}</p>
        <img src={props.image} alt={props.image} />
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Descargar como PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;