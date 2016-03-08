export default function(state = {}, action) {
  switch (action.type) {
    case 'TICK':
      const { now } = action;

      const m = now.getMinutes()

      return {
        m,
        h: (now.getHours() + (m >= 40 ? 1 : 0)) % 12,
        past: m >= 5 && m < 35,
        to: m >= 35,
        oclock: m >= 0 && m < 5,
        oneMinute: m % 5 >= 1,
        twoMinutes: m % 5 >= 2,
        threeMinutes: m % 5 >= 3,
        fourMinutes: m % 5 >= 4,
        fiveMinutes: (m >= 5 && m < 10) || (m >= 55) || (m >= 25 && m < 30) || (m >= 35 && m < 40),
        tenMinutes: (m >= 10 && m < 15) || (m >= 50 && m < 55),
        quarter: (m >= 15 && m < 20) || (m >= 45 && m < 50),
        twentyMinutes: (m >= 20 && m < 30) || (m >= 35 && m < 45),
        half: (m >= 30 && m < 35)
      }
    default:
      return state
  }
}
