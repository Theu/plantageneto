import React from "react";
import { Header } from "./client/components/Header/Header";
import { Homepage } from "./client/components/HomePage/HomePage";
import { getPlantagenetoContent } from "./server/services/contentful";

getPlantagenetoContent();
const App = () => <><Header /><Homepage /></>;

export default App;
