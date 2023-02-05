import React, { useState } from "react";

const Tab = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="tab">
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-header-item ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

const Example = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Tab 1",
      content: <p>This is tab 1</p>
    },
    {
      label: "Tab 2",
      content: <p>This is tab 2</p>
    },
    {
      label: "Tab 3",
      content: <p>This is tab 3</p>
    }
  ];

  return <Tab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />;
};

export default Example;
