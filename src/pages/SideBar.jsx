import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FaFileInvoice } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";

function SideBar() {
  return (
    <div className="sidebar" style={{ backgroundColor: '#6562ff', color: '#FFFFFF', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        {/* Logo Section */}
        <img src="https://i.ibb.co/gjrzrzL/mainlogo.png" alt="mainlogo" />
        <p style={{ color: '#FFFFFF' }}>Board.</p>
      </div>
      <div className="sidebar_mid">
        {/* Sidebar Items */}
        <div className="main1">
          <div>
            <RxDashboard size={24} style={{ color: '#FFFFFF' }} />
          </div>
          <div style={{ color: '#FFFFFF' }}>Dashboard</div>
        </div>
        <div className="main1">
          <div>
            <FaFileInvoice size={24} style={{ color: '#FFFFFF' }} />
          </div>
          <div style={{ color: '#FFFFFF' }}>Transactions</div>
        </div>
        <div className="main1">
          <div>
            <AiFillSchedule size={24} style={{ color: '#FFFFFF' }} />
          </div>
          <div style={{ color: '#FFFFFF' }}>Schedules</div>
        </div>
        <div className="main1">
          <div>
            <SlCalender size={24} style={{ color: '#FFFFFF' }} />
          </div>
          <div style={{ color: '#FFFFFF' }}>Users</div>
        </div>
        <div className="main1">
          <div>
            <IoSettingsOutline size={24} style={{ color: '#FFFFFF' }} />
          </div>
          <div style={{ color: '#FFFFFF' }}>Settings</div>
        </div>
      </div>
      <div>
        {/* Optional: Add more items at the bottom */}
      </div>
    </div>
  );
}

export default SideBar;
