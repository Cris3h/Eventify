import React, { useState } from "react";
import { SidebarProps } from "@/types";
import Image from "next/image";
import schedule from "@/images/icons/schedule.png";
import plus from "@/images/icons/plus.png";
import account from "@/images/icons/account.png";
import menu from "@/images/icons/menu.png";
import xButton from "@/images/icons/x-button.png";
import settings from "@/images/icons/settings.png";

import { eventsExample } from "@/test";

interface Event {
  name: string;
}

const user = { name: "Jhon", lastName: "Doe" };

const Sidebar: React.FC<SidebarProps> = ({ sidebarState, setShowSidebar }) => {
  const [eventList, setEventList] = useState<string[]>([]);
  const [showEvents, setShowEvents] = useState<boolean>(false);
  const [newEventModalState, setNewEventModalState] = useState<boolean>(false);

  const handleShowAllEvents = (events: Event[]) => {
    let eventNames = events.map((e: any, i: any) => e.name);
    setShowEvents(!showEvents);
    setEventList(eventNames);
  };

  const handleNewEventModal = (event: Event[]) => {
    setNewEventModalState(!newEventModalState);
  };

  return (
    <div
      className={
        sidebarState
          ? "bg-orange-700 h-full flex flex-col w-48 md:w-56 lg:w-60 xl:w-72"
          : ""
      }
    >
      <button
        onClick={() => setShowSidebar(!sidebarState)}
        className={sidebarState ? "self-end p-2" : ""}
      >
        {!sidebarState ? (
          <div className="w-20">
            <Image
              src={menu}
              width={50}
              height={5}
              alt="open user side menu"
              className={!sidebarState ? "p-2" : ""}
            />
          </div>
        ) : (
          <div className="w-3 xl:w-4">
            <Image
              src={xButton}
              width={50}
              height={5}
              alt="close user side menu"
            />
          </div>
        )}
      </button>

      {sidebarState && (
        <div className="text-white w-65 h-screen mr-2 ml-2 ">
          <div className="flex flex-row-reverse m-2">
            <p className="text-xs p-1 text-amber-400 border rounded-md">
              Admin{/* user status (admin / member) */}
            </p>
          </div>

          <div className=" m-2 mb-14">
            <p className="text-xl text-white ">
              Welcome{" "}
              {user.name ? `${user.name} ${user.lastName}!` : "Jake Smith!"}
            </p>
          </div>

          <div className="flex flex-col">
            <ul className="h-3/4">
              <div
                onClick={() => handleShowAllEvents(eventsExample)}
                className={
                  showEvents ? "flex m-2 gap-2 mb-4" : "flex m-2 gap-2 mb-10"
                }
              >
                <Image
                  src={schedule}
                  alt="schedule user "
                  width={20}
                  height={5}
                  className="drop-shadow-2xl"
                />
                <li className=" border-b-2 border-orange-200"> Events </li>
              </div>
              {showEvents && (
                <div className="ml-6 mr-2 mb-10">
                  <ul>
                    {eventList.map((pos, i) => (
                      <li key={i}>{pos}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex m-2 gap-2 mb-10">
                <Image
                  src={plus}
                  width={20}
                  height={5}
                  alt="user add new event"
                />
                <li className="border-b-2 border-orange-200">New Event</li>
              </div>

              <div className="flex m-2 gap-2 mb-10">
                <Image
                  src={account}
                  width={20}
                  height={5}
                  alt="user profile section"
                />
                <li className="border-b-2 border-orange-200">
                  Profile
                  {/* opens the profile section.- Change events name, user name, user password, and more */}
                </li>
              </div>

              <div className="flex m-2 gap-2 mb-10">
                <Image
                  src={settings}
                  width={20}
                  height={5}
                  alt="admin settings section"
                />
                <li className="border-b-2 border-orange-200">
                  Settings
                  {/*this is admin exclusive section.- Delete an event, delete a specific user from an event, and more */}
                </li>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default Sidebar;