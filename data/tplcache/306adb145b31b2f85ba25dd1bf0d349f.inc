<div class="lt_img">[field:image/]</div>
					<div class="lt_diban">
							<div class="lt_title"><a href='[field:arcurl/]' target='_black'>[field:title/]</a></div>
							<div class="lt_content">内容</div>
					</div>
					{dede:sql sql="SELECT body  FROM `dede_addonarticle`  where typeid = 6 ORDER BY aid DESC limit 3"}
						<div class="mukuai02_text2">[field:body function='cn_substr(html2text(@me),160)'/]...</div>
					{/dede:sql}
					<div class="lt_left">
							文章列表
					</div>
					<div class="lt_right">右半部</div>	
		</div>
		<!--IMFCA父母公益课程模块-->
		<div class="index_xueshu_contentr">
					<div class="lt_head">IMFCA父母公益课程</div>
					<div class="lt_more"><img src="{dede:global.cfg_templets_skin