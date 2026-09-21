# 최지호 포트폴리오 웹사이트 (Jiho Choi Portfolio)

첨부된 포트폴리오 디자인 에디토리얼 레이아웃을 바탕으로 구현된 모던 반응형 웹 포트폴리오입니다.
**GitHub 저장** 및 **Vercel 1-클릭 배포**에 완벽히 최적화된 Vite + React + TypeScript + Tailwind CSS 기반 정적 SPA(Single Page Application) 구조입니다.

---

## 🚀 빠른 시작 (Local Development)

```bash
# 의존성 패키지 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 정적 빌드 검증 (dist 폴더 생성)
npm run build
```

---

## 📦 GitHub 저장 및 Vercel 배포 가이드

### 1. GitHub 레포지토리에 푸시하기

```bash
# 로컬 Git 저장소 초기화
git init

# 모든 파일 추가 및 첫 커밋
git add .
git commit -m "feat: Initial commit for Jiho Choi portfolio"

# main 브랜치 설정 및 GitHub 원격 저장소 연결
git branch -M main
git remote add origin https://github.com/사용자이름/portfolio.git

# GitHub에 푸시
git push -u origin main
```

### 2. Vercel에서 1-클릭 배포하기

1. [Vercel](https://vercel.com)에 로그인합니다.
2. **Add New...** > **Project**를 클릭하고, 방금 푸시한 GitHub 레포지토리를 선택(Import)합니다.
3. Vercel이 **Vite** 프레임워크를 자동 감지합니다:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. **Deploy** 버튼을 누르면 약 30초~1분 후 전 세계 CDN을 통해 무료로 배포됩니다.
5. 포함된 `vercel.json` 설정 덕분에 어떤 서브 경로로 접속하거나 새로고침해도 페이지가 정상 동작합니다.

---

## 🛠 기술 스택

- **Frontend:** React 19, TypeScript, Vite 6, Tailwind CSS v4
- **Typography:** Instrument Serif, Pretendard, Plus Jakarta Sans, Noto Serif KR
- **Icons:** Lucide React
- **Deployment:** Vercel, GitHub Pages 호환
