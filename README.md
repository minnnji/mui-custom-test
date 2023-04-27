# 디자인시스템 구축을 위한 라이브러리 검토 - MUI
사내 디자인시스템 구축을 검토하면서 기본 사용 & 커스터마이징 범위 등 살펴보기 위함
* [https://mui.com](https://mui.com/material-ui/getting-started/usage/)

## 특징 몇가지
* Google의 material-ui 디자인 시스템을 바탕으로 함
* 현재 Material Design 2 을 기준으로 하며, Material Design 3 버전은 @mui/material-next 로 써볼 수 있다.
* PC보다는, 모바일에 더 최적화 된 디자인 철학
* 컴포넌트가 무거운 편 ([minimizing bundle size](https://mui.com/material-ui/guides/minimizing-bundle-size/) 가능)
* 커스터마이징이 상대적으로 어려운 편(material design 가이드, 개발원칙을 준수한다면 문제되지 않을 것)
* [Base UI](https://mui.com/base/getting-started/overview/)로 좀 더 flexible한 커스터마이징 가능하도록 headless(unstyled)version 제공. 아직 알파단계이긴 하다.