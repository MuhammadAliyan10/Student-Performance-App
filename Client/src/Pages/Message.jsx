import React, { useEffect, useState } from "react";
import "../assets/Css/Message.css";
import studentData from "../Data/studentData";
import Notification from "../Algorithm/Queue";

const Message = () => {
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    const student = studentData[6];
    let notificationInstance = new Notification();
    notificationInstance.sendLowGPANotifications(student, 2.5);
    notificationInstance.sendLowProgressNotifications(student, 50);

    const displayNotifications = async () => {
      let notificationStudent = notificationInstance.getNotification();
      setNotification(notificationStudent);
    };

    displayNotifications();
  }, []);
  console.log(notification);

  return (
    <div>
      <div className="container">
        <h2>Message</h2>
        <div className="message__box">
          {notification && (
            <div className="notification">
              {notification.map((notify, index) => {
                return (
                  <ul key={index}>
                    <li>
                      <i className="fa-solid fa-triangle-exclamation"></i>
                      <p>{notify.message}</p>
                    </li>
                  </ul>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
