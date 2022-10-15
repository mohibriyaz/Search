import React from "react";

const AdCard = ({
  primaryText,
  companyName,
  headline,
  description,
  CTA,
  imageUrl,
  companyUrl,
}) => {
  return (
    <div className="col">
      <div className="card rounded" style={{ width: "25rem" }}>
        <img
          src={imageUrl}
          style={{ width: "25rem", height: "350px", objectFit: "cover" }}
          className="card-img"
          alt={primaryText}
        />
        <div className="card-body">
          <small className="text-primary">{companyName}</small>
          <p className="h3 leading mt-0">{headline}</p>
          <p className="" style={{ fontSize: "20px", color: "#8D8D8D" }}>
            {primaryText}
          </p>
          <p className="card-text ">
            <small>{description}</small>
          </p>
          <a href={companyUrl} className="btn btn-dark">
            {CTA}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
