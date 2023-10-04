import "./index.css";

const HistoryItems = (props) => {
  const { each, onClickDelete } = props;
  const { id, timeAccessed, logoUrl, title, domainUrl } = each;
  const onDelete = () => {
    onClickDelete(id);
  };
  return (
    <li>
      <h1 className="time">{timeAccessed}</h1>
      <div className="content-flex">
        <div className="content-item">
          <img src={logoUrl} alt={title} className="app-logo" />
          <span>
            {title}
            <a href={`https://www.${domainUrl}`} className="link-text">
              {domainUrl}
            </a>
          </span>
        </div>
        <button type="button" className="delete-icon" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete-icon"
          />
        </button>
      </div>
    </li>
  );
};
export default HistoryItems;
