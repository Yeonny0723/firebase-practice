

### Husky 실행
.husky > commit-msg, pre-commit 파일에 실행권한을 부여하여 각 stage에 실행될 수 있도록 함.
```
chmod +x .husky/*
```

### Prisma 실행
초기 스키마 연결
```
yarn prisma db pull # (선택) 데이터 베이스 스키마 Primsa 모델 자동 반영. 수정 후 클라이언트 재생성.
yarn prisma generate # Prisma 클라이언트 생성
yarn prisma studio # 프리즈마 스튜디오
```

스키마 변경 시
```
yarn prisma migrate dev --name ["메시지"]
```


## 참고 자료 
[firebase](https://velog.io/@sanglee/Next.js-Firebase%EB%A1%9C-%EC%96%B4%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EB%A7%8C%EB%93%A4%EA%B8%B0)