import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CalendarProvider, WeekCalendar } from 'react-native-calendars';

export default function MyWeekCalendar() {
  const [selectedDate, setSelectedDate] = useState(''); 
  const now = new Date().toISOString();

  return (
    <View style={styles.container}>
          <CalendarProvider
      date={now}
      // onDateChanged={onDateChanged}
      // onMonthChange={onMonthChange}
      showTodayButton
      // disabledOpacity={0.6}
      // todayBottomMargin={16}
      // disableAutoDaySelection={[ExpandableCalendar.navigationTypes.MONTH_SCROLL, ExpandableCalendar.navigationTypes.MONTH_ARROWS]}
    >
      <WeekCalendar
        current={new Date().toISOString().split('T')[0]} // Set current date to today
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: '#00adf5',
          },
        }}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
        hideDayNames={false}   // Show day names above the dates
        allowShadow={true}     // Add shadow/elevation to the calendar
      />
      </CalendarProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});
