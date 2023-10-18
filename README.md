# 프로젝트명 : Buying


![buyingImg](https://github.com/CircleSeok/Buying/assets/107212281/c778149e-4f1f-42de-a6e8-708b50fe637f)



- 쇼핑몰 웹사이트
---

## 🌱서비스 화면

<table>
 <tr>
    <td align="center" width="100" height="500">
      제품 등록
    </td>
    <td align="center">
      <img width="800" height="500" src="https://github.com/CircleSeok/Buying/assets/107212281/6f34d9f6-7fde-4712-a62c-02ca6d8a8965" />
    </td>
  </tr>
  <tr>
    <td align="center" width="100" height="500">
      장바구니
    </td>
    <td align="center">
      <img width="800" height="500" src="https://github.com/CircleSeok/Buying/assets/107212281/47e1c340-accb-4bf1-8769-c8c5b4cb7db7" />
    </td>
    </tr>
</table>

 <table>
 <tr>
    <td align="center" width="100" height="500">
      제품 상세
    </td>
    <td align="center">
      <img width="800" height="500" src="https://github.com/CircleSeok/Buying/assets/107212281/a0433fb9-5f73-4621-84fe-285590884825" />
    </td>
  </tr>
</table>

<table>
  <tr>
    <td align="center" width="100" height="500">
      제품 상세 [어드민]
    </td>
    <td align="center">
      <img width="800" height="500" src="https://github.com/CircleSeok/Buying/assets/107212281/25cd3089-7f0d-4ebb-b934-87caedcdda16" />
    </td>  
  </tr>
</table>

---
## 기술적 챌린지

### 제품 등록

로그인한 사람 중 **admin 사용자만 제품 등록**을 할 수 있도록 만들기 위해 **uid 값을  firebase database 안에 저장** 
그리고 **경로 보호를 위해** NewProducts 컴포넌트를 한 단계 감싸는 ProtectedRoute 컴포넌트를 만들고 **requireAdmin 값을 true로 설정** 하여 admin 사용자와 일반 사용자를 비교할수 있다.
ReactRouterDom 에서 제공해주는 **useNavigate를 사용**하여 경로를 이용하여 접근하면 홈으로 redirect 된다.
새로운 제품을 등록할 때 **usemutation을 사용**해 products 캐시키를 가지고 있는 것들을 즉각적으로 업데이트한다.

### 제품 삭제

**remove를 사용**하여  firebase database 안에 'products' 경로에서 해당 제품을 참조하고 제품의 id 값을 삭제한다.

### 제품 보여주기

**get을 사용**하여 firebase database 안에 있는 값들을 가져온다.
 React-Query에서 제공해주는 **usequery를 사용**하여 firebase 안에 있는 제품들을 모두 읽어온다.

### 제품 상세페이지

제품을 눌렀을 때 상세페이지에 값들을 그대로 가져오기 위해 ReactRouterDom에서 제공해주는 **usenavigate 을 사용해 state 안에 객체 형태로 보내주면 uselocation을 사용**하여 state 값을 받아온다.
admin사용자로 접근했을때는 상품을 삭제할수 있는 버튼이 보이고 삭제할수있다.

### 장바구니
**set을 사용**하여 firebase database 안에 제품의 id 값을 추가 및 업데이트한다.
**remove를 사용**하여  firebase database 안에 제품의 id 값을 삭제한다.



---

👉 [사이트]()

💻 [시연 영상](https://youtu.be/DowqId72K-I)

---

## 🔧 기술 스택

### Client  

- React, React-Query TailwindCSS

### Server, DB

- firebase

### Deploy

- Vercel
