import "./App.css";

import Card from "./Card";

function CourseCard() {
  return (
    <>
      <div className="new-card">
        <Card
          degree="Business"
          description="The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link"
        />
        <Card
          degree="Computer Science"
          description="The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link"
        />
        <Card
          degree="Law"
          description="The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link"
        />

        <Card
          degree="Finance"
          description="The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link"
        />

        <Card
          degree="Engineering"
          description="The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link"
        />
      </div>
    </>
  );
}

export default CourseCard;
