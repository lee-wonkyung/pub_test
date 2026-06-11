import { useState } from "react";
import {
  Button,
  Header,
  RadioGroup,
  Selectbox,
  StatusBar,
  TextField,
} from "../../components";
import styles from "./SignupPage.module.css";

const YEARS = Array.from({ length: 80 }, (_, i) => {
  const y = String(2024 - i);
  return { value: y, label: y };
});
const MONTHS = Array.from({ length: 12 }, (_, i) => {
  const m = String(i + 1);
  return { value: m, label: m };
});
const DAYS = Array.from({ length: 31 }, (_, i) => {
  const d = String(i + 1);
  return { value: d, label: d };
});

/** Figma "회원가입-가입" (21:933). */
export function SignupPage() {
  const [form, setForm] = useState({
    id: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
    name: "",
    email: "",
    year: "",
    month: "",
    day: "",
    phone1: "010",
    phone2: "",
    phone3: "",
    zip: "",
    address: "",
    addressDetail: "",
    gender: "none",
  });

  const set =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <div className={styles.screen}>
      <StatusBar />
      <Header title="가입" onBack={() => history.back()} />

      <main className={styles.body}>
        <div className={styles.fields}>
          {/* 아이디 + 중복확인 */}
          <TextField
            label="아이디"
            required
            placeholder="Place holder"
            value={form.id}
            onChange={set("id")}
            trailing={
              <Button variant="solid" size="md" type="button">
                중복확인
              </Button>
            }
          />

          {/* 비밀번호 */}
          <TextField
            label="비밀번호"
            required
            type="password"
            placeholder="영문+숫자+특수문자 포함 8자 이상"
            value={form.password}
            onChange={set("password")}
            trailing={<EyeIcon />}
          />
          <TextField
            label="비밀번호 확인"
            required
            type="password"
            placeholder="영문+숫자+특수문자 포함 8자 이상"
            value={form.passwordConfirm}
            onChange={set("passwordConfirm")}
            trailing={<EyeIcon />}
          />

          {/* 닉네임 + 중복확인 */}
          <TextField
            label="닉네임"
            required
            placeholder="공백없이 2~10자 입력"
            value={form.nickname}
            onChange={set("nickname")}
            trailing={
              <Button variant="solid" size="md" type="button">
                중복확인
              </Button>
            }
          />

          <TextField label="이름" required value={form.name} onChange={set("name")} />
          <TextField
            label="이메일"
            required
            type="email"
            value={form.email}
            onChange={set("email")}
          />

          {/* 생년월일 */}
          <div className={styles.group}>
            <span className={styles.label}>
              생년월일<span className={styles.required}> *</span>
            </span>
            <div className={styles.row}>
              <Selectbox
                placeholder="년"
                options={YEARS}
                value={form.year}
                onChange={set("year")}
              />
              <Selectbox
                placeholder="월"
                options={MONTHS}
                value={form.month}
                onChange={set("month")}
              />
              <Selectbox
                placeholder="일"
                options={DAYS}
                value={form.day}
                onChange={set("day")}
              />
            </div>
          </div>

          {/* 휴대폰 번호 */}
          <div className={styles.group}>
            <span className={styles.label}>
              휴대폰 번호<span className={styles.required}> *</span>
            </span>
            <div className={styles.row}>
              <TextField value={form.phone1} onChange={set("phone1")} inputMode="numeric" />
              <TextField value={form.phone2} onChange={set("phone2")} inputMode="numeric" />
              <TextField value={form.phone3} onChange={set("phone3")} inputMode="numeric" />
            </div>
          </div>

          {/* 주소 */}
          <div className={styles.group}>
            <span className={styles.label}>주소</span>
            <div className={styles.addressCol}>
              <div className={styles.row}>
                <TextField
                  className={styles.zip}
                  placeholder="00000"
                  value={form.zip}
                  onChange={set("zip")}
                />
                <Button variant="solid" size="md" type="button">
                  주소찾기
                </Button>
              </div>
              <TextField
                placeholder="기본 주소"
                value={form.address}
                onChange={set("address")}
              />
              <TextField
                placeholder="상세 주소"
                value={form.addressDetail}
                onChange={set("addressDetail")}
              />
            </div>
          </div>

          {/* 성별 */}
          <div className={styles.group}>
            <span className={styles.label}>성별</span>
            <RadioGroup
              name="gender"
              value={form.gender}
              onChange={(v) => setForm((f) => ({ ...f, gender: v }))}
              options={[
                { value: "none", label: "선택하지 않음" },
                { value: "male", label: "남" },
                { value: "female", label: "여" },
              ]}
            />
          </div>
        </div>

        <div className={styles.submit}>
          <Button variant="solid" fullWidth>
            가입하기
          </Button>
        </div>
      </main>
    </div>
  );
}

function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M1.7 10S4.7 4.7 10 4.7 18.3 10 18.3 10 15.3 15.3 10 15.3 1.7 10 1.7 10z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
