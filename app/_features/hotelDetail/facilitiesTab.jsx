"use client";

export const FacilitiesTab = ({ selectedTab }) => {
  return <>{selectedTab === 2 && <div className="tabPane py-5">Tab 2</div>}</>;
};
