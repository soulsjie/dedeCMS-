<li>[field:image/] <h1><a href='[field:arcurl/]' target='_black'>[field:title/]</a></h1>
		<h2>{dede:sql  sql="select body from dede_addonarticle where typeid=2 ORDER BY aid DESC"}
		[field:body function=cn_substr(Html2Text(@me),50)/]...<br/>
		{/dede:sql}</h2> </li>