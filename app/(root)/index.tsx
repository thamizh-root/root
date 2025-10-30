import { format, getDaysInMonth, startOfMonth } from "date-fns";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// import * as SQLite from 'expo-sqlite/next';
// const db = SQLite.openDatabase('habitformation.db');

export default function Index() {



//   React.useEffect(() => {
//     const initDB = async () => {

//       // `execAsync()` is useful for bulk queries when you want to execute altogether.
//       // Note that `execAsync()` does not escape parameters and may lead to SQL injection.
//       await db.execAsync(`
// PRAGMA journal_mode = WAL;
// CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
// INSERT INTO test (value, intValue) VALUES ('test1', 123);
// INSERT INTO test (value, intValue) VALUES ('test2', 456);
// INSERT INTO test (value, intValue) VALUES ('test3', 789);
// `);

//       // `runAsync()` is useful when you want to execute some write operations.
//       const result = await db.runAsync('INSERT INTO test (value, intValue) VALUES (?, ?)', 'aaa', 100);
//       console.log(result.lastInsertRowId, result.changes);
//       await db.runAsync('UPDATE test SET intValue = ? WHERE value = ?', 999, 'aaa'); // Binding unnamed parameters from variadic arguments
//       await db.runAsync('UPDATE test SET intValue = ? WHERE value = ?', [999, 'aaa']); // Binding unnamed parameters from array
//       await db.runAsync('DELETE FROM test WHERE value = $value', { $value: 'aaa' }); // Binding named parameters from object

//       // `getFirstAsync()` is useful when you want to get a single row from the database.
//       const firstRow = await db.getFirstAsync('SELECT * FROM test');
//       console.log(firstRow.id, firstRow.value, firstRow.intValue);

//       // `getAllAsync()` is useful when you want to get all results as an array of objects.
//       const allRows = await db.getAllAsync('SELECT * FROM test');
//       for (const row of allRows) {
//         console.log(row.id, row.value, row.intValue);
//       }

//       // `getEachAsync()` is useful when you want to iterate SQLite query cursor.
//       for await (const row of db.getEachAsync('SELECT * FROM test')) {
//         console.log(row.id, row.value, row.intValue);
//       }


//     };
//     initDB();
//   }, []);



  const getMonthDays = () => {
    const now = new Date();
    const days = getDaysInMonth(now);
    const start = startOfMonth(now);
    return Array.from({ length: days }, (_, i) => {
      const dayDate = new Date(start.getFullYear(), start.getMonth(), i + 1);
      return {
        label: format(dayDate, "d"),
        date: dayDate,
        key: i,
      };
    });
  };

  const daysOfMonth = getMonthDays();

  const now = new Date();
  const monthLabel = format(now, "MMMM");

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View className="pl-[40px] pr-[20px]">
          {/* <View className="flex flex-column justify-center items-start h-[80px]">
            <Text className="text-2xl font-bold">Good Morning,</Text>
            <Text>Pierre Beshukov</Text>
          </View> */}



          <View className="flex mt-[40px]">

            <View style={{ alignItems: "flex-end", paddingRight: 20 }}>
              <Text style={{ fontSize: 30 }}>+</Text>
            </View>



            <View className="mt-[20px]">

              <View style={{ marginBottom: 5 }}>
                <Text style={{ fontSize: 25, fontWeight: 900 }}>meditation</Text>
              </View>

              <View style={{ marginBottom: 5 }}>
                <Text style={{ fontWeight: "100" }}>{monthLabel}</Text>
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexDirection: "row",
                  paddingRight: 20,
                }}
                style={{
                  height: 100,
                  marginTop: 10,
                }}
              >
                {daysOfMonth.map((day) => (
                  <View
                    key={day.key}
                    style={{
                      width: 40,
                      height: 40,
                      marginRight: 10,
                      borderRadius: 25,
                      backgroundColor: "#ebebebff",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 18 }}>{day.label}</Text>
                  </View>
                ))}
              </ScrollView>

            </View>


          </View>


        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
