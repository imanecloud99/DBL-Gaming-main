import React from "react";

import Sidebar from "./Sidebar";
import BodyWrapper from "./BodyWrapper";



export const DashboardLayout = ({ children }) => {
  return (
    <BodyWrapper>
        
      <div className="flex">
        {/* <Sidebar /> */}

        

        <div className="col-md-12">
          <main className="content">
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="content-box"
              >
                {children}
              </div>
            </section>
          </main>
        </div>
      </div>
    </BodyWrapper>
  );
};
