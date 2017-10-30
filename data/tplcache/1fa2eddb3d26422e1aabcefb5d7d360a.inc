{dede:sql sql="SELECT body  FROM `dede_addonarticle`  where typeid = 2 ORDER BY aid DESC limit 3"}
	

					<div class="mukuai02">
						<div class="mukuai02_img">[field:image/]</div>
						<div class="mukuai02_title"> <a href='[field:arcurl/]' target='_black'>[field:title/]</a></div>
						<div class="mukuai02_text">[field:body function='cn_substr(html2text(@me),100)'/]</div>
					</div>