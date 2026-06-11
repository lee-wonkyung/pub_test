import { useState } from "react";
import {
  Button,
  Header,
  SocialLoginButtons,
  StatusBar,
  TextField,
} from "../../components";
import styles from "./LoginPage.module.css";

/** Figma "00 로그인 - main" (21:766). */
export function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.screen}>
      <StatusBar />
      <Header onBack={() => history.back()} />

      <main className={styles.body}>
        <section className={styles.form}>
          <div className={styles.fields}>
            <TextField
              variant="underline"
              placeholder="아이디를 입력하세요"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <TextField
              variant="underline"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.actions}>
            <Button variant="solid" fullWidth>
              로그인
            </Button>
            <Button variant="line" fullWidth>
              회원가입
            </Button>
          </div>
        </section>

        <nav className={styles.helpLinks}>
          <a href="#find-id" className={styles.helpLink}>
            아이디 찾기
          </a>
          <span className={styles.helpDivider} />
          <a href="#find-pw" className={styles.helpLink}>
            비밀번호 찾기
          </a>
        </nav>

        <div className={styles.snsDivider}>
          <span className={styles.line} />
          <span className={styles.snsLabel}>SNS 계정으로 로그인</span>
          <span className={styles.line} />
        </div>

        <SocialLoginButtons />
      </main>
    </div>
  );
}
