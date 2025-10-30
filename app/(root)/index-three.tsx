import React, { useState } from "react";
import { Text, View } from "react-native";
// Correct import: Use `CalendarStrip`, not `ScrollableCalendarStrip`
import CalendarStrip from "react-native-calendar-strip";

export default function CalendarStripExample() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateSelected = (date: any) => {
    setSelectedDate(new Date(date));
    // The `date` parameter from the library is a Moment.js object,
    // so you should convert it to a JavaScript Date object.
    console.log("Selected date:", date);
  };

  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <CalendarStrip
        // dayComponent={() => {
        //   return <>
        //   <Text>H</Text>
        //   </>
        // }}
        selectedDate={selectedDate}
        onDateSelected={onDateSelected}
        // numDaysInWeek={4}
        calendarColor={"#fff"}
        showMonth={false}
        calendarHeaderStyle={{
          color: "#000",
          fontSize: 20,
          fontWeight: "bold",
        }}
        dateNumberStyle={{ color: "#000", fontSize: 16 }}
        dateNameStyle={{ color: "#888", fontSize: 12 }}
        style={{ height: 80 }}
        highlightDateNumberStyle={{ color: "red", fontSize: 18 }}
        highlightDateNameStyle={{ color: "red" }}
        showDayNumber={true}
        showDayName={true}
        daySelectionAnimation={{
          type: "border",
          duration: 200,
          borderWidth: 1,
          borderHighlightColor: "white",
        }}
        // `startingDate` is deprecated. Use `initialDate` or `selectedDate`.
        // Setting `startingDate` to `new Date()` is unnecessary if `selectedDate` is already set.
        // scrollToOnSelect={true}
      />

      <Text style={{ marginTop: 20, textAlign: "center", fontSize: 16 }}>
        Selected Date: {selectedDate.toDateString()}
      </Text>

      <View style={{ display: "flex", flexDirection: "row", height: 100, marginTop: 50 }}>
        <View style={{ display: "flex", justifyContent: 'center', alignItems: 'center',height: 90, width: 70, backgroundColor: '#868686', marginLeft: 20, borderRadius: 10 }}>
          <Text>27</Text>
          <Text>Mon</Text>
        </View>
        <View style={{ height: 90, width: 70, backgroundColor: '#868686', marginLeft: 20, borderRadius: 10 }}></View>
        <View style={{ height: 90, width: 70, backgroundColor: '#868686', marginLeft: 20, borderRadius: 10 }}></View>
        <View style={{ height: 90, width: 70, backgroundColor: '#868686', marginLeft: 20, borderRadius: 10 }}></View>
      </View>


    </View>
  );
}
