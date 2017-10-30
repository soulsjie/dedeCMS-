<script>
					{dede:sql sql="SELECT body  FROM `dede_addonarticle`  where typeid = 2 ORDER BY aid DESC limit 3"}
					var mycars=new Array()
					var i=0;
						mycars[i]=[field:body function='cn_substr(html2text(@me),200)'/]
						document.write(mycars[0]);
			
				</script>