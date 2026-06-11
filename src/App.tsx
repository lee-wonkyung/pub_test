import { useState } from "react";
import { LoginPage } from "./screens/LoginPage/LoginPage";
import { SignupPage } from "./screens/SignupPage/SignupPage";
import "./styles/global.css";

type Screen = "login" | "signup";

export function App() {
  const [screen, setScreen] = useState<Screen>("login");

  return (
    <div>
      <div style={{ display: "flex", gap: 8, padding: 12, justifyContent: "center" }}>
        <button onClick={() => setScreen("login")} disabled={screen === "login"}>
          로그인
        </button>
        <button onClick={() => setScreen("signup")} disabled={screen === "signup"}>
          회원가입
        </button>
      </div>
      {screen === "login" ? <LoginPage /> : <SignupPage />}
    </div>
  );
}
