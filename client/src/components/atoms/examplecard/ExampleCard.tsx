import React from 'react';
import './ExampleCard.scss';

interface ExampleCardProps {
  imgPath: string;
  header: string[];
  content: string;
}

const ExampleCard = ({ imgPath, header, content }: ExampleCardProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="example-card__container">
        <div>
          <img src={imgPath} alt="exampleImage" className="example-card__img" />
        </div>
        <div>
          <div className="example-card__header">
            {header.map((text) => (
              <div>{text}</div>
            ))}
          </div>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default ExampleCard;
