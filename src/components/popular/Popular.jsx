import "./Popular.css";

const Popular = ({ allItems }) => {
  return (
    <div className="wrap">
      {allItems !== undefined ? (
        <>
          <div>{allItems[0].title}</div>
          <div>{allItems[1].title}</div>
          <div>{allItems[2].title}</div>
          <div>{allItems[3].title}</div>
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Popular;
