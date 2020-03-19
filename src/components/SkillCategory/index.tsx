import React, { FunctionComponent } from 'react';
import Card from 'src/components/Shared/Card';

const SkillCategory: FunctionComponent<{}> = () => {
  return (
      <section className="c-skillCategorySection">
        <div>
          <h3 className="tc">What skill do you need help with?</h3>
        </div>
        <div>
          <h4 className="tc">Explore Skill Categories</h4>
          <div className="c-cardWrapper flex-ns w-100 justify-between">
          <Card>
            <h5>Programming</h5>
            <p>JavaScript</p>
            <p>Data Science</p>
            <p>Web Programming</p>
          </Card>
          <Card>
            <h5>Design</h5>
            <p>Photoshop</p>
            <p>Gimp</p>
            <p>UI/UX Design</p>
          </Card>
          <Card>
            <h5>Communication</h5>
            <p>Effective Communication</p>
            <p>Public Speaking</p>
            <p>Language</p>
          </Card>
          </div>
        </div>
      </section>
  );
};

export default SkillCategory;
