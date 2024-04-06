import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Tags from "../Tags/Tags";
import "./Timeline.css";

const Timeline = ({ items }) => {
  return (
    <VerticalTimeline>
      {items.map((item) => {
        const { id, date, icon, title, company, description, tags } = item;
        
        // Check if description is an array and render as list items if true
        const renderDescription = () => {
          if (Array.isArray(description)) {
            return (
              <ul>
                {description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            );
          }
          return <p>{description}</p>;
        };

        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={date}
            icon={icon}
            key={id}
          >
            <h2 className="vertical-timeline-element-title">
              <strong>{title}</strong>
            </h2>
            <h4 className="vertical-timeline-element-subtitle">{company}</h4>
            {/* Render description */}
            {renderDescription()}
            <Tags tags={tags} />
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
