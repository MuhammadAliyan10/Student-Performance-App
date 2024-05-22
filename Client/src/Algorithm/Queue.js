class Notification {
  constructor() {
    this.capacity = 30;
    this.queueArray = new Array(this.capacity).fill(null);
    this.front = -1;
    this.rear = -1;
  }

  addNotification(notification) {
    if (this.rear === this.capacity - 1) {
      return "The queue is full.";
    }
    if (this.front === -1) {
      this.front = 0;
    }
    this.queueArray[++this.rear] = notification;
    return "Notification added successfully.";
  }

  getNotification() {
    if (this.front === -1) {
      return [{ message: "No notifications." }];
    }

    const notifications = [];
    for (let i = this.front; i <= this.rear; i++) {
      notifications.push(this.queueArray[i]);
    }

    this.front = -1;
    this.rear = -1;

    return notifications;
  }

  showArray() {
    console.log(this.queueArray);
  }

  sendLowGPANotifications(student, threshold) {
    if (student.sgpa < threshold) {
      const message = `Your GPA is below ${threshold}. Please review your performance.`;
      this.addNotification({ message: message });
    }
  }

  sendLowProgressNotifications(student, threshold) {
    if (student.totalProgress < threshold) {
      const message = `Your progress is below ${threshold}. Please review your performance.`;
      this.addNotification({ message: message });
    }
  }
}

export default Notification;
