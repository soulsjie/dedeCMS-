//点击显示二维码
weichartobj=document.getElementById("weichart");
qrcodeobj=document.getElementById("qrcode");
weichartobj.onmousemove=function(){
	qrcodeobj.style.display="block";
	}
weichartobj.onmouseout=function(){
	qrcodeobj.style.display="none";
	}
//收藏功能
function addFavorite2() {
	alert("收藏失败，手动收藏请按Ctrl+D!");
}
blue_bgobj=document.getElementById("blue_bg");
blue_bgobj2=document.getElementById("blue_bg2");
blue_bgobj3=document.getElementById("blue_bg3");
blue_bgobj4=document.getElementById("blue_bg4");
blue_bgobj5=document.getElementById("blue_bg5");
blue_bgobj6=document.getElementById("blue_bg6");
blue_bgobj7=document.getElementById("blue_bg7");
i=1;//定义一个变量，依据变量的值显示不同的图片和文字内容
blue_bgobj.onclick=function(){		//教师1被点击时
	i=1;
	add_img();
	add_content();
	}
blue_bgobj2.onclick=function(){		//教师2被点击时
	i=2;
	add_img();
	add_content();
	}
blue_bgobj3.onclick=function(){		//教师3被点击时
	i=3;
	add_img();
	add_content();
	}
blue_bgobj4.onclick=function(){		//教师4被点击时
	i=4;
	add_img();
	add_content();
	}
blue_bgobj5.onclick=function(){		//教师5被点击时
	i=5;
	add_img();
	add_content();
	}
blue_bgobj6.onclick=function(){		//教师6被点击时
	i=6;
	add_img();
	add_content();
	}
blue_bgobj7.onclick=function(){		//教师7被点击时
	i=7;
	add_img();
	add_content();
	}
	blue_bgobj.onmouseover=function(){
	blue_bgobj.style.background="#1371d1";
	blue_bgobj.style.color="#fff";
	}
blue_bgobj.onmouseout=function(){
	blue_bgobj.style.background="#fff";
	blue_bgobj.style.color="#6c6c6c";
}
	blue_bgobj2.onmouseover=function(){
	blue_bgobj2.style.background="#1371d1";
	blue_bgobj2.style.color="#fff";
	}
blue_bgobj2.onmouseout=function(){
	blue_bgobj2.style.background="#fff";
	blue_bgobj2.style.color="#6c6c6c";
}
blue_bgobj3.onmouseover=function(){
	blue_bgobj3.style.background="#1371d1";
	blue_bgobj3.style.color="#fff";
	}
blue_bgobj3.onmouseout=function(){
	blue_bgobj3.style.background="#fff";
	blue_bgobj3.style.color="#6c6c6c";
}
blue_bgobj4.onmouseover=function(){
	blue_bgobj4.style.background="#1371d1";
	blue_bgobj4.style.color="#fff";
	}
blue_bgobj4.onmouseout=function(){
	blue_bgobj4.style.background="#fff";
	blue_bgobj4.style.color="#6c6c6c";
}
	blue_bgobj5.onmouseover=function(){
	blue_bgobj5.style.background="#1371d1";
	blue_bgobj5.style.color="#fff";
	}
blue_bgobj5.onmouseout=function(){
	blue_bgobj5.style.background="#fff";
	blue_bgobj5.style.color="#6c6c6c";
}

blue_bgobj6.onmouseover=function(){
	blue_bgobj6.style.background="#1371d1";
	blue_bgobj6.style.color="#fff";
	}
blue_bgobj6.onmouseout=function(){
	blue_bgobj6.style.background="#fff";
	blue_bgobj6.style.color="#6c6c6c";
}

blue_bgobj7.onmouseover=function(){
	blue_bgobj7.style.background="#1371d1";
	blue_bgobj7.style.color="#fff";
	}
blue_bgobj7.onmouseout=function(){
	blue_bgobj7.style.background="#fff";
	blue_bgobj7.style.color="#6c6c6c";
}

//当左右图标被点击时的事件
go_leftobj=document.getElementById("go_left");
go_rightobj=document.getElementById("go_right");
JS_imgobj=document.getElementById("JS_img");
JS_nameobj=document.getElementById("JS_name");
JS_jieshaoobj=document.getElementById("JS_jieshao");

	add_img();//默认幻灯片出来的图片是第一张
	add_content();
		//向左的图标被点击时
	go_leftobj.onclick=function () {
		i--;
		if(i==0){
			i=7;
			}
			add_img();
			add_content();
		}
	//向右的图标被点击时
	go_rightobj.onclick=function () {
		i++;
		if(i==8){
			i=1;
			}
			add_img();
			add_content();
		}
		
//根据i的值判断该显示的内容是什么
function add_img(){
	JS_imgobj.src= encodeURI("http://localhost:9999/ZGHYGQXH/templets/default/images/teacher"+i+".jpg");//重写图片路径
	}
function add_content(){
				switch (i) {
				case 1:
					JS_nameobj.innerHTML="刘轩睿";
					JS_jieshaoobj.innerHTML="中国婿姻家庭咨询师培训项目发起人之一，在国内最早开办婿姻家庭咨询师培训，其培训级别及学员人数为全国领先，担任国际婚姻家庭咨询师协会大中华区主席，华夏婚姻家庭网CEO,中国情商教育研究院院长，深圳爱尔法文化发展有限公司董事长。";
				break;
				case 2:
					JS_nameobj.innerHTML="教师2";
					JS_jieshaoobj.innerHTML="教师2的简介内容";
				break;
				case 3:
					JS_nameobj.innerHTML="教师3";
					JS_jieshaoobj.innerHTML="教师3的简介内容";
				break;
				case 4:
					JS_nameobj.innerHTML="教师4";
					JS_jieshaoobj.innerHTML="教师4的简介内容";
				break;
				case 5:
					 JS_nameobj.innerHTML="教师5";
					JS_jieshaoobj.innerHTML="教师5的简介内容";
				break;
				case 6:
					 JS_nameobj.innerHTML="教师6";
					JS_jieshaoobj.innerHTML="教师6的简介内容";
				break;
				case 7:
					 JS_nameobj.innerHTML="教师7";
					JS_jieshaoobj.innerHTML="教师7的简介内容";
				break;
			}
	}

//创建定时器实现讲师图片和介绍的定时转换
setInterval("jishi()",5000);//1000为1秒钟
       function jishi()
       {
           i++;
						if(i==8){
							i=1;
							}
							add_img();
							add_content();
        }