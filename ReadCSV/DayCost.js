class DayCost {
  constructor(date, breakfast, lunch, dinner) {
    this.date = date;
    this.breakfast = breakfast;
    this.lunch = lunch;
    this.dinner = dinner;
    this.dailyTotal = Number(breakfast + lunch + dinner);
  }
}
