import Cards from "../cards/Cards";
import "./Popular.css";
import PropTypes from "prop-types";

const Popular = ({ allItems }) => {
  return (
    <div className="wrap">
      {allItems !== undefined ? (
        <>
          <Cards item={allItems[0]} />
          <Cards item={allItems[1]} />
          <Cards item={allItems[2]} />
          <Cards item={allItems[3]} />
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

Popular.propTypes = {
  allItems: PropTypes.array,
};

export default Popular;
