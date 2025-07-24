"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "../../ui/sidebar";
import SidebarNavigations from "./sidebar-navigations";
import SidebarBottom from "./sidebar-footer";
import SidebarTop from "./sidebar-header";
import { SidebarToggleButton } from "./sidebar-toggle-button";

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarTop />
      </SidebarHeader>
      <SidebarToggleButton />
      <SidebarContent>
        <SidebarNavigations />
      </SidebarContent>
      <SidebarFooter>
        <SidebarBottom />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
