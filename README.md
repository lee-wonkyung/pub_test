# Figma → React (로그인 / 회원가입)

Figma 파일 `9sOvux4EpLqxoExvLxzxjz`의 두 화면(로그인·회원가입)을 **React + CSS Modules + CSS 변수 토큰**으로 변환한 결과물입니다.

## 실행

```bash
cd figma-output
npm install
npm run dev        # 개발 서버 (Vite)
npm run build      # 프로덕션 빌드
npm run type-check # 타입 검사만
```

브라우저 상단의 `로그인` / `회원가입` 버튼으로 두 화면을 전환합니다.

## 구조

```
src/
├─ styles/
│  ├─ tokens.css      디자인 토큰 (색상·타이포·radius·spacing) — :root CSS 변수
│  └─ global.css      리셋 + 토큰 import
├─ components/        재사용 디자인 시스템 컴포넌트
│  ├─ Button/         solid·line × lg·md, fullWidth
│  ├─ TextField/      underline(로그인)·box(회원가입), label·required·trailing 슬롯
│  ├─ Selectbox/      생년월일 드롭다운 (native select + chevron)
│  ├─ RadioButton/    RadioGroup — 성별 선택
│  ├─ Header/         back 아이콘 + 중앙 타이틀
│  ├─ StatusBar/      iOS 상태바 (9:41 / 신호 / wifi / 배터리)
│  └─ SocialLoginButtons/  카카오·구글·애플·네이버 원형 버튼
└─ screens/
   ├─ LoginPage/      Figma "00 로그인 - main" (21:766)
   └─ SignupPage/     Figma "회원가입-가입" (21:933)
```

## 변환 시 적용한 디자인 시스템 정리

Figma 원본의 부채를 토큰 단계에서 정리했습니다 (코드의 단일 소스화):

| 항목 | Figma 원본 | 변환 결과 |
|---|---|---|
| 포인트 컬러 | `#5D00FF` / `#5700ED` 혼재 | `--color-point-violet` (#5D00FF) 단일화, pressed 상태만 `#5700ED` |
| 입력 테두리 | `rgba(0,0,0,0.2)` / `#CCCCCC` 혼재 | 역할별 토큰(`--color-border-input` / `--color-border-select`) |
| 입력 컴포넌트 | `Inputform_Default` / `Textfeild` 이원화 | `TextField` 하나로 통합 (variant로 구분) |
| 컴포넌트명 오타 | `Textfeild`, `Devider` | `TextField`, `Divider`로 정정 |

## 한계 / TODO

- **아이콘**: SNS 로고·눈 아이콘 등은 인라인 SVG **플레이스홀더**입니다. 실제 브랜드 에셋이 필요하면 MCP의 `download_figma_images`(nodeId + imageRef)로 내보내 교체하세요.
- **레이아웃 좌표**: Figma 로그인 화면은 절대 좌표 배치였으나, 반응형 친화적으로 Auto Layout(flex) 기반으로 재구성했습니다. 픽셀 단위 1:1 복제가 필요하면 좌표값을 추가로 반영해야 합니다.
- **폼 검증**: 입력 상태만 관리하며 유효성 검사·제출 로직은 미구현입니다.
