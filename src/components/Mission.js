/* eslint-disable react/prop-types */
import React from 'react';

const Mission = (props) => {
  const { description, name } = props;
  return (
    <>
      <td className="font-bold">
        {name}
      </td>
      <td>
        {description}
      </td>
      <td className="align-middle">
        <button type="submit" className=" btn btn-primary">
          Not A member
        </button>
      </td>
      <td className="align-middle">
        <button type="submit" className=" btn btn-light border">
          Join mission
        </button>
      </td>
    </>
  );
};
export default Mission;
