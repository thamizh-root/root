import { Redirect } from "expo-router";
import "../global.css";

export default function Index() {
  console.log("loading index.tsx...");
  return <Redirect href="/(welcome)" />;
}
