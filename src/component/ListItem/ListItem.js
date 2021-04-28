import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ mass, onDelete }) => {
  return (
    <ul>
      {mass !== undefined &&
        mass.map(({ id, text, number }) => {
          return (
            <li key={id}>
              <span> {text} : </span>
              <span> {number}</span>
              <button type="button" onClick={() => onDelete(id)}>
                Удалить
              </button>
            </li>
          );
        })}
    </ul>
  );
};
export default ListItem;

ListItem.propTypes = {
  mass: PropTypes.array,
  onDelete: PropTypes.func,
};
