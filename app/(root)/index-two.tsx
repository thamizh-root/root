import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CalendarProvider, WeekCalendar } from "react-native-calendars";

export default function MyWeekCalendar() {
  const [selectedDate, setSelectedDate] = useState("");
  const now = new Date().toISOString();

  // Custom day component for square dates with border radius 10%
  const SquareDay = ({ date, state }: any) => {
    const isSelected = date.dateString === selectedDate;
    return (
      <View style={[styles.dayContainer, isSelected && styles.selectedDay]}>
        <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>
          {date.day}
        </Text>
      </View>
    );
  };

  const onDateChanged = (d: any) => {
    console.log("onDateChanged", d);
  };

  return (
    <View style={styles.container}>
      <CalendarProvider
        style={{
          display: "flex",
          // gap: 5,
          // paddingRight: 10,
          // paddingLeft: 10
        }}
        date={now}
        onDateChanged={onDateChanged}
        // onMonthChange={onMonthChange}
        showTodayButton
        // disabledOpacity={0.6}
        // todayBottomMargin={16}
        // disableAutoDaySelection={[ExpandableCalendar.navigationTypes.MONTH_SCROLL, ExpandableCalendar.navigationTypes.MONTH_ARROWS]}
      >
        <WeekCalendar
          dayComponent={({ date, state }: any) => {
            return (
              <View
                style={{
                  backgroundColor: "white",
                  height: "100%",
                  width: "100%",
                  borderColor: "blue",
                  borderWidth: 2,
                  borderStyle: "dashed",
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    // width: 20,
                    color: state === "disabled" ? "gray" : "black",
                  }}
                >
                  {date.day}
                </Text>
              </View>
            );
          }}
          current={new Date().toISOString().split("T")[0]} // Set current date to today
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: "#00adf5",
            },
          }}
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
          }}
          // dayComponent={SquareDay}
          theme={{
            textSectionTitleColor: "#6b7280",
            selectedDayBackgroundColor: "#007aff",
            todayTextColor: "#ff6347",
            dayTextColor: "#374151",
            textDayFontWeight: "700",
            textDayFontSize: 18,
            arrowColor: "white",
            // "stylesheet.calendar.header": {
            //   week: {
            //     marginTop: 5,
            //     flexDirection: "row",
            //     justifyContent: "space-between",
            //   },
            // },
          }}
          hideDayNames={true} // Show day names above the dates
          allowShadow={true} // Add shadow/elevation to the calendar
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
  dayContainer: {
    width: 48, // Square box width
    height: 48, // Square box height
    borderRadius: 5, // Roughly 10% of 48 is 4.8, rounded to 5
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f8",
    marginLeft: 10,
  },
  selectedDay: {
    backgroundColor: "#00adf5",
  },
  dayText: {
    color: "#374151",
    fontWeight: "700",
    fontSize: 18,
  },
  selectedDayText: {
    color: "white",
  },
});
