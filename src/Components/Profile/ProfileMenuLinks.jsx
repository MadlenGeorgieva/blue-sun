import ticketIcon from "../../assets/ticket.png";
import friendsIcon from "../../assets/friends-dark.png";
import scheduleIcon from "../../assets/schedule-dark.png";
import notificationIcon from "../../assets/notification-dark.png";
import locationIcon from "../../assets/map-dark.png";
import helpIcon from "../../assets/settings.png";

export const festivalLinks = [
  {
    icon: ticketIcon,
    title: "My Ticket",
    text: "View your ticket and details",
    link: "/home",
  },
  {
    icon: friendsIcon,
    title: "Friends",
    text: "See your friends locations",
    link: "/friends",
  },
  {
    icon: scheduleIcon,
    title: "Schedule",
    text: "Be updated with the latest schedule",
    link: "/schedule",
  },
];

export const settingsLinks = [
  {
    icon: notificationIcon,
    title: "Notifications",
    text: "Manage your preference",
    link: "/notifications",
  },
  {
    icon: locationIcon,
    title: "Location Sharing",
    text: "Control who can see your location",
    link: "/map",
  },
  {
    icon: helpIcon,
    title: "Help",
    text: "Get support and info",
    link: "/help",
  },
];