"use client";

import HomePage from "./home"
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

export default function Home() {
  return (
    <CopilotKit publicApiKey="ck_pub_697289b72f11f11990ded02452241b39">
      <HomePage></HomePage>
      <CopilotPopup></CopilotPopup>
    </CopilotKit>
  )
}