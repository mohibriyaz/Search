import React from "react";

const AdCard = ({
  primaryText,
  companyName,
  headline,
  description,
  CTA,
  imageUrl,
}) => {
  return (
    <div className="col">
   <div className="card" style={{width:"25rem"}}>
      <img src={imageUrl} className="card-img" alt={primaryText} />
      <div className="card-body">
        <h5 className="card-title">{primaryText}</h5>
        <p className="card-text">{headline}</p>
        <p className="card-text">
          <small>
            {companyName} {description}
          </small>
        </p>
        <a href="#" className="btn btn-primary">
          {CTA}
        </a>
      </div>
    </div>
    </div>
  );
};

export default AdCard;
