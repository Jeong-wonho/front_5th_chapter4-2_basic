# 항해 마지막 과제

# 바닐라 JS 프로젝트 성능 개선
- url: https://d18lidx9gvd7mj.cloudfront.net/

# 성능 개선 보고서

## 내가 한일
과제에 올라와 있는 것을 위주로 진행하는 것을 목표

### 이미지 최적화 

처음 배포하고 나서 처음 확인했을 때 litehouse에서 지적해준 문제이자, 발제 자료에 나와있던 첫 해결점이었습니다. 우선 확장자를 변경해주었습니다. png > webp로 변경하였고, 크기를 조절하여 최적화 하였습니다. 사실 github으로 푸쉬할때마다 작성되던 lighthouse에서 LCP가 줄어들지 않아서 왜 줄어들지 않는거야 하면서 삽질을 많이했습니다. (그냥..url을 배포 주소로 해놓고 배포를 최신화 안하니 계속 해서 그런 문제가 발생!)

### cookie 성능 최적화
해당 부분은 생각하지 못했었는데 다른 분의 코드를 보고 참고하여 반영하였습니다. 


showTopBar();
### meta tag 추가
litehouse에서 해당 부분에 대해 alert가 발생하여 추가하였습니다.

### google font
litehouse에서 해당 부분에 대해 alert가 발생하는 것을 확인하였고 다른 수강생 분의 코드를 참조하여 해결하였습니다.


### 사용하지 않는 로직 삭제
js에서 사용하지 않는 듯한 코드가 보여 삭제하였습니다.
```javascript
//삭제처리!
// Simulate heavy operation. It could be a complex price calculation.
for (let i = 0; i < 10000000; i++) {
    const temp = Math.sqrt(i) * Math.sqrt(i);
}
```

### script defer 추가
defer를 입력하여, js로드시에도 defer가 나오도록 했습니다.
``` javascript

<script type="text/javascript" src="/js/main.js" defer></script>

    <script type="text/javascript" src="/js/products.js" defer></script>
```

## 소감

처음해보는거라 감이 안와서 어려웠습니다. 특히 img 태그 사용법이 참 많이 다양하더라구요. 그래서 초반에 너무 감을 못잡고 옛날에 머물러 있었구나라는 생각을 많이했습니다. 가볍게 넘기지 말고 성능 최적화에 대해서 다시 한번 되돌아봐야할 거 같아요!
