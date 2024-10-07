"use client";

import HomePage from "./home"
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

export default function Home() {
  return (
    <CopilotKit publicApiKey="ck_pub_7944fa05bffd73a207ba69eade52cb41">
      <HomePage></HomePage>
      <CopilotPopup
      labels={{
        title: "Health Copilot",
        initial: "Hi! 👋 How can I be of help to you today?",
      }}
/>
    </CopilotKit>
  )
}