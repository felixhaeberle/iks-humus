import React from 'react';

function Pagination(props) {
  return (
    <div className="pagination">
      <div className="pagination-content">
        <p>{props.activeScene} / {props.scenesSize}</p>
      </div>
      <div className="reload" onClick={props.reload}></div>
    </div>
  );
}

export default Pagination;