const myIcon=document.getElementById("myicon"),navb=(myIcon.addEventListener("click",()=>{for(let e=1;e<5;e++){const n=document.getElementById("myicon"+e);n.classList.toggle("icon"+e)}}),document.getElementById("fade-in")),navigation=(myIcon.addEventListener("click",()=>{navb.classList.toggle("show")}),navb.getElementsByTagName("a")),mySkills=(Array.from(navigation).map(e=>{e.addEventListener("click",()=>{navb.classList.remove("show");for(let e=1;e<5;e++){const n=document.getElementById("myicon"+e);n.classList.toggle("icon"+e)}})}),document.getElementById("myskills")),skills=[["HTML","./icons/html.png"],["CSS","./icons/css.png"],["sass","./icons/sass.png"],["Tailwind","./icons/tailwind.png"],["Bootstrap","./icons/bootstrap.png"],["MaterialUI","./icons/mui.png"],["Javascript","./icons/js.png"],["Typescript","./icons/ts.png"],["Reactjs","./icons/react.png"],["Nextjs","./icons/next.png"],["Reduxjs","./icons/redux.png"],["Nodejs","./icons/node.png"],["Expressjs","./icons/node-js.png"],["JWT","./icons/jwt.png"],["Mongodb","./icons/mongodb.png"],["Mocha","./icons/mocha.svg"],["Jest","./icons/jest.png"],["Ejs","./icons/html.png"],["Webpack","./icons/webpack.png"],["Gulpjs","./icons/gulp.png"]];function skill(){return skills.map(e=>`<li class='wow scale-in-center item-skill h-48 flex flex-wrap justify-center items-center flex-col p-5 md:p-10'><img class='skill ' src='${e[1]}' alt='' /><p>${e[0]}</p></li>`)}mySkills.innerHTML=skill().join(" ");const swiper=new Swiper(".swiper",{direction:"horizontal",loop:!0,autoplay:{delay:5e3},breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:3,spaceBetween:30}},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),form=document.getElementById("form-data"),email=form.getElementsByTagName("input")[0],Name=form.getElementsByTagName("input")[1],message=form.getElementsByTagName("textarea")[0],formButton=form.getElementsByTagName("input")[2];formButton.addEventListener("click",async e=>{e.preventDefault();try{return await fetch("/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Name.value,email:email.value,message:message.value})})}catch(e){console.log(e)}}),new WOW({live:!1}).init();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibXlJY29uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5hdmIiLCJhZGRFdmVudExpc3RlbmVyIiwibGV0IiwiaSIsIm15SWNvbjEiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJuYXZpZ2F0aW9uIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJteVNraWxscyIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImUiLCJyZW1vdmUiLCJza2lsbHMiLCJza2lsbCIsImlubmVySFRNTCIsImpvaW4iLCJzd2lwZXIiLCJTd2lwZXIiLCJkaXJlY3Rpb24iLCJsb29wIiwiYXV0b3BsYXkiLCJkZWxheSIsImJyZWFrcG9pbnRzIiwiNjQwIiwic2xpZGVzUGVyVmlldyIsIjc2OCIsInNwYWNlQmV0d2VlbiIsIjEwMjQiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJuZXh0RWwiLCJwcmV2RWwiLCJmb3JtIiwiZW1haWwiLCJOYW1lIiwibWVzc2FnZSIsImZvcm1CdXR0b24iLCJhc3luYyIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQ29udGVudC1UeXBlIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwidmFsdWUiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiV09XIiwibGl2ZSIsImluaXQiXSwibWFwcGluZ3MiOiJBQUFBLE1BQUFBLE9BQUFDLFNBQUFDLGVBQUEsVUFRQUMsTUFOQUgsT0FBQUksaUJBQUEsUUFBQSxLQUNBLElBQUFDLElBQUFDLEVBQUEsRUFBQUEsRUFBQSxFQUFBQSxJQUFBLENBQ0EsTUFBQUMsRUFBQU4sU0FBQUMsZUFBQSxTQUFBSSxHQUNBQyxFQUFBQyxVQUFBQyxPQUFBLE9BQUFILE1BR0FMLFNBQUFDLGVBQUEsWUFNQVEsWUFKQVYsT0FBQUksaUJBQUEsUUFBQSxLQUNBRCxLQUFBSyxVQUFBQyxPQUFBLFVBR0FOLEtBQUFRLHFCQUFBLE1BV0FDLFVBVkFDLE1BQUFDLEtBQUFKLFlBQUFLLElBQUEsSUFDQUMsRUFBQVosaUJBQUEsUUFBQSxLQUNBRCxLQUFBSyxVQUFBUyxPQUFBLFFBQ0EsSUFBQVosSUFBQUMsRUFBQSxFQUFBQSxFQUFBLEVBQUFBLElBQUEsQ0FDQSxNQUFBQyxFQUFBTixTQUFBQyxlQUFBLFNBQUFJLEdBQ0FDLEVBQUFDLFVBQUFDLE9BQUEsT0FBQUgsUUFLQUwsU0FBQUMsZUFBQSxhQUNBZ0IsT0FBQSxDQUNBLENBQUEsT0FBQSxvQkFDQSxDQUFBLE1BQUEsbUJBQ0EsQ0FBQSxPQUFBLG9CQUNBLENBQUEsV0FBQSx3QkFDQSxDQUFBLFlBQUEseUJBQ0EsQ0FBQSxhQUFBLG1CQUNBLENBQUEsYUFBQSxrQkFDQSxDQUFBLGFBQUEsa0JBQ0EsQ0FBQSxVQUFBLHFCQUNBLENBQUEsU0FBQSxvQkFDQSxDQUFBLFVBQUEscUJBQ0EsQ0FBQSxTQUFBLG9CQUNBLENBQUEsWUFBQSx1QkFDQSxDQUFBLE1BQUEsbUJBQ0EsQ0FBQSxVQUFBLHVCQUNBLENBQUEsUUFBQSxxQkFDQSxDQUFBLE9BQUEsb0JBQ0EsQ0FBQSxNQUFBLG9CQUNBLENBQUEsVUFBQSx1QkFDQSxDQUFBLFNBQUEscUJBRUEsU0FBQUMsUUFDQSxPQUFBRCxPQUFBSCxJQUFBLCtJQUNBQyxFQUFBLG1CQUFBQSxFQUFBLGVBSUFKLFNBQUFRLFVBQUFELFFBQUFFLEtBQUEsS0FJQSxNQUFBQyxPQUFBLElBQUFDLE9BQUEsVUFBQSxDQUVBQyxVQUFBLGFBQ0FDLE1BQUEsRUFDQUMsU0FBQSxDQUNBQyxNQUFBLEtBRUFDLFlBQUEsQ0FDQUMsSUFBQSxDQUNBQyxjQUFBLEdBRUFDLElBQUEsQ0FDQUQsY0FBQSxFQUNBRSxhQUFBLElBRUFDLEtBQUEsQ0FDQUgsY0FBQSxFQUNBRSxhQUFBLEtBR0FFLFdBQUEsQ0FDQUMsR0FBQSxxQkFDQUMsV0FBQSxHQU1BMUIsV0FBQSxDQUNBMkIsT0FBQSxzQkFDQUMsT0FBQSx5QkFNQUMsS0FBQXRDLFNBQUFDLGVBQUEsYUFDQXNDLE1BQUFELEtBQUE1QixxQkFBQSxTQUFBLEdBQ0E4QixLQUFBRixLQUFBNUIscUJBQUEsU0FBQSxHQUNBK0IsUUFBQUgsS0FBQTVCLHFCQUFBLFlBQUEsR0FDQWdDLFdBQUFKLEtBQUE1QixxQkFBQSxTQUFBLEdBQ0FnQyxXQUFBdkMsaUJBQUEsUUFBQXdDLE1BQUE1QixJQUNBQSxFQUFBNkIsaUJBQ0EsSUFDQSxhQUFBQyxNQUFBLFFBQUEsQ0FDQUMsT0FBQSxPQUNBQyxRQUFBLENBQ0FDLGVBQUEsb0JBRUFDLEtBQUFDLEtBQUFDLFVBQUEsQ0FDQUMsS0FBQVosS0FBQWEsTUFDQWQsTUFBQUEsTUFBQWMsTUFDQVosUUFBQUEsUUFBQVksVUFHQSxNQUFBQyxHQUNBQyxRQUFBQyxJQUFBRixNQUdBLElBQUFHLElBQUEsQ0FDQUMsTUFBQSxJQUNBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG15SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlpY29uXCIpO1xuXG5teUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCA1OyBpKyspIHtcbiAgICBjb25zdCBteUljb24xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG15aWNvbiR7aX1gKTtcbiAgICBteUljb24xLmNsYXNzTGlzdC50b2dnbGUoYGljb24ke2l9YCk7XG4gIH1cbn0pO1xuY29uc3QgbmF2YiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmFkZS1pblwiKTtcblxubXlJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5hdmIuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG59KTtcblxuY29uc3QgbmF2aWdhdGlvbiA9IG5hdmIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpO1xuQXJyYXkuZnJvbShuYXZpZ2F0aW9uKS5tYXAoKGUpID0+IHtcbiAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5hdmIuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA1OyBpKyspIHtcbiAgICAgIGNvbnN0IG15SWNvbjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbXlpY29uJHtpfWApO1xuICAgICAgbXlJY29uMS5jbGFzc0xpc3QudG9nZ2xlKGBpY29uJHtpfWApO1xuICAgIH1cbiAgfSk7XG59KTtcblxuY29uc3QgbXlTa2lsbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15c2tpbGxzXCIpO1xuY29uc3Qgc2tpbGxzID0gW1xuICBbXCJIVE1MXCIsIFwiLi9pY29ucy9odG1sLnBuZ1wiXSxcbiAgW1wiQ1NTXCIsIFwiLi9pY29ucy9jc3MucG5nXCJdLFxuICBbXCJzYXNzXCIsIFwiLi9pY29ucy9zYXNzLnBuZ1wiXSxcbiAgW1wiVGFpbHdpbmRcIiwgXCIuL2ljb25zL3RhaWx3aW5kLnBuZ1wiXSxcbiAgW1wiQm9vdHN0cmFwXCIsIFwiLi9pY29ucy9ib290c3RyYXAucG5nXCJdLFxuICBbXCJNYXRlcmlhbFVJXCIsIFwiLi9pY29ucy9tdWkucG5nXCJdLFxuICBbXCJKYXZhc2NyaXB0XCIsIFwiLi9pY29ucy9qcy5wbmdcIl0sXG4gIFtcIlR5cGVzY3JpcHRcIiwgXCIuL2ljb25zL3RzLnBuZ1wiXSxcbiAgW1wiUmVhY3Rqc1wiLCBcIi4vaWNvbnMvcmVhY3QucG5nXCJdLFxuICBbXCJOZXh0anNcIiwgXCIuL2ljb25zL25leHQucG5nXCJdLFxuICBbXCJSZWR1eGpzXCIsIFwiLi9pY29ucy9yZWR1eC5wbmdcIl0sXG4gIFtcIk5vZGVqc1wiLCBcIi4vaWNvbnMvbm9kZS5wbmdcIl0sXG4gIFtcIkV4cHJlc3Nqc1wiLCBcIi4vaWNvbnMvbm9kZS1qcy5wbmdcIl0sXG4gIFtcIkpXVFwiLCBcIi4vaWNvbnMvand0LnBuZ1wiXSxcbiAgW1wiTW9uZ29kYlwiLCBcIi4vaWNvbnMvbW9uZ29kYi5wbmdcIl0sXG4gIFtcIk1vY2hhXCIsIFwiLi9pY29ucy9tb2NoYS5zdmdcIl0sXG4gIFtcIkplc3RcIiwgXCIuL2ljb25zL2plc3QucG5nXCJdLFxuICBbXCJFanNcIiwgXCIuL2ljb25zL2h0bWwucG5nXCJdLFxuICBbXCJXZWJwYWNrXCIsIFwiLi9pY29ucy93ZWJwYWNrLnBuZ1wiXSxcbiAgW1wiR3VscGpzXCIsIFwiLi9pY29ucy9ndWxwLnBuZ1wiXSxcbl07XG5mdW5jdGlvbiBza2lsbCgpIHtcbiAgcmV0dXJuIHNraWxscy5tYXAoKGUpID0+IHtcbiAgICByZXR1cm4gYDxsaSBjbGFzcz0nd293IHNjYWxlLWluLWNlbnRlciBpdGVtLXNraWxsIGgtNDggZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sIHAtNSBtZDpwLTEwJz48aW1nIGNsYXNzPSdza2lsbCAnIHNyYz0nJHtlWzFdfScgYWx0PScnIC8+PHA+JHtlWzBdfTwvcD48L2xpPmA7XG4gIH0pO1xufVxuXG5teVNraWxscy5pbm5lckhUTUwgPSBza2lsbCgpLmpvaW4oXCIgXCIpO1xuXG4vLyBhZGQgQW5pbWF0aW9uXG5cbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIuc3dpcGVyXCIsIHtcbiAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxuICBsb29wOiB0cnVlLFxuICBhdXRvcGxheToge1xuICAgIGRlbGF5OiA1MDAwLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDY0MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICB9LFxuICAgIDc2ODoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgfSxcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICB9LFxuICB9LFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICB9LFxuXG4gIC8vIElmIHdlIG5lZWQgcGFnaW5hdGlvblxuXG4gIC8vIE5hdmlnYXRpb24gYXJyb3dzXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG5cbiAgLy8gQW5kIGlmIHdlIG5lZWQgc2Nyb2xsYmFyXG59KTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1kYXRhXCIpO1xuY29uc3QgZW1haWwgPSBmb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF07XG5jb25zdCBOYW1lID0gZm9ybS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzFdO1xuY29uc3QgbWVzc2FnZSA9IGZvcm0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZXh0YXJlYVwiKVswXTtcbmNvbnN0IGZvcm1CdXR0b24gPSBmb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMl07XG5mb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHRyeXtcbiAgICAgcmV0dXJuIGF3YWl0IGZldGNoKFwiL3NlbmRcIiwge1xuICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgaGVhZGVyczoge1xuICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgfSxcbiAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICBuYW1lOiBOYW1lLnZhbHVlLFxuICAgICAgICAgZW1haWw6IGVtYWlsLnZhbHVlLFxuICAgICAgICAgbWVzc2FnZTogbWVzc2FnZS52YWx1ZSxcbiAgICAgICB9KSxcbiAgICAgfSk7XG4gIH0gY2F0Y2goZXJyKXtcbiAgICBjb25zb2xlLmxvZyhlcnIpXG4gIH1cbn0pO1xubmV3IFdPVyh7XG4gIGxpdmU6IGZhbHNlLFxufSkuaW5pdCgpO1xuIl19
