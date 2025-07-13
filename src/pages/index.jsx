import React from "react";
import RuleList from "../Components/RuleList";
import SummarySidebar from "../Components/SummarySidebar";

const Index = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 pt-10">
      <div className="flex w-full items-center justify-center max-w-5xl gap-8 "> 
        <RuleList />
        <SummarySidebar />
      </div>
    </div>
  );
};

export default Index;
