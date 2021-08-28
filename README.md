
# Тестовое задание Frontend Teachbase

Сделать удобные для пользователя формы регистрации и авторизации. Обязательно использование React.
Для сравнения скорости загрузки<br/>
[React.js deploy](https://wandering-savory-marionberry.glitch.me/login)<br/>
Для локального просмотра:<br/>
```bash
npm i && npm start
```
[Next.js deploy](https://opposite-gem-crawdad.glitch.me)<br/>
Для локального просмотра:<br/>
```bash
cd next && npm i && npm run build && npm start
```

:ballot_box_with_check: Данные формы авторизации отправляются на [ec2-18-117-84-227.us-east-2.compute.amazonaws.com:3000/login](http://ec2-18-117-84-227.us-east-2.compute.amazonaws.com/login) методом POST.	<br/>	
![Login page](https://i.ibb.co/5LYmt1q/Peek-2021-08-29-00-23.gif)<br/>
:ballot_box_with_check: Форма регистрации отправляется на [ec2-18-117-84-227.us-east-2.compute.amazonaws.com:3000/register](http://ec2-18-117-84-227.us-east-2.compute.amazonaws.com/register) методом POST.<br/>
  ![Register page](https://i.ibb.co/PtQC5xg/Peek-2021-08-29-00-45.gif)<br/>      
:heavy_check_mark: login - обязательное поле не менее 4 символов<br/>
:heavy_check_mark: password - обязательное поле не менее 6 символов<br/>
:heavy_check_mark: email - обязательное поле, валидный email<br/>

             																																					  
## ⚙️ General Info
![Javascript](https://res.cloudinary.com/practicaldev/image/fetch/s--yXd1I4K0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/Javascript-323330%3Fstyle%3Dfor-the-badge%26logo%3Djavascript%26logoColor%3DF7DF1E)![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![React_Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)![React Hooks](https://img.shields.io/badge/React_Hooks-778899?style=for-the-badge&logo=react&logoColor=61DAFB)![Fetch](https://img.shields.io/badge/Fetch-DC143C?style=for-the-badge&logo=javascript&logoColor=white)![Next.js](https://img.shields.io/static/v1?label=&message=Next.js&color=%23666&style=for-the-badge&logo=vercel&logoColor=black)<br/>
Fetch использовал для работы с API, [файл с кодом](https://github.com/Zwerruga/Teachbase-test-task/blob/main/src/utils/apiCalls.js) . Вызов выполняется при клике на кнопку. 
```javascript 
Resolve = () => redirect('/');
Reject = (error) => show(error);
```
Запрос не выполняется, если форма не прошла [валидацию](https://github.com/Zwerruga/Teachbase-test-task/blob/main/src/utils/registerValidator.js).
Для маршрутизации react использовался react-router.
Загрузка страниц была оптимизирована с помощью ***React.lazy***
```javascript
const Login = React.lazy(() => import("./pages/login.jsx"));
const Register = React.lazy(() => import("./pages/register.jsx"));
const Home = React.lazy(() => import("./pages/home.jsx"));
```
Для защиты от возможных ошибок сервера, использовал [предохранитель **<**ErrorBoundary**/>**](https://github.com/Zwerruga/Teachbase-test-task/blob/main/src/components/ErrorBoundary.jsx)
Структура поделена на [страницы](https://github.com/Zwerruga/Teachbase-test-task/tree/main/src/pages) и [компоненты](https://github.com/Zwerruga/Teachbase-test-task/tree/main/src/components), что позже помогло перенести [проект в Next.js](https://opposite-gem-crawdad.glitch.me) для ускорения загрузки страниц.

Обратите внимание:
 - Используются только функциональные компоненты и хуки
 - **HOC** [< **CustomPasswordInput.**/>](https://github.com/Zwerruga/Teachbase-test-task/blob/main/src/components/CustomPasswordInput.jsx) для дополнения функциональности [<**CustomInput**/>](https://github.com/Zwerruga/Teachbase-test-task/blob/main/src/components/CustomInput.jsx) возможностью показа и скрытия пароля.
 - Для предотвращения лишнего рендеринга компонентов используется **React.memo**.
# 🔮 In Future ⏳
- Покрыть тестами код 
 - Добавить возможность авторизации через сторонние сервисы 
 - Использовать Typescript
